import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

// Place your project screenshots inside src/assets/project-images/
// using these exact file names (or update the paths below to match
// whatever names you actually use).
import limonexaImage from "../../assets/project-images/project-1.jpg";
import shopEaseImage from "../../assets/project-images/project-2.jpg";
import taskFlowImage from "../../assets/project-images/project-3.jpg";
import sportsinfra from "../../assets/project-images/project-4.png";
import sridhiApp from "../../assets/project-images/project-5.jpg";
import digitalmarketing from "../../assets/project-images/project-6.jpg";
import insurance from "../../assets/project-images/project-7.png";
import whatsjet from "../../assets/project-images/project-8.jpg";

const PROJECTS = [
  {
    tag: "Admin Dashboard",
    tagClasses: "bg-brand-50 text-brand-600",
    title: "Staff + Driver Tracking System",
    description:
      "A complete CRM platform to manage clients, leads, invoices and analytics.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    image: limonexaImage,
  },
  {
    tag: "Mobile App",
    tagClasses: "bg-rose-50 text-rose-600",
    title: "E-commerce + admin  dashboard",
    description:
      "A modern e-commerce web app with product listing, cart, checkout and admin panel.",
    stack: ["React-Native", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image: shopEaseImage,
  },
  {
    tag: "Web Application",
    tagClasses: "bg-blue-50 text-blue-600",
    title: "Logistics based web application",
    description:
      "A task management tool to organize tasks, teams and boost productivity.",
    stack: ["React.js", "Tailwind CSS"],
    image: taskFlowImage,
  },
  {
    tag: "Web Application",
    tagClasses: "bg-blue-50 text-blue-600",
    title: "Sports construction web application",
    description:
      "A modern Sports contruction web application to manage sports construction projects and teams.",
    stack: ["React.js", "Tailwind CSS"],
    image: sportsinfra,
  },
  {
    tag: "Android APP",
    tagClasses: "bg-blue-50 text-blue-600",
    title: "Android application for staff and driver tracking",
    description:
      "A Mobile application to manage and savings staff records and driver using GPS tracking.",
    stack: ["React-Native", "MongoDB", "Tailwind CSS", "Node.js", "Express.js"],
    image: sridhiApp,
  },
  {
    tag: "Web Application",
    tagClasses: "bg-blue-50 text-blue-600",
    title: "Digital Marketing web application",
    description:
      "A modern Digital Marketing web application to manage digital marketing projects and teams.",
    stack: ["React.js", "Tailwind CSS"],
    image: digitalmarketing,
  },
  {
    tag: "Web Application",
    tagClasses: "bg-blue-50 text-blue-600",
    title: "Insurance web application",
    description:
      "A modern Insurance web application to manage insurance leads and teams.",
    stack: ["React.js", "Tailwind CSS", "Google Sheets API"],
    image: insurance,
  },
  {
    tag: "Web Application",
    tagClasses: "bg-blue-50 text-blue-600",
    title: "WhatsJet - WhatsApp Business Solution",
    description:
      "A modern WhatsApp Business solution to manage customer communications and sales.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
    image: whatsjet,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="w-[320px] shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:w-[360px]">
      {/* Real project screenshot — update the imports above with your actual files */}
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${project.tagClasses}`}
        >
          {project.tag}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          {project.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
          <ExternalLink size={16} className="shrink-0 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  // trackRef = the inner row we physically move with a CSS transform.
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const isPausedRef = useRef(false);

  // Two back-to-back copies of the list — once the row has moved exactly
  // the width of ONE copy, we snap back by that same amount, so the loop
  // repeats forever with no visible jump.
  const loopedProjects = [...PROJECTS, ...PROJECTS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // track.scrollWidth here is the row's true, un-clipped width (the parent
    // uses overflow-hidden, not overflow-scroll), so this is never capped by
    // the viewport — that clamping was the root cause of the old bug.
    singleSetWidthRef.current = track.scrollWidth / 2;

    const SPEED = 2; // pixels per animation frame
    let frameId;

    const step = () => {
      if (!isPausedRef.current) {
        offsetRef.current += SPEED;
        if (offsetRef.current >= singleSetWidthRef.current) {
          offsetRef.current -= singleSetWidthRef.current;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          My Work
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Featured Projects
        </h2>
      </div>

      {/* Viewport: clips overflow, and is contained to max-w-7xl like every
          other section so it keeps a matching left/right gap. Hovering
          anywhere in this row pauses the animation; leaving resumes it. */}
      <div
        onMouseEnter={() => {
          isPausedRef.current = true;
        }}
        onMouseLeave={() => {
          isPausedRef.current = false;
        }}
        className="mx-auto mt-12 max-w-7xl overflow-hidden px-6 lg:px-10"
      >
        {/* Moving row — width is intrinsic to its content; position is
            driven purely by the transform set in the animation loop above. */}
        <div ref={trackRef} className="flex w-max gap-6">
          {loopedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
