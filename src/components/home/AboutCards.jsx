import { User, Code2, Database, Rocket, ArrowRight } from "lucide-react";

const CARDS = [
  {
    icon: User,
    title: "About Me",
    description:
      "I'm a Full Stack Developer with a strong focus on building clean, efficient and user-friendly web applications.",
    link: { label: "More About Me", href: "/about" },
  },
  {
    icon: Code2,
    title: "Frontend Developer",
    description:
      "I build responsive and interactive interfaces using modern technologies like React, Next.js and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "Backend Developer",
    description:
      "I develop robust and scalable backend systems using Node.js, Express and databases like MongoDB and MySQL.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description:
      "I love solving complex problems and turning ideas into real-world solutions that make a difference.",
  },
];

export default function AboutCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div className="grid gap-10 rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
        {CARDS.map(({ icon: Icon, title, description, link }) => (
          <div key={title}>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon size={22} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              {description}
            </p>
            {link && (
              <a
                href={link.href}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                {link.label}
                <ArrowRight size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
