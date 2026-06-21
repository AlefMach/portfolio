import { Stack, Typography } from "@mui/material";

import { useTypewriterSkill } from "../hooks/useTypewriterSkill";
import { HeroActions } from "./HeroActions";

type HeroContentProps = {
  description: string;
  eyebrow: string;
  onDownloadResume: () => void;
  primaryAction: string;
  resumeAction: string;
  secondaryAction: string;
  skills: readonly string[];
  title: string;
};

export function HeroContent({
  description,
  eyebrow,
  onDownloadResume,
  primaryAction,
  resumeAction,
  secondaryAction,
  skills,
  title,
}: HeroContentProps) {
  const displayedSkill = useTypewriterSkill(skills);

  return (
    <Stack
      spacing={{ xs: 2.25, md: 2.5, lg: 3 }}
      sx={{
        "@media (min-width: 900px) and (max-height: 900px)": {
          gap: 2,
        },
      }}
    >
      <Typography
        component="p"
        sx={{
          color: "primary.main",
          fontSize: { xs: "1rem", md: "1.35rem", lg: "1.6rem" },
          fontWeight: 800,
          "@media (min-width: 900px) and (max-height: 900px)": {
            fontSize: "1.2rem",
          },
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        component="h1"
        sx={{
          fontSize: {
            xs: "2.5rem",
            sm: "3.5rem",
            md: "4.2rem",
            lg: "4.75rem",
          },
          fontWeight: 850,
          letterSpacing: 0,
          lineHeight: { xs: 1.05, md: 1 },
          maxWidth: 760,
          "@media (min-width: 900px) and (max-height: 900px)": {
            fontSize: "3.8rem",
          },
        }}
      >
        {title}

        <Typography
          component="span"
          sx={{
            color: "primary.main",
            display: "block",
            fontSize: {
              xs: "1.25rem",
              sm: "1.5rem",
              md: "1.6rem",
              lg: "1.75rem",
            },
            fontWeight: 800,
            minHeight: "1.35em",
            "@media (min-width: 900px) and (max-height: 900px)": {
              fontSize: "1.45rem",
            },
            "&::after": {
              animation: "cursorBlink 900ms steps(2, start) infinite",
              content: '"|"',
              display: "inline-block",
              ml: 0.5,
            },
            "@keyframes cursorBlink": {
              "0%, 45%": { opacity: 1 },
              "46%, 100%": { opacity: 0 },
            },
          }}
        >
          {displayedSkill || "\u00A0"}
        </Typography>
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: {
            xs: "1rem",
            sm: "1.125rem",
            md: "1.15rem",
            lg: "1.25rem",
          },
          lineHeight: { xs: 1.65, md: 1.6, lg: 1.7 },
          maxWidth: 640,
          "@media (min-width: 900px) and (max-height: 900px)": {
            fontSize: "1.05rem",
            lineHeight: 1.55,
          },
        }}
      >
        {description}
      </Typography>

      <HeroActions
        onDownloadResume={onDownloadResume}
        primaryAction={primaryAction}
        resumeAction={resumeAction}
        secondaryAction={secondaryAction}
      />
    </Stack>
  );
}
