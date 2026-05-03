import { motion } from "framer-motion";
import { Award, Sparkles, Users, FileText, Video, Target } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Top 40 IT LinkedIn Influencer · Singapore",
    desc: "Recognised among Singapore's most influential IT voices on LinkedIn for Industry 4.0 commentary.",
  },
  {
    icon: Sparkles,
    title: "Industry 4.0 Thought Leader",
    desc: "Daily content creation across smart manufacturing, IT-OT convergence and digital transformation.",
  },
  {
    icon: Video,
    title: "Industry 4.0 Use-Case Videos",
    desc: "Original short-form content explaining MES, Digital Twin, OCR, WMS, QMS and connected operations.",
  },
  {
    icon: FileText,
    title: "Long-form Writing on LinkedIn",
    desc: "Articles on enterprise IT, OT integration, ASEAN GTM and the human side of transformation.",
  },
  {
    icon: Target,
    title: "ASEAN Industry 4.0 GTM Architect",
    desc: "Defined go-to-market for Industry 4.0 solutions across Singapore, Malaysia, Thailand, Indonesia, Vietnam.",
  },
  {
    icon: Users,
    title: "Customer-First Operator",
    desc: "Built and led customer success teams; SOPs, retention programs and engagement frameworks across APAC.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)]"
      data-testid="achievements-section"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="overline mb-4">Recognition · Highlights</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-white">
              A profile built across business, enterprise IT and industrial
              transformation.
            </h2>
          </div>
          <p className="text-[color:var(--text-2)] max-w-md">
            The value isn't only technical positioning — it's the ability to
            connect customer need, commercial direction, solution design and
            execution into one narrative.
          </p>
        </div>

        {/* Featured 150th video celebration banner */}
        <motion.a
          href="https://www.linkedin.com/in/prashant-kumar-digital/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="group block relative border border-[color:var(--border)] overflow-hidden mb-10 bg-[color:var(--surface)]"
          data-testid="achievements-feature-banner"
        >
          <div className="grid md:grid-cols-12 items-stretch">
            <div className="md:col-span-7 relative aspect-[16/9] md:aspect-auto md:min-h-[360px] overflow-hidden">
              <img
                src="https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/qpnk4y7b_ChatGPT%20Image%20Jan%209%2C%202026%20at%2012_10_28%20PM.png"
                alt="Celebrating 150th video on factory solutions"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[color:var(--surface)] pointer-events-none" />
            </div>
            <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
              <span className="overline text-[color:var(--accent)] mb-3">
                Milestone · Shōto Shōto Series
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-white leading-[1.05] mb-4">
                150 videos and counting — an Industry 4.0 journey.
              </h3>
              <p className="text-[color:var(--text-2)] text-sm leading-relaxed mb-6">
                A daily practice of distilling factory-floor reality into
                short-form stories — keeping the conversation about smart
                manufacturing, IT-OT and digital transformation alive across
                APAC.
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-[color:var(--accent)] group-hover:translate-x-1 transition-transform">
                Watch the series on LinkedIn →
              </span>
            </div>
          </div>
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[color:var(--border)]">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="tile p-7 md:p-8 border-r border-b border-[color:var(--border)] min-h-[220px]"
                data-testid={`achievement-${i}`}
              >
                <div className="tile-accent" />
                <Icon size={22} className="text-[color:var(--accent)] mb-6" />
                <h3 className="font-display text-lg md:text-xl text-white leading-snug mb-2">
                  {it.title}
                </h3>
                <p className="text-sm text-[color:var(--text-2)] leading-relaxed">
                  {it.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
