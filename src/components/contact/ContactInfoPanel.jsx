import { Mail, MapPin, Clock } from "lucide-react";
import { LinkedinIcon, GithubIcon, XIcon } from "../icons/SocialIcons.jsx";

const DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@imrani.dev",
    href: "mailto:hello@imrani.dev",
  },
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const SOCIALS = [
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: XIcon, href: "https://twitter.com", label: "Twitter" },
];

export default function ContactInfoPanel() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-dark p-8 text-white sm:p-10">
      {/* Decorative blob — same shape language used on the Home hero, kept
          subtle here so it reads as a background texture, not a distraction. */}
      <svg
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-white/5"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M45.3,-58.5C58.5,-49.6,68.4,-34.5,72.7,-17.8C77,-1.1,75.7,17.2,67.6,31.6C59.6,46,44.8,56.5,28.6,63.2C12.4,69.9,-5.2,72.8,-21.6,68.7C-38,64.6,-53.2,53.5,-62.7,38.7C-72.2,23.9,-76,5.4,-72.5,-11.2C-69,-27.8,-58.2,-42.5,-44.5,-51.6C-30.8,-60.7,-14.1,-64.2,1.9,-66.6C17.9,-69,35.8,-70.3,45.3,-58.5Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available for new projects
        </span>

        <h3 className="mt-5 text-2xl font-bold">Contact Information</h3>
        <p className="mt-2 text-sm text-gray-400">
          Prefer to reach out directly? Here&apos;s how to find me.
        </p>

        <div className="mt-8 space-y-6">
          {DETAILS.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-400">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-sm font-medium text-white">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                className="block transition-opacity hover:opacity-80"
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </div>

      <div className="relative mt-10">
        <p className="text-xs text-gray-400">Find me on</p>
        <div className="mt-3 flex items-center gap-3">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
