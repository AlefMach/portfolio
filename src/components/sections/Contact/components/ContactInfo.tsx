import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Link, Stack, Typography } from "@mui/material";

import { profileLinks } from "../../../../utils/profileLinks";
import { SocialLinks } from "../../../common/SocialLinks";

type ContactInfoProps = {
  email?: string;
  meta: string;
  primaryAction: string;
  secondaryAction: string;
};

export function ContactInfo({
  email,
  meta,
  primaryAction,
  secondaryAction,
}: ContactInfoProps) {
  return (
    <Stack spacing={2.5}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ width: { xs: "100%", sm: "auto" } }}
      >
        <Button
          href={profileLinks.email}
          size="large"
          startIcon={<EmailOutlinedIcon />}
          variant="contained"
          sx={{ minHeight: 48, px: 3 }}
        >
          {primaryAction}
        </Button>
        <Button
          href={profileLinks.linkedin}
          rel="noopener noreferrer"
          size="large"
          startIcon={<LinkedInIcon />}
          target="_blank"
          variant="outlined"
          sx={{ minHeight: 48, px: 3 }}
        >
          {secondaryAction}
        </Button>
      </Stack>

      <Stack spacing={1.5}>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
          {meta}
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
          <Link href={profileLinks.email} underline="hover">
            {email}
          </Link>
        </Typography>
        <SocialLinks />
      </Stack>
    </Stack>
  );
}
