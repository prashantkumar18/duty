import { motion } from "framer-motion";
import { Factory, Database, Leaf, Globe2 } from "lucide-react";

const sectors = [
  {
    key: "I",
    icon: Factory,
    title: "Industrial",
    desc: "Smart manufacturing, quality, process and operations visibility.",
    span: "md:col-span-7 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1735494033690-c74aa2641fb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3Nzc4Njg0N3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    key: "E",
    icon: Database,
    title: "Enterprise IT",
    desc: "Applications, data, digital workflows and business system integration.",
    span: "md:col-span-5",
    image:
      "https://images.unsplash.com/photo-1744739813274-24b1f3ef2678?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhcmslMjBsaW5lcyUyMGx1eHVyeSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3Nzc3ODY4NTd8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    key: "S",
    icon: Leaf,
    title: "Sustainability",
    desc: "ESG platforms, reporting, energy visibility and responsible operations.",
    span: "md:col-span-5",
  },
  {
    key: "A",
    icon: Globe2,
    title: "APAC Growth",
    desc: "Market development, partnerships, solution shaping and account expansion.",
    span: "md:col-span-7",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="relative py-24 md:py-32 border-t border-[color:var(--border)]" data-testid="sectors-section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="overline mb-4">Key Sectors</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-white max-w-3xl">
              Four surfaces where digital growth becomes real.
            </h2>
          </div>
          <p className="text-[color:var(--text-2)] max-w-md font-mono text-xs tracking-widest uppercase">
            I · E · S · A &nbsp;—&nbsp; sector map
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className={`tile relative ${s.span} min-h-[260px] md:min-h-[300px] p-6 md:p-8 overflow-hidden`}
                data-testid={`sector-tile-${s.key}`}
              >
                {s.image && (
                  <div className="absolute inset-0">
                    <img src={s.image} alt="" className="w-full h-full object-cover img-mono opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--bg)]/90 via-[color:var(--bg)]/70 to-transparent" />
                  </div>
                )}
                <div className="tile-accent" />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-6xl md:text-8xl text-[color:var(--accent)] leading-none">
                      {s.key}
                    </div>
                    <Icon size={22} className="text-[color:var(--text-2)]" />
                  </div>
                  <div className="mt-auto pt-10">
                    <h3 className="font-display text-xl md:text-2xl text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-[color:var(--text-2)] max-w-md leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
