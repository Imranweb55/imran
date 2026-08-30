import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `relative text-[15px] font-medium transition-colors ${
      isActive ? "text-brand-600" : "text-gray-700 hover:text-brand-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <NavLink to="/" className="shrink-0">
          <span className="bg-gradient-to-r from-indigo-600 to-brand-600 bg-clip-text font-logo text-3xl text-transparent">
            Portfolio
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClasses}
              end={link.to === "/"}
            >
              {({ isActive }) => (
                <span className="flex flex-col items-center gap-1">
                  {link.label}
                  <span
                    className={`h-[2px] w-5 rounded-full bg-brand-600 transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Download CV button (desktop) */}
        <a
          href="/cv.pdf"
          download
          className="hidden items-center gap-2 rounded-full bg-dark px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-dark-soft lg:inline-flex"
        >
          Download CV
          <Download size={16} />
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={linkClasses}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <a
            href="/cv.pdf"
            download
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-dark px-5 py-3 text-sm font-medium text-white"
          >
            Download CV
            <Download size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
