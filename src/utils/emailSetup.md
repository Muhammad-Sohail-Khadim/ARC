# EmailJS Setup Instructions

To receive contact form emails in your Gmail, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Connect Gmail Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Follow the OAuth flow to connect your Gmail account (mr70146367@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

## 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{project_type}}

Hello,

You have received a new contact form submission from your NAZStudio website:

Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}

Message:
{{message}}

---
This email was sent automatically from your website contact form.
```

4. Note down the **Template ID** (e.g., "template_xyz789")

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., "user_abc123xyz")

## 5. Update Contact Component
Replace these values in `src/components/Contact.tsx`:

```javascript
const serviceId = 'your_service_id_here';     // From step 2
const templateId = 'your_template_id_here';   // From step 3
const publicKey = 'your_public_key_here';     // From step 4
```

## 6. Test the Form
1. Fill out the contact form on your website
2. Check your Gmail inbox for the email
3. Check EmailJS dashboard for delivery status

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Upgrade Options
- Paid plans available for higher limits
- Remove EmailJS branding
- Priority support

## Alternative Free Services
If you need more emails:
- Formspree (1000 submissions/month)
- Netlify Forms (100 submissions/month)
- Web3Forms (unlimited)

## Security Notes
- Public key is safe to expose in frontend code
- Service and template IDs are also safe to expose
- Never expose your private key in frontend code