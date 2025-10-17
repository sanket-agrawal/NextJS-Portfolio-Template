// Contact Submitter Email
export function getContactSubmitterEmail(fullName = "") {
  return `
  <div style="background-color:#f9fafb; padding:24px; border-radius:16px; max-width:600px; margin:0 auto; font-family:sans-serif;">
    <h2 style="font-size:24px; font-weight:bold; color:#1f2937;">
      Hi ${fullName || "there"},
    </h2>
    <p style="color:#4b5563; font-size:16px; line-height:1.6; margin-top:16px;">
      Thank you for reaching out to us. We’ve received your message and we will get back to you shortly.
    </p>
    <p style="color:#4b5563; font-size:16px; line-height:1.6; margin-top:8px;">
      If you have any urgent queries, feel free to reply to this email.
    </p>
    <div style="margin-top:24px; text-align:center;">
      <a href="https://sanketagrawal.com"
        style="background-color:#2563eb; color:#fff; padding:8px 20px; border-radius:8px; font-size:14px; font-weight:500; text-decoration:none; display:inline-block;">
        Visit Our Website
      </a>
    </div>
    <p style="margin-top:24px; font-size:14px; color:#6b7280;">– The Team</p>
  </div>
  `;
}

// Contact Receiver Email
export function getContactReceiverEmail(fullName = "", email = "", message = "") {
  return `
  <div style="background-color:#ffffff; border:1px solid #e5e7eb; border-radius:16px; padding:24px; max-width:600px; margin:0 auto; font-family:sans-serif;">
    <h2 style="font-size:24px; font-weight:bold; color:#1f2937; margin-bottom:8px;">
      📬 New Contact Form Submission
    </h2>
    <p style="color:#4b5563; font-size:16px; margin-bottom:16px;">
      You've received a new message via the contact form.
    </p>

    <div style="background-color:#f9fafb; border-radius:8px; padding:16px;">
      <p style="color:#1f2937; font-size:14px; margin:0;">
        <span style="font-weight:600;">Name:</span> ${fullName}
      </p>
      <p style="color:#1f2937; font-size:14px; margin:8px 0 0 0;">
        <span style="font-weight:600;">Email:</span> ${email}
      </p>
      <p style="color:#1f2937; font-size:14px; margin:8px 0 0 0;">
        <span style="font-weight:600;">Message:</span> ${message}
      </p>
    </div>

    <div style="margin-top:24px; text-align:center;">
      <a href="mailto:${email}"
        style="background-color:#16a34a; color:#fff; padding:8px 20px; border-radius:8px; font-size:14px; font-weight:500; text-decoration:none; display:inline-block;">
        Reply to ${fullName || "User"}
      </a>
    </div>
  </div>
  `;
}
