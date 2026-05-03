import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Play, ExternalLink, Linkedin } from "lucide-react";

const topics = [
  {
    title: "Why MES is the Backbone of Smart Manufacturing",
    tag: "MES",
    duration: "Use-case",
    thumb: "https://images.unsplash.com/photo-1735494033690-c74aa2641fb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3Nzc4Njg0N3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Digital Twin in Practice — Beyond the Buzzword",
    tag: "Digital Twin",
    duration: "Use-case",
    thumb: "https://images.unsplash.com/photo-1744739813274-24b1f3ef2678?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhcmslMjBsaW5lcyUyMGx1eHVyeSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3Nzc3ODY4NTd8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "OCR + AI on the Plant Floor — A Walkthrough",
    tag: "AI / OCR",
    duration: "Use-case",
    thumb: "https://images.pexels.com/photos/30547584/pexels-photo-30547584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "IT-OT Convergence — The Real Business Case",
    tag: "IT-OT",
    duration: "Insight",
    thumb: "https://images.unsplash.com/photo-1735494033690-c74aa2641fb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3Nzc4Njg0N3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Energy Management & Sustainability in Industry 4.0",
    tag: "EMS · ESG",
    duration: "Insight",
    thumb: "https://images.unsplash.com/photo-1537155986727-3c402583a35a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxzaW5nYXBvcmUlMjBjaXR5JTIwbmlnaHR8ZW58MHx8fHwxNzc3Nzg2ODQ3fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "WMS, QMS and the Quality of Operations Data",
    tag: "WMS · QMS",
    duration: "Use-case",
    thumb: "https://images.unsplash.com/photo-1744739813274-24b1f3ef2678?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhcmslMjBsaW5lcyUyMGx1eHVyeSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3Nzc3ODY4NTd8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Wire Harness MES — A Niche Worth Mastering",
    tag: "MES",
    duration: "Use-case",
    thumb: "https://images.unsplash.com/photo-1735494033690-c74aa2641fb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3Nzc4Njg0N3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "ASEAN GTM for Industry 4.0 Solutions",
    tag: "GTM",
    duration: "Insight",
    thumb: "https://images.unsplash.com/photo-1537155986727-3c402583a35a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxzaW5nYXBvcmUlMjBjaXR5JTIwbmlnaHR8ZW58MHx8fHwxNzc3Nzg2ODQ3fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Predictive Maintenance — From Pilot to P&L",
    tag: "AI · APM",
    duration: "Use-case",
    thumb: "https://images.pexels.com/photos/30547584/pexels-photo-30547584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const LINKEDIN = "https://www.linkedin.com/in/prashant-kumar-digital/";

export default function Videos() {
  return (
    <div className="App grain-overlay">
      <Navigation />
      <main className="pt-28 md:pt-36">
        <section className="container-x pb-12">
          <p className="overline mb-4">Videos · Industry 4.0 Use-Cases</p>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-[0.95] max-w-4xl" data-testid="videos-title">
            A library of practical{" "}
            <span className="italic text-[color:var(--accent)]">Industry 4.0</span> use-cases — built one video at a time.
          </h1>
          <p className="mt-6 text-[color:var(--text-2)] max-w-2xl leading-relaxed">
            Original short-form content explaining MES, Digital Twin, AI/OCR,
            WMS, QMS, IT-OT and the human side of smart manufacturing —
            published consistently on LinkedIn.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              data-testid="videos-linkedin-cta"
            >
              <Linkedin size={16} /> Watch the latest on LinkedIn
              <ExternalLink size={14} />
            </a>
            <a
              href="/articles"
              className="btn-ghost"
              data-testid="videos-articles-cta"
            >
              Browse Articles
            </a>
          </div>
        </section>

        <section className="container-x pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-testid="videos-grid">
            {topics.map((v, i) => (
              <motion.a
                key={i}
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group tile cursor-pointer block"
                data-testid={`video-card-${i}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover img-mono transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="h-14 w-14 rounded-full border border-[color:var(--accent)] flex items-center justify-center bg-[color:var(--bg)]/60 group-hover:bg-[color:var(--accent)] transition-colors">
                      <Play size={20} className="text-[color:var(--accent)] group-hover:text-black ml-0.5" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-black/70 border border-[color:var(--border)] px-2 py-1">
                    {v.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-black/70 border border-[color:var(--border)] px-2 py-1">
                    {v.duration}
                  </span>
                </div>
                <div className="p-5 flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg text-white leading-snug">{v.title}</h3>
                  <ExternalLink size={16} className="text-[color:var(--text-3)] group-hover:text-[color:var(--accent)] mt-1 shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>

          <p className="text-xs font-mono text-[color:var(--text-3)] mt-10 text-center">
            Cards link out to LinkedIn · drop a list of specific video URLs to embed them inline.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
