import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import type { IconMap } from "./types";

export const fallbackStackIcon = TerminalOutlinedIcon;
export const stackBadgeIcon = RocketLaunchOutlinedIcon;

export const categoryIcons: IconMap = {
  Backend: HubOutlinedIcon,
  "Banco de Dados": StorageOutlinedIcon,
  Cloud: CloudQueueOutlinedIcon,
  Database: StorageOutlinedIcon,
  Frontend: CodeOutlinedIcon,
  "IA e Automação": AutoAwesomeOutlinedIcon,
  "AI and Automation": AutoAwesomeOutlinedIcon,
  Observability: InsightsOutlinedIcon,
  Observabilidade: InsightsOutlinedIcon,
};

export const itemIcons: IconMap = {
  APIs: ApiOutlinedIcon,
  AWS: CloudQueueOutlinedIcon,
  "CI/CD": RocketLaunchOutlinedIcon,
  Docker: RocketLaunchOutlinedIcon,
  Elixir: BoltOutlinedIcon,
  LLMs: SmartToyOutlinedIcon,
  Logs: TerminalOutlinedIcon,
  "Material UI": IntegrationInstructionsOutlinedIcon,
  Mensageria: HubOutlinedIcon,
  Messaging: HubOutlinedIcon,
  Metrics: SpeedOutlinedIcon,
  Métricas: SpeedOutlinedIcon,
  "Node.js": TerminalOutlinedIcon,
  n8n: SchemaOutlinedIcon,
  OpenTelemetry: VisibilityOutlinedIcon,
  PostgreSQL: StorageOutlinedIcon,
  RAG: DataObjectOutlinedIcon,
  React: CodeOutlinedIcon,
  Redis: MemoryOutlinedIcon,
  Slack: IntegrationInstructionsOutlinedIcon,
  Tracing: VisibilityOutlinedIcon,
  TypeScript: CodeOutlinedIcon,
};
