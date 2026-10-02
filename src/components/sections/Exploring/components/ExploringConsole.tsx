import { Box, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { useTranslation } from "../../../../hooks/useTranslation";

type LogLine = {
  level: "info" | "ok" | "accent" | "muted";
  text: string;
};

const SCRIPTS: Record<
  "ai" | "system",
  Record<"pt" | "en", { command: string; lines: LogLine[] }>
> = {
  ai: {
    pt: {
      command: "agent run --channel interno --trace on",
      lines: [
        { level: "muted", text: "[10:42:01] demanda recebida no canal interno" },
        { level: "info", text: "[10:42:01] agent: classificando intenção..." },
        { level: "info", text: "[10:42:02] retrieval: 6 fontes recuperadas (RAG)" },
        { level: "info", text: "[10:42:02] mcp: contexto enriquecido" },
        { level: "accent", text: "[10:42:03] agent: decidiu chamar tools: [triage, github]" },
        { level: "ok", text: "[10:42:03] workflow de desenvolvimento iniciado" },
        { level: "ok", text: "[10:42:04] slack: notificação postada no canal" },
        { level: "muted", text: "[10:42:04] trilha auditável registrada ✔" },
      ],
    },
    en: {
      command: "agent run --channel internal --trace on",
      lines: [
        { level: "muted", text: "[10:42:01] request received on internal channel" },
        { level: "info", text: "[10:42:01] agent: classifying intent..." },
        { level: "info", text: "[10:42:02] retrieval: 6 sources fetched (RAG)" },
        { level: "info", text: "[10:42:02] mcp: context enriched" },
        { level: "accent", text: "[10:42:03] agent: calling tools: [triage, github]" },
        { level: "ok", text: "[10:42:03] development workflow started" },
        { level: "ok", text: "[10:42:04] slack: notification posted" },
        { level: "muted", text: "[10:42:04] audit trail recorded ✔" },
      ],
    },
  },
  system: {
    pt: {
      command: "kubectl get pipeline payments --watch",
      lines: [
        { level: "muted", text: "[10:42:01] api-gateway: 200 OK em 38ms (p99)" },
        { level: "info", text: "[10:42:01] queue: depth=120, throughput estável" },
        { level: "info", text: "[10:42:02] worker: pool escalado 4 → 6 réplicas" },
        { level: "accent", text: "[10:42:02] postgres: transação commitada, outbox emitido" },
        { level: "info", text: "[10:42:03] otel: trace propagado ponta a ponta" },
        { level: "muted", text: "[10:42:03] slack: alerta resolvido automaticamente" },
        { level: "ok", text: "[10:42:04] SLO dentro do alvo: 99.98% disponibilidade" },
      ],
    },
    en: {
      command: "kubectl get pipeline payments --watch",
      lines: [
        { level: "muted", text: "[10:42:01] api-gateway: 200 OK at 38ms (p99)" },
        { level: "info", text: "[10:42:01] queue: depth=120, steady throughput" },
        { level: "info", text: "[10:42:02] worker: pool scaled 4 → 6 replicas" },
        { level: "accent", text: "[10:42:02] postgres: transaction committed, outbox emitted" },
        { level: "info", text: "[10:42:03] otel: trace propagated end-to-end" },
        { level: "muted", text: "[10:42:03] slack: alert auto-resolved" },
        { level: "ok", text: "[10:42:04] SLO on target: 99.98% availability" },
      ],
    },
  },
};

type ExploringConsoleProps = {
  variant: "ai" | "system";
};

export function ExploringConsole({ variant }: ExploringConsoleProps) {
  const theme = useTheme();
  const { language } = useTranslation();
  const script = SCRIPTS[variant][language === "pt" ? "pt" : "en"];
  const [visibleCount, setVisibleCount] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const holdRef = useRef(0);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      if (pausedRef.current) return;
      setVisibleCount((current) => {
        if (current < script.lines.length) {
          holdRef.current = 0;
          return current + 1;
        }
        holdRef.current += 1;
        if (holdRef.current >= 6) {
          holdRef.current = 0;
          return 0;
        }
        return current;
      });
    }, 620);

    return () => clearInterval(id);
  }, [script, prefersReducedMotion]);

  const visibleLines = prefersReducedMotion
    ? script.lines
    : script.lines.slice(0, visibleCount);

  const handlePause = () => {
    pausedRef.current = true;
    setPaused(true);
  };
  const handleResume = () => {
    pausedRef.current = false;
    setPaused(false);
  };
  const handleReplay = () => {
    holdRef.current = 0;
    setVisibleCount(0);
    pausedRef.current = false;
    setPaused(false);
  };

  const colors: Record<LogLine["level"], string> = {
    info: theme.palette.mode === "dark" ? "#cbd5e1" : "#cbd5e1",
    ok: "#4ade80",
    accent: theme.palette.primary.main,
    muted: theme.palette.mode === "dark" ? "#64748b" : "#64748b",
  };

  return (
    <Box
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      sx={{
        background: "#0b1020",
        border: 1,
        borderColor: "rgba(148, 163, 184, 0.25)",
        borderRadius: 2.5,
        boxShadow: "0 18px 50px rgba(2, 6, 23, 0.55)",
        fontFamily: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          background: "rgba(30, 41, 59, 0.6)",
          display: "flex",
          gap: 0.75,
          px: 1.5,
          py: 1,
        }}
      >
        {["#f87171", "#fbbf24", "#34d399"].map((dot) => (
          <Box
            key={dot}
            sx={{ bgcolor: dot, borderRadius: "50%", height: 10, width: 10 }}
          />
        ))}
        <Box sx={{ color: "#64748b", fontSize: "0.68rem", ml: 1 }}>
          {variant === "ai" ? "agent.log" : "pipeline.log"}
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {paused && (
          <Box
            sx={{
              color: "#fbbf24",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            {language === "pt" ? "PAUSADO" : "PAUSED"}
          </Box>
        )}
        <Box
          component="button"
          onClick={handleReplay}
          aria-label={language === "pt" ? "Repetir" : "Replay"}
          sx={{
            background: "transparent",
            border: 1,
            borderColor: "rgba(148, 163, 184, 0.35)",
            borderRadius: 1,
            color: "#94a3b8",
            cursor: "pointer",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            px: 1,
            py: 0.25,
            "&:hover": { borderColor: theme.palette.primary.main, color: theme.palette.primary.main },
          }}
        >
          ↻ REPLAY
        </Box>
      </Box>

      <Box sx={{ fontSize: "0.72rem", lineHeight: 1.9, p: 1.75, minHeight: 220 }}>
        <Box sx={{ borderLeft: "2px solid rgba(148, 163, 184, 0.2)", pl: 1.5, mb: 0.5 }}>
          <Box component="span" sx={{ color: theme.palette.primary.main }}>
            ${" "}
          </Box>
          <Box component="span" sx={{ color: "#e2e8f0" }}>
            {script.command}
          </Box>
        </Box>

        {visibleLines.map((line) => (
          <Box
            key={line.text}
            sx={{
              borderLeft: "2px solid",
              borderColor: colors[line.level],
              color: colors[line.level],
              cursor: "default",
              pl: 1.5,
              transition: "background 0.2s ease",
              whiteSpace: "pre-wrap",
              "&:hover": { background: "rgba(148, 163, 184, 0.08)" },
            }}
          >
            {line.text}
          </Box>
        ))}

        <Box
          component="span"
          sx={{
            animation: "blink 1s steps(2, start) infinite",
            borderLeft: "2px solid rgba(148, 163, 184, 0.2)",
            color: theme.palette.primary.main,
            display: "inline-block",
            pl: 1.5,
            "@keyframes blink": { "50%": { opacity: 0 } },
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        >
          ▍
        </Box>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          borderTop: 1,
          borderColor: "rgba(148, 163, 184, 0.18)",
          color: "#64748b",
          display: "flex",
          fontSize: "0.64rem",
          gap: 1,
          px: 1.75,
          py: 0.9,
        }}
      >
        <Box
          sx={{
            animation: "pulseDot 2s ease-in-out infinite",
            bgcolor: "#4ade80",
            borderRadius: "50%",
            height: 7,
            width: 7,
            "@keyframes pulseDot": { "50%": { opacity: 0.3 } },
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        />
        {variant === "ai"
          ? language === "pt"
            ? "ao vivo — agent-production-01"
            : "live — agent-production-01"
          : language === "pt"
            ? "monitorando — payments-cluster"
            : "watching — payments-cluster"}
      </Box>
    </Box>
  );
}
