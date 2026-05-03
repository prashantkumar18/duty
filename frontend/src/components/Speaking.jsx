import { motion } from "framer-motion";
import { Mic, MapPin, ArrowUpRight, Calendar } from "lucide-react";

const events = [
  {
    year: "2025",
    month: "Dec",
    title: "Philippines Manufacturing Association",
    org: "PMAX",
    place: "Philippines",
    topic: "Industry 4.0 in the ASEAN manufacturing landscape",
    badge: "Industry Forum",
    span: "md:col-span-7",
    accent: true,
  },
  {
    year: "2026",
    month: "—",
    title: "How to Prepare a Sales Budget Using AI",
    org: "EGN · Sales Forum",
    place: "Singapore",
    topic: "Practical AI for commercial planning, forecasting and target setting.",
    badge: "Executive Workshop",
    span: "md:col-span-5",
  },
  {
    year: "2025",
    month: "—",
    title: "China's Competitive Advantage in Manufacturing",
    org: "EGN Leadership Team",
    place: "Singapore · APAC",
    topic: "How China outperforms peer economies in manufacturing — and what ASEAN can learn.",
    badge: "Leadership Roundtable",
    span: "md:col-span-5",
  },
  {
    year: "2020",
    month: "—",
    title: "Driving SaaS Growth with Customer Success",
    org: "Future of SaaS Festival APAC",
    place: "Online · APAC",
    topic: "The world's first and only online festival dedicated to the future of SaaS in APAC.",
    badge: "Keynote Festival",
    span: "md:col-span-7",
  },
];

export default function Speaking() {
  return (
    <section
      id="speaking"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)]"
      data-testid="speaking-section"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="overline mb-4">Speaking · Industry Stages</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-white">
              From boardrooms to industry stages —{" "}
              <span className="italic text-[color:var(--accent)]">
                same conversation
              </span>
              , bigger room.
            </h2>
          </div>
          <p className="text-[color:var(--text-2)] max-w-md">
            Selected forums, panels and keynotes across APAC on Industry 4.0,
            sales, leadership and the future of SaaS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {events.map((ev, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.08 }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              className={`tile ${ev.span} relative p-7 md:p-9 min-h-[280px] md:min-h-[320px] flex flex-col overflow-hidden`}
              data-testid={`speaking-event-${i}`}
            >
              <div className="tile-accent" />

              {/* Decorative date stack */}
              <div
                className={`absolute right-6 top-6 md:right-9 md:top-9 text-right pointer-events-none ${
                  ev.accent ? "" : "opacity-90"
                }`}
              >
                <div
                  className={`font-display text-5xl md:text-6xl leading-none ${
                    ev.accent ? "text-[color:var(--accent)]" : "text-white/15"
                  }`}
                >
                  {ev.year}
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[color:var(--text-3)] mt-2">
                  {ev.month}
                </div>
              </div>

              <div className="relative">
                <span className="inline-flex items-center gap-2 border border-[color:var(--border)] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-[color:var(--text-2)] mb-6">
                  <Mic size={11} className="text-[color:var(--accent)]" />{" "}
                  {ev.badge}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-white leading-snug max-w-[80%] mb-4">
                  {ev.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[color:var(--text-3)] tracking-widest uppercase">
                  <span className="text-[color:var(--accent)]">{ev.org}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={11} /> {ev.place}
                  </span>
                </div>
              </div>

              <p className="relative text-sm text-[color:var(--text-2)] leading-relaxed mt-6 max-w-2xl">
                {ev.topic}
              </p>

              <div className="relative mt-auto pt-6 flex items-center justify-between border-t border-[color:var(--border)]">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-[color:var(--text-3)] tracking-widest uppercase">
                  <Calendar size={12} /> {ev.year}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[color:var(--text-2)] group-hover:text-[color:var(--accent)]">
                  Event details <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-xs font-mono text-[color:var(--text-3)] flex items-center justify-between">
          <span>Open to keynotes, panels and executive workshops across APAC.</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[color:var(--accent)] hover:underline"
            data-testid="speaking-cta"
          >
            Invite me to speak <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
