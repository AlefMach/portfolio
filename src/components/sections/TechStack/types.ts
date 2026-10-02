import type { ElementType } from "react";

export type StackCategory = {
  items: string[];
  title: string;
};

export type IconMap = Record<string, ElementType>;
