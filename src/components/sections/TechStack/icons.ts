import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  SiApachecassandra,
  SiApacheflink,
  SiApachekafka,
  SiDocker,
  SiElixir,
  SiGo,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiMui,
  SiN8N,
  SiNodedotjs,
  SiOpentelemetry,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

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
  "REST APIs": ApiOutlinedIcon,
  "APIs REST": ApiOutlinedIcon,
  AWS: CloudQueueOutlinedIcon,
  "CI/CD": RocketLaunchOutlinedIcon,
  Docker: SiDocker,
  Elixir: SiElixir,
  Go: SiGo,
  Kafka: SiApachekafka,
  Kubernetes: SiKubernetes,
  Kotlin: SiKotlin,
  LLMs: SmartToyOutlinedIcon,
  Logs: TerminalOutlinedIcon,
  "Material UI": SiMui,
  Messaging: HubOutlinedIcon,
  Mensageria: HubOutlinedIcon,
  "Event-driven Architecture": SchemaOutlinedIcon,
  "Arquitetura orientada a eventos": SchemaOutlinedIcon,
  Metrics: SpeedOutlinedIcon,
  Métricas: SpeedOutlinedIcon,
  Alerts: BoltOutlinedIcon,
  Alertas: BoltOutlinedIcon,
  MongoDB: SiMongodb,
  "Node.js": SiNodedotjs,
  OpenTelemetry: SiOpentelemetry,
  PostgreSQL: SiPostgresql,
  Python: SiPython,
  RAG: DataObjectOutlinedIcon,
  React: SiReact,
  Redis: SiRedis,
  Cassandra: SiApachecassandra,
  Slack: IntegrationInstructionsOutlinedIcon,
  "SQL Server": StorageOutlinedIcon,
  SqlServer: StorageOutlinedIcon,
  Terraform: SiTerraform,
  Tracing: VisibilityOutlinedIcon,
  TypeScript: SiTypescript,
  n8n: SiN8N,
  Flink: SiApacheflink,
  "AI Agents": SmartToyOutlinedIcon,
  "Agentes de IA": SmartToyOutlinedIcon,
  "Tool Calling": SchemaOutlinedIcon,
  MCP: CodeOutlinedIcon,
  "Internal Workflows": SchemaOutlinedIcon,
  "Workflows internos": SchemaOutlinedIcon,
};
