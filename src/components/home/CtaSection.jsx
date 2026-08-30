import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div className="flex flex-col items-start gap-8 rounded-3xl bg-dark p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
            <Mail size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-2 max-w-sm text-sm text-gray-400">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-5 md:w-auto md:items-end">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            Get In Touch
            <ArrowRight size={16} />
          </a>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <Mail size={15} />
              imran.softdev1@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={15} />
              Chennai, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
