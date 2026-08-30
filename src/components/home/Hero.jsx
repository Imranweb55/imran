import { ArrowRight, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon, XIcon } from "../icons/SocialIcons.jsx";
// Place your photo at src/assets/profile.png (or update this path/extension
// to match your actual file name).
import profileImage from "../../assets/profile.png";

const SOCIALS = [
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: XIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@imrani.dev", label: "Email" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-10 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Full Stack Developer
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Hi, I&apos;m <span className="text-brand-600">Imran !</span>
            <br />I Build Digital Experiences
          </h1>

          <p className="mt-5 max-w-md text-gray-500">
            I&apos;m a passionate Full Stack Developer who loves turning ideas
            into clean, scalable and user-friendly web applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-dark-soft"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-medium text-gray-800 transition-colors hover:border-gray-300"
            >
              Contact Me
              <Mail size={16} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-brand-100 hover:text-brand-600"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: portrait + decorative background */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Dotted pattern accent */}
          <div
            className="absolute -right-2 top-0 hidden h-40 w-40 opacity-40 lg:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, #C4B5FD 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* Organic (non-circular) blob shape behind the portrait.
              Sized responsively so it never exceeds the width of narrow
              phone screens (this fixed-460px shape was the cause of the
              page-wide horizontal scroll on mobile). */}
          <svg
            className="absolute inset-0 m-auto h-64 w-64 text-brand-50 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[460px] lg:w-[460px]"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M45.3,-58.5C58.5,-49.6,68.4,-34.5,72.7,-17.8C77,-1.1,75.7,17.2,67.6,31.6C59.6,46,44.8,56.5,28.6,63.2C12.4,69.9,-5.2,72.8,-21.6,68.7C-38,64.6,-53.2,53.5,-62.7,38.7C-72.2,23.9,-76,5.4,-72.5,-11.2C-69,-27.8,-58.2,-42.5,-44.5,-51.6C-30.8,-60.7,-14.1,-64.2,1.9,-66.6C17.9,-69,35.8,-70.3,45.3,-58.5Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Small accent dot */}
          <div className="absolute right-10 top-16 hidden h-3 w-3 rounded-full bg-brand-400 sm:block" />

          {/* Real photo, shown directly as a large cutout (no box/card around it) —
              exactly like the reference design. Update the import above if your
              file name/extension is different from src/assets/profile.png.
              max-w-full stops it from ever overflowing a narrow viewport. */}
          <img
            src={profileImage}
            alt="Imran"
            className="relative z-10 h-[300px] w-auto max-w-full object-contain drop-shadow-2xl sm:h-[380px] md:h-[440px] lg:h-[520px]"
          />

          {/* Floating experience badge */}
          {/* <div className="absolute -bottom-6 right-2 rounded-2xl bg-white px-6 py-4 shadow-xl sm:right-8">
            <p className="text-2xl font-bold text-gray-900">2+</p>
            <p className="text-sm leading-tight text-gray-500">
              Years of
              <br />
              Experience
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
