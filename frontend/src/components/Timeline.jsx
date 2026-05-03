import { motion } from "framer-motion";

const items = [
  {
    tag: "APAC",
    title: "Regional Business Development",
    desc: "Enterprise, manufacturing and transformation focus across the Asia Pacific market — shaping partnerships and multi-country accounts.",
    image:
      "https://images.unsplash.com/photo-1537155986727-3c402583a35a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxzaW5nYXBvcmUlMjBjaXR5JTIwbmlnaHR8ZW58MHx8fHwxNzc3Nzg2ODQ3fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    tag: "IT",
    title: "Enterprise Technology Positioning",
    desc: "Applications, integrations, platforms and digital workflows — the operating fabric of the modern enterprise.",
    image:
      "https://images.unsplash.com/photo-1744739813274-24b1f3ef2678?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhcmslMjBsaW5lcyUyMGx1eHVyeSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3Nzc3ODY4NTd8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    tag: "OT",
    title: "Industry 4.0 & Operations Systems",
    desc: "LIMS, MES, Digital Twin, visibility and plant data — making industrial operations observable and decision-ready.",
    image:
      "https://images.unsplash.com/photo-1735494033690-c74aa2641fb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3Nzc4Njg0N3ww&ixlib=rb-4.1.0&q=85",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 md:py-32 border-t border-[color:var(--border)]" data-testid="timeline-section">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <p className="overline mb-4">Editorial Timeline · Career Highlights</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-white">
            A profile built across business, enterprise IT and industrial transformation.
          </h2>
        </div>

        <div className="relative">
          {/* center rail */}
          <div className="hidden md:block absolute left-[140px] top-0 bottom-0 w-px bg-[color:var(--border)]" />

          <div className="space-y-16 md:space-y-24">
            {items.map((it, i) => (
              <motion.div
                key={it.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="grid md:grid-cols-[140px_1fr] gap-8 md:gap-16 items-start"
                data-testid={`timeline-item-${i}`}
              >
                <div className="flex md:block items-center gap-4">
                  <div className="font-display text-5xl md:text-7xl text-[color:var(--accent)] leading-none">
                    {it.tag}
                  </div>
                  <div className="hidden md:block h-px w-6 bg-[color:var(--accent)] mt-4" />
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-center pl-4 md:pl-10 relative">
                  <span className="hidden md:block absolute -left-[9px] top-4 h-4 w-4 border border-[color:var(--accent)] rotate-45 bg-[color:var(--bg)]" />
                  <div className="md:col-span-6">
                    <h3 className="font-display text-2xl md:text-4xl text-white leading-tight mb-4">
                      {it.title}
                    </h3>
                    <p className="text-[color:var(--text-2)] leading-relaxed">{it.desc}</p>
                  </div>
                  <div className="md:col-span-6">
                    <div className="relative overflow-hidden border border-[color:var(--border)] aspect-[4/3]">
                      <img
                        src={it.image}
                        alt={it.title}
                        className="w-full h-full object-cover img-mono transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
