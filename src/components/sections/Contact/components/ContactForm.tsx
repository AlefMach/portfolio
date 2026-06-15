import SendIcon from "@mui/icons-material/Send";
import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { type ChangeEvent, type FormEvent, useState } from "react";

import {
  isContactEmailConfigured,
  sendContactEmail,
} from "../../../../services/contactEmail";
import type { ContactFormLabels } from "../types";

type ContactFormValues = {
  email: string;
  message: string;
  name: string;
  subject: string;
};

type ContactFormProps = {
  labels: ContactFormLabels;
};

const initialValues: ContactFormValues = {
  email: "",
  message: "",
  name: "",
  subject: "",
};

export function ContactForm({ labels }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [status, setStatus] = useState<"error" | "idle" | "success">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((currentValues) => ({
        ...currentValues,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      await sendContactEmail(values);
      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isConfigured = isContactEmailConfigured();

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      spacing={2}
      sx={{
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        p: { xs: 2, sm: 3 },
      }}
    >
      <Stack spacing={0.75}>
        <Typography
          component="h3"
          sx={{ fontSize: "1.25rem", fontWeight: 900 }}
        >
          {labels.title}
        </Typography>
        <Typography
          sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.6 }}
        >
          {labels.description}
        </Typography>
      </Stack>

      {!isConfigured && <Alert severity="warning">{labels.configError}</Alert>}
      {status === "success" && (
        <Alert severity="success">{labels.success}</Alert>
      )}
      {status === "error" && (
        <Alert severity="error">
          {isConfigured ? labels.error : labels.configError}
        </Alert>
      )}

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          autoComplete="name"
          fullWidth
          label={labels.nameLabel}
          onChange={handleChange("name")}
          placeholder={labels.namePlaceholder}
          required
          value={values.name}
        />
        <TextField
          autoComplete="email"
          fullWidth
          label={labels.emailLabel}
          onChange={handleChange("email")}
          placeholder={labels.emailPlaceholder}
          required
          type="email"
          value={values.email}
        />
      </Stack>

      <TextField
        fullWidth
        label={labels.subjectLabel}
        onChange={handleChange("subject")}
        placeholder={labels.subjectPlaceholder}
        required
        value={values.subject}
      />

      <TextField
        fullWidth
        label={labels.messageLabel}
        minRows={5}
        multiline
        onChange={handleChange("message")}
        placeholder={labels.messagePlaceholder}
        required
        value={values.message}
      />

      <Button
        disabled={isSubmitting}
        size="large"
        startIcon={
          isSubmitting ? (
            <CircularProgress color="inherit" size={18} />
          ) : (
            <SendIcon />
          )
        }
        type="submit"
        variant="contained"
        sx={{
          alignSelf: { xs: "stretch", sm: "flex-start" },
          minHeight: 48,
          px: 3,
        }}
      >
        {isSubmitting ? labels.submitting : labels.submit}
      </Button>
    </Stack>
  );
}
