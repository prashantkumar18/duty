import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Pillars from "../components/Pillars";
import Achievements from "../components/Achievements";
import Timeline from "../components/Timeline";
import Sectors from "../components/Sectors";
import Skills from "../components/Credentials";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="App grain-overlay" data-testid="home-page">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Stats />
        <Pillars />
        <Achievements />
        <Timeline />
        <Sectors />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
