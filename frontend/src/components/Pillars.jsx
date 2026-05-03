import { motion } from "framer-motion";
import { TrendingUp, Layers, Mic } from "lucide-react";

const pillars = [
  {
    no: "01",
    tag: "Business",
    title: "Growth, GTM, and Revenue Development",
    desc: "Building opportunities, opening new accounts, and shaping solution-led growth across enterprise and industrial markets.",
    icon: TrendingUp,
    points: ["Account Expansion", "GTM Strategy", "Partner Ecosystem", "Pipeline Development"],
  },
  {
    no: "02",
    tag: "Transformation",
    title: "IT, IT-OT, and Digital Execution",
    desc: "Turning digital strategy into workable platforms covering data, processes, plant visibility and connected systems.",
    icon: Layers,
    points: ["MES · LIMS · Digital Twin", "Enterprise Data", "Plant Visibility", "Connected Systems"],
  },
  {
    no: "03",
    tag: "Influence",
    title: "Thought Leadership with Commercial Value",
    desc: "Content creation, positioning and industry communication that supports credibility, trust and business conversations.",
    icon: Mic,
    points: ["Articles & Videos", "Industry Speaking", "Positioning", "Market Storytelling"],
  },
];

export default function Pillars() {
  return (
    <section id="work" className="relative py-24 md:py-32 border-t border-[color:var(--border)]" data-testid="pillars-section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="overline mb-4">What I Do</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-white max-w-3xl">
              Three pillars — each compounds the others.
            </h2>
          </div>
          <p className="text-[color:var(--text-2)] max-w-md">
            A profile built across business, enterprise IT and industrial
            transformation — connecting customer need, commercial direction and
            execution into one narrative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[color:var(--border)]">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="tile p-8 md:p-10 border-r border-b border-[color:var(--border)] flex flex-col min-h-[420px]"
                data-testid={`pillar-card-${i}`}
              >
                <div className="tile-accent" />
                <div className="flex items-center justify-between mb-10 relative">
                  <span className="font-mono text-xs text-[color:var(--text-3)] tracking-widest">{p.no}</span>
                  <Icon size={20} className="text-[color:var(--accent)]" />
                </div>
                <div className="overline mb-4 text-[color:var(--accent)]">{p.tag}</div>
                <h3 className="font-display text-2xl md:text-3xl leading-tight text-white mb-4">
                  {p.title}
                </h3>
                <p className="text-[color:var(--text-2)] text-sm leading-relaxed mb-8">
                  {p.desc}
                </p>
                <ul className="mt-auto space-y-2 pt-6 border-t border-[color:var(--border)]">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm text-[color:var(--text-2)]">
                      <span className="inline-block h-px w-4 bg-[color:var(--accent)]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* DMI emphasis block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:p-14 grid md:grid-cols-12 gap-8 items-center relative overflow-hidden"
          data-testid="dmi-block"
        >
          <div className="md:col-span-7">
            <p className="overline mb-4">Digital Manufacturing Intelligence</p>
            <h3 className="font-display text-2xl md:text-4xl leading-tight text-white">
              DMI should <span className="italic text-[color:var(--accent)]">lead the story</span> — where plant data, enterprise systems and decision-making converge into real execution value.
            </h3>
          </div>
          <div className="md:col-span-5 grid grid-cols-3 gap-4">
            {[
              { k: "IT", v: "Enterprise Systems" },
              { k: "OT", v: "Plant & Process Data" },
              { k: "DX", v: "Transformation Execution" },
            ].map((x) => (
              <div key={x.k} className="border border-[color:var(--border)] p-5 bg-[color:var(--bg)]">
                <div className="font-display text-4xl text-[color:var(--accent)]">{x.k}</div>
                <div className="text-xs text-[color:var(--text-2)] mt-2 leading-snug">{x.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
