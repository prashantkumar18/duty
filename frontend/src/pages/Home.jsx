import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Pillars from "../components/Pillars";
import Timeline from "../components/Timeline";
import Sectors from "../components/Sectors";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="App grain-overlay" data-testid="home-page">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Pillars />
        <Timeline />
        <Sectors />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
