import { Stack } from "@mui/material";

import { SectionHeading } from "../../SectionHeading";
import { AboutFocusList } from "./AboutFocusList";

type AboutHeaderProps = {
  description: string;
  focusItems: readonly string[];
  title: string;
};

export function AboutHeader({
  description,
  focusItems,
  title,
}: AboutHeaderProps) {
  return (
    <Stack spacing={3}>
      <SectionHeading title={title} description={description} />

      <AboutFocusList items={focusItems} />
    </Stack>
  );
}
