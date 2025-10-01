"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch {
      setStatus("⚠️ Failed to send. Check your network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-1">
      <div>
        <label className="uppercase text-sm text-base-content/80 font-bold">Full Name</label>
        <input
          className="w-full mt-1 p-3 rounded-lg border border-base-content text-base-content/80"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-3">
        <label className="uppercase text-sm text-base-content/80 font-bold">Email</label>
        <input
          className="w-full mt-1 p-3 rounded-lg border border-base-content text-base-content/80"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-3">
        <label className="uppercase text-sm text-base-content/80 font-bold">Message</label>
        <textarea
          className="w-full mt-1 p-3 rounded-lg border border-base-content text-base-content/80"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          disabled={loading}
          className="uppercase text-sm font-bold tracking-wide bg-base-content text-base-100 p-3 rounded-lg w-full flex items-center justify-center gap-2 hover:bg-base-content/95"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>

      {status && (
        <p className="mt-3 text-center text-sm text-gray-600">{status}</p>
      )}
    </form>
  );
}
