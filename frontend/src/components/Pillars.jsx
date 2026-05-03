import { motion } from "framer-motion";
import {
  Network,
  Boxes,
  BrainCircuit,
  TrendingUp,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import ReadMore from "./ReadMore";

const pillars = [
  {
    no: "01",
    tag: "IT · OT Integration",
    title: "From plant-floor data to enterprise intelligence.",
    summary:
      "Architecting the bridge between operational technology and IT — capturing OT signals and feeding decision-ready enterprise layers.",
    full:
      "Unified namespace, edge-to-cloud pipelines, OT historians and AI-driven data quality — designed for the way real factories actually run.",
    icon: Network,
    points: ["OT Data Capture", "Unified Namespace", "Edge → Cloud", "AI Data Quality"],
  },
  {
    no: "02",
    tag: "Solution Selling",
    title: "MES · LIMS · Digital Twin · Machine Vision.",
    summary:
      "Solution-led selling across the industrial stack — process, discrete and smart-factory environments.",
    full:
      "Combining MES, LIMS, Digital Twin, WMS, QMS, EMS, APM and Machine Vision into roadmaps that compound over time, not one-off pilots.",
    icon: Boxes,
    points: ["MES · LIMS", "Digital Twin · APM", "Machine Vision", "WMS · QMS · EMS"],
  },
  {
    no: "03",
    tag: "AI-Enabled Platforms",
    title: "AI, OCR and predictive intelligence — in production.",
    summary:
      "AI beyond the pilot — OCR, analytics and predictive maintenance on real operations where uptime and quality matter.",
    full:
      "From plant-floor OCR to operations analytics and AI-driven predictive maintenance — every model is shipped where uptime, quality and traceability are business-critical.",
    icon: BrainCircuit,
    points: ["OCR · Document AI", "Operations Analytics", "Predictive Maintenance", "AI on Plant Floor"],
  },
  {
    no: "04",
    tag: "Business Development",
    title: "APAC growth, GTM and commercial execution.",
    summary:
      "Opening accounts and running GTM for industrial AI solutions across Southeast Asia and North Asia.",
    full:
      "Translating technical depth into repeatable commercial outcomes — partner ecosystems, multi-team orchestration and C-suite conversations across APAC markets.",
    icon: TrendingUp,
    points: ["Account Opening", "GTM Strategy", "Partner Ecosystem", "Solution-Led Sales"],
  },
];

const metrics = [
  { k: "21+", v: "Years across enterprise IT, banking and Industry 4.0" },
  { k: "APAC", v: "Operating reach across Singapore, ASEAN and beyond" },
  { k: "AI · 4.0", v: "Recognised Industry 4.0 + AI thought leader" },
  { k: "Top 40", v: "IT LinkedIn Influencer · Singapore" },
];

export default function Pillars() {
  return (
    <section
      id="work"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)]"
      data-testid="pillars-section"
    >
      <div className="container-x">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16">
          <div className="md:col-span-5">
            <p className="overline mb-4">What I Do</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-white">
              Bridging{" "}
              <span className="italic text-[color:var(--accent)]">OT</span>
              <span className="mx-3 inline-block align-middle h-[2px] w-6 bg-[color:var(--accent)]" />
              <span className="italic text-[color:var(--accent)]">IT</span>{" "}
              with AI for industrial enterprises.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <ReadMore
              className="text-base md:text-lg"
              summary="MES, LIMS, Digital Twin, WMS, QMS, Machine Vision and AI-enabled platforms — turning plant-floor data into business intelligence across APAC."
              full="Over two decades at Yokogawa and Web Synergies leading digital programs spanning process manufacturing, discrete manufacturing and smart-factory environments — with AI quietly woven through every layer."
            />
            <div className="mt-6 flex items-center gap-4">
              <img
                src="https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/gdfn9gq1_IMG_9196.png"
                alt="Industry 4.0 badge"
                className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover shrink-0 border border-[color:var(--border)]"
                data-testid="pillars-industry40-badge"
              />
              <div className="inline-flex items-center gap-3 px-3 py-2 border border-[color:var(--border)] text-xs font-mono text-[color:var(--text-2)]">
                <BadgeCheck size={14} className="text-[color:var(--accent)]" />
                Yokogawa · Web Synergies · APAC
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[color:var(--border)]">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="tile p-6 md:p-7 border-r border-b border-[color:var(--border)] flex flex-col min-h-[420px]"
                data-testid={`pillar-card-${i}`}
              >
                <div className="tile-accent" />
                <div className="flex items-center justify-between mb-8 relative">
                  <span className="font-mono text-xs text-[color:var(--text-3)] tracking-widest">
                    {p.no}
                  </span>
                  <Icon size={20} className="text-[color:var(--accent)]" />
                </div>
                <div className="overline mb-4 text-[color:var(--accent)]">{p.tag}</div>
                <h3 className="font-display text-lg md:text-xl leading-snug text-white mb-4">
                  {p.title}
                </h3>
                <ReadMore
                  className="mb-6"
                  summary={p.summary}
                  full={p.full}
                />
                <ul className="mt-auto space-y-2 pt-5 border-t border-[color:var(--border)]">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-3 text-xs md:text-sm text-[color:var(--text-2)]"
                    >
                      <span className="inline-block h-px w-3 bg-[color:var(--accent)] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 border border-[color:var(--border)] bg-[color:var(--surface)] relative overflow-hidden"
          data-testid="pillars-metrics"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[color:var(--border)] border-b border-[color:var(--border)]">
            {metrics.map((m, i) => (
              <div key={i} className="p-5 md:p-7" data-testid={`metric-${i}`}>
                <div className="font-display text-2xl md:text-4xl text-[color:var(--accent)] leading-none tracking-tight">
                  {m.k}
                </div>
                <div className="text-xs md:text-sm text-[color:var(--text-2)] mt-3 leading-snug">
                  {m.v}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[color:var(--text-2)] max-w-2xl leading-relaxed">
              Recognised <span className="text-white">Industry 4.0 + AI</span> content creator —
              practical insights on smart manufacturing, OT/IT and AI deployment.
            </p>
            <a
              href="#contact"
              className="btn-ghost self-start md:self-auto"
              data-testid="pillars-metrics-cta"
            >
              Build your roadmap <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
