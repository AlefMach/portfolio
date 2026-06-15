import type { SvgIconComponent } from "@mui/icons-material";

export type StackCategory = {
  items: string[];
  title: string;
};

export type IconMap = Record<string, SvgIconComponent>;
