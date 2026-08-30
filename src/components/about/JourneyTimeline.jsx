import { useState } from "react";
import YearDetailModal from "./YearDetailModal.jsx";

// EDIT THIS with your real journey — years, titles, one-liners, tags, and the
// longer "fullContent" shown in the popup are placeholders. Use "\n" inside
// fullContent to start a new paragraph in the modal.
//
// "tag" should be one of the keys in TAG_STYLES below (Education, Work,
// Milestone, Present) so it gets the matching color automatically.
const JOURNEY = [
  {
    year: "2016",
    tag: "Education",
    title: "Started High School",
    oneLiner: "Began high school and first got curious about computers.",
    fullContent:
      "Started high school and discovered an early interest in how computers and websites actually worked.\nThis curiosity became the starting point for everything that followed.",
  },
  {
    year: "2019",
    tag: "Milestone",
    title: "Wrote My First Line of Code",
    oneLiner: "Built a basic HTML page and got hooked on web development.",
    fullContent:
      "Wrote my very first HTML and CSS page and saw a browser render something I had built myself.\nThat small moment was enough to get me hooked on web development.",
  },
  {
    year: "2021",
    tag: "Education",
    title: "Completed Schooling",
    oneLiner: "Finished school and decided to pursue a career in tech.",
    fullContent:
      "Completed my schooling and used the time afterward to explore programming more seriously.\nBy the end of that year, I had decided to pursue a career in technology.",
  },
  {
    year: "2022",
    tag: "Education",
    title: "Started College",
    oneLiner:
      "Enrolled in a Computer Science program to build strong fundamentals.",
    fullContent:
      "Enrolled in a Computer Science program to build a solid foundation in programming, data structures and problem solving.\nThis is also when I started building small personal projects on the side.",
  },
  {
    year: "2023",
    tag: "Work",
    title: "First Freelance Project",
    oneLiner: "Delivered my first client website as a freelancer.",
    fullContent:
      "Took on my first freelance project and delivered a complete website for a client from start to finish.\nIt taught me a lot about working with real requirements, deadlines and feedback.",
  },
  {
    year: "2024",
    tag: "Work",
    title: "Became a Full Stack Developer",
    oneLiner: "Deepened my skills in React, Node.js and MongoDB.",
    fullContent:
      "Focused on strengthening my full stack skills — React and Tailwind CSS on the frontend, Node.js, Express and MongoDB on the backend.\nStarted building complete, end-to-end products instead of isolated pieces.",
  },
  {
    year: "2025",
    tag: "Milestone",
    title: "Growing as a Developer",
    oneLiner: "Took on more complex projects and expanded my portfolio.",
    fullContent:
      "Worked on more complex, real-world style projects and expanded my portfolio with CRM, e-commerce and productivity tools.\nAlso got more comfortable owning a project from planning through deployment.",
  },
  {
    year: "2026",
    tag: "Present",
    title: "Today",
    oneLiner: "Continuing to build clean, scalable, user-friendly web apps.",
    fullContent:
      "Currently focused on building clean, scalable and user-friendly web applications, and always looking for the next interesting problem to solve.",
  },
];

// Color per tag type — used both on the track nodes and inside the modal.
export const TAG_STYLES = {
  Education: "bg-blue-50 text-blue-600",
  Work: "bg-brand-50 text-brand-600",
  Milestone: "bg-amber-50 text-amber-600",
  Present: "bg-emerald-50 text-emerald-600",
};

// Lays items out in a "snake"/boustrophedon grid: row 0 goes left-to-right,
// row 1 goes right-to-left, row 2 left-to-right again, and so on — exactly
// like the reference road image. Returns each node's (x, y) plus the total
// pixel size of the whole shape (used to size the wrapper, no scrolling).
function buildSerpentineLayout(count, cols, colWidth, rowHeight, dotY) {
  const points = [];
  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / cols);
    const posInRow = i % cols;
    const col = row % 2 === 0 ? posInRow : cols - 1 - posInRow;
    points.push({
      x: col * colWidth + colWidth / 2,
      y: row * rowHeight + dotY,
    });
  }
  const rows = Math.ceil(count / cols);
  return {
    points,
    width: cols * colWidth,
    height: (rows - 1) * rowHeight + rowHeight, // last row gets full band height for its text
  };
}

// Turns a list of points into one smooth curved path (Catmull-Rom -> Bezier)
// so the road bends gently through every node instead of having sharp corners.
function smoothPath(points) {
  if (points.length < 2) return "";
  let d = `M${points[0].x},${points[0].y} `;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += `C${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y} `;
  }
  return d;
}

function RoadTrack({ cols, colWidth, rowHeight, dotY, onSelect, className }) {
  const { points, width, height } = buildSerpentineLayout(
    JOURNEY.length,
    cols,
    colWidth,
    rowHeight,
    dotY,
  );
  const pathD = smoothPath(points);

  return (
    <div className={className}>
      <div className="relative mx-auto" style={{ width, height }}>
        {/* The road, drawn in three layered strokes: soft edge, dark
            asphalt, and a dashed white center line — same look as a
            real road, all following one continuous curved path. */}
        <svg
          width={width}
          height={height}
          className="absolute left-0 top-0 overflow-visible"
        >
          <path
            d={pathD}
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={pathD}
            fill="none"
            stroke="#111114"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={pathD}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeDasharray="14 12"
            strokeLinecap="round"
          />
        </svg>

        {JOURNEY.map((entry, index) => {
          const p = points[index];
          return (
            <div
              key={entry.year}
              className="absolute -translate-x-1/2"
              style={{ left: p.x, top: p.y }}
            >
              {/* Marker sitting on top of the road */}
              <button
                onClick={() => onSelect(entry)}
                aria-label={`View ${entry.year} details`}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-brand-600 bg-white shadow-md transition-transform hover:scale-110"
                style={{ width: 18, height: 18, left: 0, top: 0 }}
              />

              {/* Text block below the marker */}
              <button
                onClick={() => onSelect(entry)}
                className="absolute top-5 w-40 -translate-x-1/2 text-center"
                style={{ left: 0 }}
              >
                <p className="text-lg font-bold text-brand-600">{entry.year}</p>
                <span
                  className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                    TAG_STYLES[entry.tag] ?? TAG_STYLES.Work
                  }`}
                >
                  {entry.tag}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {entry.oneLiner}
                </p>
                <span className="mt-2 inline-block text-[11px] font-medium text-brand-600">
                  View details &rarr;
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function JourneyTimeline() {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6 pb-10 text-center lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          My Journey
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Milestones Along The Way
        </h2>
      </div>

      {/* No scrolling anywhere — each breakpoint gets its own column count
          so the whole road always fits the screen width, and the section
          is simply as tall as it needs to be (the page scrolls normally). */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RoadTrack
          className="block sm:hidden"
          cols={2}
          colWidth={150}
          rowHeight={220}
          dotY={30}
          onSelect={setSelectedEntry}
        />
        <RoadTrack
          className="hidden sm:block lg:hidden"
          cols={3}
          colWidth={210}
          rowHeight={210}
          dotY={30}
          onSelect={setSelectedEntry}
        />
        <RoadTrack
          className="hidden lg:block"
          cols={4}
          colWidth={240}
          rowHeight={200}
          dotY={30}
          onSelect={setSelectedEntry}
        />
      </div>

      <YearDetailModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
    </section>
  );
}
