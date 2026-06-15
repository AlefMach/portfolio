import { Box } from "@mui/material";

type ProjectTagsProps = {
  hasCaseFields: boolean;
  tags: readonly string[];
};

export function ProjectTags({ hasCaseFields, tags }: ProjectTagsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        mt: hasCaseFields ? 0 : "auto",
      }}
    >
      {tags.map((tag) => (
        <Box
          key={tag}
          component="span"
          sx={{
            border: 1,
            borderColor: "divider",
            borderRadius: 999,
            color: "text.secondary",
            fontSize: "0.75rem",
            fontWeight: 700,
            lineHeight: 1,
            px: 1.25,
            py: 0.75,
          }}
        >
          {tag}
        </Box>
      ))}
    </Box>
  );
}
