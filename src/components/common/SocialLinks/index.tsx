import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import { IconButton, Stack, Tooltip } from "@mui/material";

import { profileLinks } from "../../../utils/profileLinks";

const socialLinks = [
  {
    href: profileLinks.github,
    icon: GitHubIcon,
    label: "GitHub",
  },
  {
    href: profileLinks.linkedin,
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: profileLinks.medium,
    icon: ArticleOutlinedIcon,
    label: "Medium",
  },
  {
    href: profileLinks.email,
    icon: MailOutlineIcon,
    label: "Email",
  },
] as const;

type SocialLinksProps = {
  size?: "small" | "medium";
};

export function SocialLinks({ size = "medium" }: SocialLinksProps) {
  const buttonSize = size === "small" ? 36 : 42;

  return (
    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        const isEmail = link.href.startsWith("mailto:");

        return (
          <Tooltip key={link.label} title={link.label}>
            <IconButton
              aria-label={link.label}
              href={link.href}
              rel={isEmail ? undefined : "noopener noreferrer"}
              size={size}
              target={isEmail ? undefined : "_blank"}
              sx={{
                border: 1,
                borderColor: "divider",
                color: "text.secondary",
                height: buttonSize,
                width: buttonSize,
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
              }}
            >
              <Icon fontSize={size} />
            </IconButton>
          </Tooltip>
        );
      })}
    </Stack>
  );
}
