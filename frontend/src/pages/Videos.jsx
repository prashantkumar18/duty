import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "IT-OT Convergence: The Real Business Case",
    tag: "Keynote · 2025",
    duration: "24 min",
    thumb: "https://images.unsplash.com/photo-1735494033690-c74aa2641fb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3Nzc4Njg0N3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "LIMS, MES & Digital Twin — Practical APAC Playbook",
    tag: "Webinar",
    duration: "38 min",
    thumb: "https://images.unsplash.com/photo-1744739813274-24b1f3ef2678?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhcmslMjBsaW5lcyUyMGx1eHVyeSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3Nzc3ODY4NTd8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Digital Manufacturing Intelligence in Action",
    tag: "Case Story",
    duration: "12 min",
    thumb: "https://images.pexels.com/photos/30547584/pexels-photo-30547584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "APAC GTM: Opening New Industrial Accounts",
    tag: "Conversation",
    duration: "18 min",
    thumb: "https://images.unsplash.com/photo-1537155986727-3c402583a35a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxzaW5nYXBvcmUlMjBjaXR5JTIwbmlnaHR8ZW58MHx8fHwxNzc3Nzg2ODQ3fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Sustainability & ESG — Data that Operates",
    tag: "Panel",
    duration: "31 min",
    thumb: "https://images.unsplash.com/photo-1735494033690-c74aa2641fb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3Nzc4Njg0N3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "AI Deployment on the Plant Floor",
    tag: "Talk",
    duration: "22 min",
    thumb: "https://images.unsplash.com/photo-1744739813274-24b1f3ef2678?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhcmslMjBsaW5lcyUyMGx1eHVyeSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3Nzc3ODY4NTd8MA&ixlib=rb-4.1.0&q=85",
  },
];

export default function Videos() {
  return (
    <div className="App grain-overlay">
      <Navigation />
      <main className="pt-28 md:pt-36">
        <section className="container-x pb-16">
          <p className="overline mb-4">Videos · Selected</p>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-[0.95] max-w-4xl" data-testid="videos-title">
            Talks, keynotes and conversations on{" "}
            <span className="italic text-[color:var(--accent)]">digital transformation</span>.
          </h1>
          <p className="mt-6 text-[color:var(--text-2)] max-w-2xl">
            A curated reel covering IT-OT, smart factory, APAC growth and the
            human side of enterprise transformation.
          </p>
        </section>

        <section className="container-x pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-testid="videos-grid">
            {videos.map((v, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group tile cursor-pointer"
                data-testid={`video-card-${i}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover img-mono transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
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
                <div className="p-5">
                  <h3 className="font-display text-lg text-white leading-snug">{v.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
