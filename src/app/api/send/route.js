import { Resend } from "resend";
import { ContactSubmitterEmail } from "../../components/EmailTemplate";
import { getContactReceiverEmail, getContactSubmitterEmail } from "@/app/lib/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, message } = body;

     const emailHtml = getContactSubmitterEmail(fullName);

    // Send email to user
    await resend.emails.send({
      from: "no-reply@sanketagrawal.com",
      to: [email],
      subject: `Thanks for contacting, ${fullName}`,
      html: emailHtml,
    });

    await resend.emails.send({
      from: "no-reply@sanketagrawal.com",
      to: ["mailsanketagrawal@gmail.com"],
      subject: `New contact form submission from ${fullName}`,
      html: getContactReceiverEmail(fullName, email, message),
    });


    return new Response(
      JSON.stringify({ message: "Thank you for contacting" }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
}
