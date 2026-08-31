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
    year: "2018",
    tag: "Education",
    title: "10th Standard (SSLC)",
    oneLiner:
      "Started my secondary education and built the foundation for my academic journey.",
    fullContent:
      "Started my 10th standard at Dharmamurthi Rao Bahadur Calavala Cunnan Chetty's Higher Secondary School in 2018 and successfully completed it in 2019.\nThis stage of my education helped me strengthen my academic foundation while developing discipline, consistency, and a growing curiosity to learn new things.\nIt was also during this period that I began taking a greater interest in computers and technology, which later became an important part of my career journey.",
  },
  {
    year: "2020",
    tag: "Education",
    title: "12th Standard (HSC)",
    oneLiner:
      "Completed higher secondary education while strengthening my academic foundation and future goals.",
    fullContent:
      "Continued my higher secondary education at Dharmamurthi Rao Bahadur Calavala Cunnan Chetty's Higher Secondary School in 2020, building on the foundation developed during my earlier school years.\nThis phase of my education helped me develop greater discipline, time management, and a more focused approach toward learning and achieving my academic goals.\nAlongside my studies, I continued developing my interest in computers and technology, which gradually influenced the direction I wanted to take for my higher education and future career.\nCompleting my higher secondary education marked an important transition from school life to the next stage of my academic and professional journey.",
  },
  {
    year: "2021",
    tag: "Education",
    title: "Started My Engineering Journey",
    oneLiner:
      "Joined a B.E. Computer Science and Engineering program and began my journey into technology.",
    fullContent:
      "In 2021, I joined Gojan School of Business and Technology, affiliated with Anna University, to pursue a Bachelor of Engineering in Computer Science and Engineering.\nThis marked an important step toward turning my growing interest in computers and technology into a focused academic and professional path.\nThroughout my engineering journey, I developed a stronger understanding of programming, software development, databases, web technologies, and modern computing concepts while working on academic and practical projects.\nThe four-year journey also helped me improve my problem-solving abilities, teamwork, adaptability, and ability to apply technical knowledge to real-world challenges.\nI successfully completed my B.E. in Computer Science and Engineering in 2025, providing the foundation for my transition into the software and technology industry.",
  },

  {
    year: "2024",
    tag: "Experience",
    title: "Gained My First Industry Experience",
    oneLiner:
      "Started my first internship and gained hands-on experience working in a professional development environment.",
    fullContent:
      "In 2024, during the third year of my B.E. in Computer Science and Engineering, I stepped into a professional environment through my first internship.\nThis experience gave me the opportunity to move beyond academic learning and understand how software projects are planned, developed, tested, and delivered in a real-world environment.\nI worked with practical development tasks, collaborated with team members, and learned how to understand requirements, solve technical problems, follow development practices, and work within project timelines.\nThe internship helped me build greater confidence as a developer and gave me valuable insight into professional software development, teamwork, communication, and delivering solutions based on real business requirements.",
  },
  {
    year: "2024",
    tag: "Project",
    title: "Built an Earthquake Prediction Project",
    oneLiner:
      "Developed a mini project exploring earthquake prediction through data analysis and machine learning.",
    fullContent:
      "During my third year of engineering in 2024, I worked on an academic mini project focused on earthquake prediction and analysis.\nThe project introduced me to the process of working with real-world datasets, understanding patterns in historical earthquake data, preparing data for analysis, and exploring machine learning techniques to build a prediction-oriented model.\nThrough this project, I gained practical experience in data preprocessing, model development, testing, and interpreting results while learning how technology can be applied to complex real-world problems.\nMore importantly, the project strengthened my interest in solving practical challenges through software, data, and intelligent systems, while improving my ability to work through a complete project lifecycle from research and development to final implementation.",
  },
  {
    year: "2025",
    tag: "Education & Project",
    title: "Completed My Engineering Degree",
    oneLiner:
      "Graduated in Computer Science and led a team to build a full-stack mobile attendance system.",
    fullContent:
      "In 2025, I successfully completed my B.E. in Computer Science and Engineering at Gojan School of Business and Technology, affiliated with Anna University, marking the completion of my four-year engineering journey.\nAs part of my final-year project, I took on the role of Team Leader and led a team in developing a mobile-based attendance management application with a dedicated backend system.\nThe project involved designing and developing the mobile application, building backend services, managing data, and connecting the application with the backend to create a complete end-to-end attendance solution.\nAs the team leader, I was responsible for coordinating development tasks, helping resolve technical challenges, managing project progress, and ensuring that the different components worked together effectively.\nThis project gave me valuable hands-on experience in mobile application development, backend integration, database management, teamwork, leadership, and delivering a complete software solution from concept to implementation.",
  },
  {
    year: "2025",
    tag: "Career",
    title: "Received My First Professional Opportunity",
    oneLiner:
      "Received an offer for a JavaScript Trainer role and made a career decision based on my long-term development goals.",
    fullContent:
      "After completing my engineering degree in 2025, I received an opportunity from Rakko Technologies to join as a JavaScript Trainer, based on my programming and JavaScript skills.\nThe opportunity was an encouraging milestone and gave me confidence that the technical skills I had developed throughout my engineering journey were being recognized professionally.\nAfter carefully considering the role, responsibilities, and long-term learning opportunities, I decided not to accept the offer because I wanted to pursue a path that provided stronger exposure to software development and continued technical growth.\nAlthough I did not take up the position, the experience helped me become more intentional about choosing opportunities that align with my long-term goals as a software developer.",
  },
  {
    year: "2026",
    tag: "Project",
    title: "Built My Own Mobile Application",
    oneLiner:
      "Built and developed my own full-stack mobile application, gaining complete end-to-end development experience.",
    fullContent:
      "After completing my internship in February 2026, I took on an independent project and built my own mobile application from the ground up.\nThis project gave me the opportunity to apply everything I had learned through my education, projects, and internship experience in a single real-world application.\nI worked across the complete development cycle, including planning the application structure, designing the user experience, developing the mobile frontend, building the backend, creating APIs, integrating the database, handling authentication and application logic, debugging issues, and connecting all the components into a working product.\nBuilding the application independently also taught me how to make technical decisions, manage development challenges, structure a project properly, and take responsibility for the complete product rather than working on only one part of it.\nThis became an important milestone in my journey because it strengthened my confidence as a full-stack developer and gave me practical experience in taking an idea from concept to a complete working mobile application.",
  },
  {
    year: "2025",
    tag: "Experience",
    title: "Started My Developer Internship",
    oneLiner:
      "Joined a startup as a Developer Intern and gained hands-on experience building real-world software solutions.",
    fullContent:
      "Towards the end of 2025, I joined a startup as a Developer Intern, taking my first step into a real-world software development environment after completing my engineering degree.\nDuring the internship, I worked on practical development tasks and gained experience understanding project requirements, developing application features, debugging issues, integrating different components, and working with a development team.\nThe experience exposed me to the realities of building software for real users, where writing code was only one part of the process and understanding requirements, collaboration, problem-solving, testing, and delivering reliable solutions were equally important.\nI continued this internship until February 2026, and the experience played an important role in strengthening my technical confidence and understanding of professional software development workflows.",
  },
  {
    year: "2026",
    tag: "Career",
    title: "Leading Business Automation Development",
    oneLiner:
      "Joined a manufacturing company as a Senior Software Developer to lead the development of custom automation solutions.",
    fullContent:
      "In May 2026, I joined a manufacturing company as a full-time Senior Software Developer after being approached to take ownership of software development and automation initiatives.\nAfter understanding the company's existing workflows and project requirements, I began identifying areas where software could reduce manual work, improve operational efficiency, and streamline day-to-day business processes.\nRather than simply implementing predefined requirements, I took the initiative to develop ideas and design custom software applications tailored to the company's specific operational needs. I currently lead the development of these automation solutions, working across application architecture, frontend and backend development, database integration, APIs, and overall system functionality.\nThis role has given me the opportunity to combine my technical development skills with problem-solving and product thinking, transforming real manufacturing challenges into practical software solutions.\nI continue to work in this role as a full-time employee, leading the development of automation-focused applications and working toward building a more technology-driven and efficient business operation.",
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
