import { Resend } from "resend";
import { render } from "@react-email/render";
import { ContactSubmitterEmail } from "../../components/EmailTemplate";

console.log(process.env.RESEND_API_KEY)

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, message } = body;

     const emailHtml = render(ContactSubmitterEmail({ fullName }));

    // Send email to user
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: `Thanks for contacting us, ${fullName} - Sanket Agrawal`,
      html: emailHtml,
    });

    return new Response(
      JSON.stringify({ message: "Thank you for contacting" }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
}
