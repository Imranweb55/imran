import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";

/**
 * App is the single persistent shell for the whole site.
 * Navbar and Footer are rendered once here, so they never re-mount
 * when the route changes — only the <main> content swaps out.
 */
function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#FAFAFC]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
