import { useState } from "react";
import { User, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: this only simulates a successful send. Wire this up to your
    // own backend, or a service like Formspree / EmailJS / Resend, before
    // going live — e.g. replace this block with a fetch() call.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-gray-900">
          Message Sent!
        </h3>
        <p className="mt-2 max-w-xs text-sm text-gray-500">
          Thanks for reaching out. I&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-6 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-gray-700">
            Name
          </span>
          <div className="relative">
            <User
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              required
              value={form.name}
              onChange={handleChange("name")}
              placeholder="Your name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-gray-700">
            Email
          </span>
          <div className="relative">
            <Mail
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              required
              value={form.email}
              onChange={handleChange("email")}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
            />
          </div>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium text-gray-700">
          Subject
        </span>
        <div className="relative">
          <MessageSquare
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            required
            value={form.subject}
            onChange={handleChange("subject")}
            placeholder="What's this about?"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
          />
        </div>
      </label>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium text-gray-700">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Tell me a bit about your project or question..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-brand-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand-600/20 transition-transform hover:scale-[1.01] sm:w-auto"
      >
        Send Message
        <Send size={16} />
      </button>
    </form>
  );
}
