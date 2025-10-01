import { seo } from "@/data/data";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: `Contact Me | ${seo.title}`,
  description: "Get in touch with me to discuss projects, collaborations, or just to say hello.",
  keywords: "contact, get in touch, collaboration, email, message, web developer"
};

export default function ContactPage() {
  return (
    <div className="md:w-[700px] w-full mt-5 p-4">
      <main className="flex flex-col gap-2">
        <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
          Contact Me
        </h1>
        <ContactForm />
      </main>
    </div>
  );
}
