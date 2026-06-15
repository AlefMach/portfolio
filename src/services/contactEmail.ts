export type ContactEmailPayload = {
  email: string;
  message: string;
  name: string;
  subject: string;
};

const EMAILJS_SEND_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

export function isContactEmailConfigured() {
  return Boolean(
    emailjsConfig.publicKey &&
    emailjsConfig.serviceId &&
    emailjsConfig.templateId,
  );
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  if (!isContactEmailConfigured()) {
    throw new Error("EmailJS is not configured.");
  }

  const response = await fetch(EMAILJS_SEND_ENDPOINT, {
    body: JSON.stringify({
      service_id: emailjsConfig.serviceId,
      template_id: emailjsConfig.templateId,
      user_id: emailjsConfig.publicKey,
      template_params: {
        from_email: payload.email,
        from_name: payload.name,
        message: payload.message,
        reply_to: payload.email,
        subject: payload.subject,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "EmailJS rejected the request.");
  }
}
