# EmailJS Contact Form Integration

This project sends contact form messages from the frontend using the EmailJS REST API. The implementation lives in `src/services/contactEmail.ts`, while the contact UI is split into focused components under `src/components/sections/Contact/components`.

## Why EmailJS

EmailJS is useful for this portfolio because it can send email directly from a static Vite/React deployment without adding a custom backend. The public key is expected to be exposed in the browser, but private keys must not be added to this frontend.

Official reference: https://www.emailjs.com/docs/rest-api/send/

## Required EmailJS Setup

1. Create or sign in to an EmailJS account.
2. Add an email service in the EmailJS dashboard, for example Gmail, Outlook or another supported provider.
3. Create an email template.
4. Add these template variables to the template body:

```text
{{from_name}}
{{from_email}}
{{reply_to}}
{{subject}}
{{message}}
```

5. Copy the Service ID, Template ID and Public Key from EmailJS.

## Environment Variables

Create a local `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Vite only exposes variables prefixed with `VITE_` to the browser. Restart the dev server after changing `.env`.

For production, add the same variables to the hosting provider settings. Do not commit real keys to the repository.

## Template Parameters Sent by the App

The contact form sends this payload to EmailJS:

```ts
{
  from_name: values.name,
  from_email: values.email,
  reply_to: values.email,
  subject: values.subject,
  message: values.message,
}
```

Use `reply_to` in the EmailJS template settings so replies go to the person who submitted the form.

## Local Verification

Run the project locally:

```bash
npm run dev
```

Open the contact section, fill the form and submit it. If the environment variables are missing, the UI shows a configuration warning instead of silently failing.

## Production Notes

EmailJS applies rate limits to requests. The REST API documentation currently lists a limit of 1 request per second for the send endpoint. For higher-risk public forms, consider enabling EmailJS spam protection options such as domain restrictions and CAPTCHA.
