import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 sm:flex-row lg:px-10">
        <p>© {year} Imran I. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="hover:text-brand-600">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-brand-600">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
