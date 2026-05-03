import { motion } from "framer-motion";
import {
  Network,
  Boxes,
  BrainCircuit,
  TrendingUp,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    no: "01",
    tag: "IT / OT Integration",
    title: "From plant-floor data to enterprise intelligence.",
    desc:
      "Architecting the bridge between operational technology and IT — capturing OT signals, normalising them, and feeding enterprise layers that decision-makers actually use.",
    icon: Network,
    points: [
      "OT Data Capture & Historians",
      "Unified Namespace / MQTT",
      "Enterprise IT Integration",
      "Edge-to-Cloud Pipelines",
    ],
  },
  {
    no: "02",
    tag: "Solution Selling",
    title: "MES · LIMS · Digital Twin · WMS · QMS · EMS · APM.",
    desc:
      "Solution-led selling across the full industrial stack — shaping the right combination of systems for process manufacturing, discrete manufacturing and smart-factory environments.",
    icon: Boxes,
    points: [
      "MES & LIMS",
      "Digital Twin & APM",
      "WMS · QMS · EMS",
      "Smart Factory Roadmaps",
    ],
  },
  {
    no: "03",
    tag: "AI-Enabled Platforms",
    title: "OCR, analytics and predictive intelligence — in production.",
    desc:
      "Taking AI beyond the pilot — deploying OCR, analytics and predictive maintenance on real operations where uptime, quality and traceability are business-critical.",
    icon: BrainCircuit,
    points: [
      "OCR & Document AI",
      "Operations Analytics",
      "Predictive Maintenance",
      "AI on the Plant Floor",
    ],
  },
  {
    no: "04",
    tag: "Business Development",
    title: "APAC growth, GTM and commercial execution.",
    desc:
      "Opening new accounts, running GTM for industrial solutions, and converting technical depth into repeatable commercial outcomes — across Southeast Asia and North Asia.",
    icon: TrendingUp,
    points: [
      "Account Opening",
      "GTM Strategy",
      "Partner Ecosystem",
      "Solution-Led Sales",
    ],
  },
];

const metrics = [
  { k: "21+", v: "Years across enterprise IT, banking and Industry 4.0" },
  { k: "APAC", v: "Operating reach across Singapore, ASEAN and beyond" },
  { k: "Top 40", v: "IT LinkedIn Influencer · Singapore" },
  { k: "Industry 4.0", v: "Recognised content creator · OT/IT convergence" },
];

export default function Pillars() {
  return (
    <section
      id="work"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)]"
      data-testid="pillars-section"
    >
      <div className="container-x">
        {/* Header + intro (from LinkedIn About) */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16">
          <div className="md:col-span-5">
            <p className="overline mb-4">What I Do</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-white">
              Bridging the gap between{" "}
              <span className="italic text-[color:var(--accent)]">OT and IT</span>{" "}
              for industrial enterprises.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="text-[color:var(--text-2)] text-lg leading-relaxed">
              I help manufacturers and industrial enterprises turn plant-floor
              data into <span className="text-white">business intelligence</span>{" "}
              through MES, LIMS, Digital Twin, WMS, QMS and AI-enabled platforms
              including OCR. Over{" "}
              <span className="text-white">21 years across APAC</span> — at
              Yokogawa and Web Synergies — I've led digital transformation
              programs that consistently deliver measurable outcomes.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/gdfn9gq1_IMG_9196.png"
                alt="Industry 4.0 badge"
                className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover shrink-0 border border-[color:var(--border)]"
                data-testid="pillars-industry40-badge"
              />
              <div className="inline-flex items-center gap-3 px-3 py-2 border border-[color:var(--border)] text-xs font-mono text-[color:var(--text-2)]">
                <BadgeCheck size={14} className="text-[color:var(--accent)]" />
                Yokogawa · Web Synergies · APAC · 21+ years
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
                className="tile p-7 md:p-8 border-r border-b border-[color:var(--border)] flex flex-col min-h-[460px]"
                data-testid={`pillar-card-${i}`}
              >
                <div className="tile-accent" />
                <div className="flex items-center justify-between mb-10 relative">
                  <span className="font-mono text-xs text-[color:var(--text-3)] tracking-widest">
                    {p.no}
                  </span>
                  <Icon size={20} className="text-[color:var(--accent)]" />
                </div>
                <div className="overline mb-4 text-[color:var(--accent)]">{p.tag}</div>
                <h3 className="font-display text-xl md:text-2xl leading-tight text-white mb-4">
                  {p.title}
                </h3>
                <p className="text-[color:var(--text-2)] text-sm leading-relaxed mb-8">
                  {p.desc}
                </p>
                <ul className="mt-auto space-y-2 pt-6 border-t border-[color:var(--border)]">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-3 text-sm text-[color:var(--text-2)]"
                    >
                      <span className="inline-block h-px w-4 bg-[color:var(--accent)]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Metrics strip — from LinkedIn About */}
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
              <div key={i} className="p-6 md:p-8" data-testid={`metric-${i}`}>
                <div className="font-display text-3xl md:text-5xl text-[color:var(--accent)] leading-none tracking-tight">
                  {m.k}
                </div>
                <div className="text-xs md:text-sm text-[color:var(--text-2)] mt-3 leading-snug">
                  {m.v}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm md:text-base text-[color:var(--text-2)] max-w-2xl leading-relaxed">
              Recognised <span className="text-white">Industry 4.0 content creator</span> —
              sharing practical insights on smart manufacturing, digital
              transformation and OT/IT convergence with a global community of
              practitioners.
            </p>
            <a
              href="#contact"
              className="btn-ghost self-start md:self-auto"
              data-testid="pillars-metrics-cta"
            >
              Let's build your roadmap <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
