import * as React from "react";

export const ContactSubmitterEmail = ({ fullName = "" }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl max-w-xl mx-auto font-sans">
      <h2 className="text-2xl font-bold text-gray-800">
        Hi {fullName || "there"},
      </h2>
      <p className="text-gray-600 text-base leading-relaxed mt-4">
        Thank you for reaching out to us. We’ve received your message and our
        team will get back to you shortly.
      </p>
      <p className="text-gray-600 text-base leading-relaxed mt-2">
        If you have any urgent queries, feel free to reply to this email.
      </p>
      <div className="mt-6 text-center">
        <a
          href="https://sanketagrawal.com"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          Visit Our Website
        </a>
      </div>
      <p className="mt-6 text-sm text-gray-500">– The Team</p>
    </div>
  );
};

export const ContactReceiverEmail = ({
  fullName = "",
  email = "",
  message = "",
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-xl mx-auto font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        📬 New Contact Form Submission
      </h2>
      <p className="text-gray-600 text-base mb-4">
        You've received a new message via the contact form.
      </p>

      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-gray-800 text-sm">
          <span className="font-semibold">Name:</span> {fullName}
        </p>
        <p className="text-gray-800 text-sm mt-2">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-800 text-sm mt-2">
          <span className="font-semibold">Message:</span> {message}
        </p>
      </div>

      <div className="mt-6 text-center">
        <a
          href={`mailto:${email}`}
          className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
        >
          Reply to {fullName || "User"}
        </a>
      </div>
    </div>
  );
};