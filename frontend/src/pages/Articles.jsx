import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper, Linkedin, ExternalLink } from "lucide-react";

const newsletters = [
  {
    title: "Transforming Factories Smartly",
    desc: "Practical insights on how factories across APAC are moving from automation to intelligent operations — IT-OT, AI, MES and the human side of change.",
    tag: "Smart Factory",
    cadence: "Weekly",
    url: "https://www.linkedin.com/newsletters/transforming-factories-smartly-7202486169740206080/",
  },
  {
    title: "Digital Twin — Optimizing Tomorrow",
    desc: "Field-tested perspectives on Digital Twin, asset health, predictive intelligence and the architectural choices that make twins actually pay back.",
    tag: "Digital Twin · AI",
    cadence: "Weekly",
    url: "https://www.linkedin.com/newsletters/digital-twin-optimizing-2moro-7195089398567215104/",
  },
  {
    title: "Digital Transformation 4.0",
    desc: "A wide-angle newsletter on enterprise transformation — from strategy to execution, sequencing IT before OT, and the leadership patterns that compound.",
    tag: "Transformation",
    cadence: "Periodic",
    url: "https://www.linkedin.com/newsletters/digital-transformation-4-0-6913537279676338176/",
  },
  {
    title: "The Power of 2 Minutes",
    desc: "Bite-sized leadership and growth ideas — distilled into 2-minute reads for executives who don't have 20.",
    tag: "Leadership",
    cadence: "Short reads",
    url: "https://www.linkedin.com/newsletters/the-power-of-2-minutes-7131697083778039808/",
  },
];

export default function Articles() {
  return (
    <div className="App grain-overlay">
      <Navigation />
      <main className="pt-28 md:pt-36">
        <section className="container-x pb-12">
          <p className="overline mb-4">LinkedIn Newsletters</p>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[0.98] max-w-4xl"
            data-testid="articles-title"
          >
            Four newsletters.
            <br />
            <span className="italic text-[color:var(--accent)]">
              One ongoing conversation.
            </span>
          </h1>
          <p className="mt-6 text-[color:var(--text-2)] max-w-2xl leading-relaxed text-base md:text-lg">
            Each newsletter sits at a different altitude — from the shop floor
            to the executive office. Subscribe to any of them on LinkedIn.
          </p>
        </section>

        <section className="container-x pb-32">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[color:var(--border)]"
            data-testid="articles-list"
          >
            {newsletters.map((n, i) => (
              <motion.a
                key={i}
                href={n.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="tile group p-6 md:p-10 border-r border-b border-[color:var(--border)] flex flex-col min-h-[280px] md:min-h-[340px]"
                data-testid={`article-card-${i}`}
              >
                <div className="tile-accent" />
                <div className="flex items-center justify-between mb-6 relative">
                  <Newspaper size={20} className="text-[color:var(--accent)]" />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[color:var(--text-3)]">
                    0{i + 1} · {n.cadence}
                  </span>
                </div>
                <span className="overline mb-3 text-[color:var(--accent)]">{n.tag}</span>
                <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-4 group-hover:text-[color:var(--accent)] transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-[color:var(--text-2)] leading-relaxed mb-6">
                  {n.desc}
                </p>
                <div className="mt-auto pt-5 flex items-center justify-between border-t border-[color:var(--border)]">
                  <span className="inline-flex items-center gap-2 text-xs text-[color:var(--accent)]">
                    <Linkedin size={14} /> Read on LinkedIn
                  </span>
                  <ArrowUpRight size={18} className="text-[color:var(--text-2)] group-hover:text-[color:var(--accent)]" />
                </div>
              </motion.a>
            ))}
          </div>

          <p className="text-xs font-mono text-[color:var(--text-3)] mt-10 text-center">
            New issues drop on LinkedIn — subscribe to never miss one.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
