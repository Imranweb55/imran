import { useEffect } from "react";
import { X } from "lucide-react";
import { TAG_STYLES } from "./JourneyTimeline.jsx";

export default function YearDetailModal({ entry, onClose }) {
  // Close on Escape key.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!entry) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${TAG_STYLES[entry.tag] ?? TAG_STYLES.Work}`}
        >
          {entry.tag}
        </span>

        <p className="mt-4 text-3xl font-bold text-brand-600">{entry.year}</p>
        <h3 className="mt-1 text-xl font-semibold text-gray-900">
          {entry.title}
        </h3>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
          {entry.fullContent.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
