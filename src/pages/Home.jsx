import Hero from "../components/home/Hero.jsx";
import AboutCards from "../components/home/AboutCards.jsx";
import FeaturedProjects from "../components/home/FeaturedProjects.jsx";
import CtaSection from "../components/home/CtaSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCards />
      <FeaturedProjects />
      <CtaSection />
    </>
  );
}
