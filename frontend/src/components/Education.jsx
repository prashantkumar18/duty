import { motion } from "framer-motion";
import { GraduationCap, ScrollText } from "lucide-react";

const education = [
  {
    year: "2018",
    title: "Post Graduate Diploma in Digital Business",
    place: "Columbia University & MIT",
  },
  {
    year: "2004",
    title: "Master of Business Administration (MBA)",
    place: "ICFAI Business School",
  },
  {
    year: "2002",
    title: "Master's Diploma in Financial Management",
    place: "ICFAI University",
  },
  {
    year: "1998",
    title: "Bachelor's in Commerce",
    place: "Ranchi University, India",
  },
];

const certifications = [
  { year: "2022", title: "CEI (KAH)" },
  { year: "2020", title: "Certified ScrumMaster® · Scrum Alliance" },
  { year: "2020", title: "Customer Success Manager · Gainsight (Pulse+)" },
  { year: "2014", title: "Securities & Investment · CISI" },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)]"
      data-testid="education-section"
    >
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={18} className="text-[color:var(--accent)]" />
            <p className="overline">Education</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-8">
            From financial models to digital business at MIT.
          </h2>
          <ul className="border-t border-l border-[color:var(--border)]">
            {education.map((e, i) => (
              <li
                key={i}
                className="grid grid-cols-[80px_1fr] gap-4 border-r border-b border-[color:var(--border)] p-5 md:p-6 hover:bg-[color:var(--surface)] transition-colors"
                data-testid={`education-${i}`}
              >
                <span className="font-mono text-sm text-[color:var(--accent)]">
                  {e.year}
                </span>
                <div>
                  <div className="font-display text-base md:text-lg text-white leading-snug">
                    {e.title}
                  </div>
                  <div className="text-xs text-[color:var(--text-2)] mt-1">
                    {e.place}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <ScrollText size={18} className="text-[color:var(--accent)]" />
            <p className="overline">Certifications</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-8">
            Disciplines that underwrite the practice.
          </h2>
          <ul className="border-t border-l border-[color:var(--border)]">
            {certifications.map((c, i) => (
              <li
                key={i}
                className="grid grid-cols-[80px_1fr] gap-4 border-r border-b border-[color:var(--border)] p-5 md:p-6 hover:bg-[color:var(--surface)] transition-colors"
                data-testid={`certification-${i}`}
              >
                <span className="font-mono text-sm text-[color:var(--accent)]">
                  {c.year}
                </span>
                <div className="font-display text-base md:text-lg text-white leading-snug">
                  {c.title}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 border border-[color:var(--border)] p-6 bg-[color:var(--surface)]">
            <p className="overline mb-2">Recognition</p>
            <p className="text-[color:var(--text-2)] text-sm leading-relaxed">
              Top 40 IT LinkedIn Influencer in Singapore · recognised
              Industry 4.0 thought leader with a global community across smart
              manufacturing, IT-OT and digital transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
