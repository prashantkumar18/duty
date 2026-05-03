import { motion } from "framer-motion";

const groups = [
  {
    label: "Industry 4.0 · OT",
    items: [
      "MES",
      "LIMS",
      "Digital Twin",
      "WMS",
      "QMS",
      "EMS",
      "APM",
      "SMART Factory",
      "Wire Harness MES",
      "Process · Discrete Mfg.",
    ],
  },
  {
    label: "Enterprise IT",
    items: [
      "IT-OT Integration",
      "Data Platform",
      "AI · ML",
      "OCR",
      "Predictive Maintenance",
      "Cloud",
      "MS Products",
      "SAP HR",
      "CRM",
      "Cyber Alignment",
    ],
  },
  {
    label: "Banking · FSI",
    items: [
      "Core Banking Transformation",
      "Payments",
      "Digital Banking",
      "AML",
      "Financial Services Platforms",
      "FSI Programs",
      "Public Sector Programs",
    ],
  },
  {
    label: "Commercial · GTM",
    items: [
      "GTM Strategy",
      "Solution Positioning",
      "Bid Management",
      "RFP / RFI Ownership",
      "Deal Structuring",
      "C-Suite Relationships",
      "Account Management",
      "Hunter & Farmer",
      "Multi-team Orchestration",
      "Vendor Management",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)]"
      data-testid="skills-section"
    >
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <p className="overline mb-4">Skills · Expertise</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-white">
              Industrial depth, enterprise breadth.
            </h2>
          </div>
          <p className="md:col-span-7 text-[color:var(--text-2)] leading-relaxed text-base md:text-lg max-w-2xl">
            Four orbits of practice — moving fluently between plant data,
            enterprise systems, financial-services backbones and the commercial
            choreography that actually closes the deal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[color:var(--border)]">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="border-r border-b border-[color:var(--border)] p-6 md:p-8 bg-[color:var(--surface)]/30"
              data-testid={`skill-group-${gi}`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="overline text-[color:var(--accent)]">
                  {g.label}
                </span>
                <span className="font-mono text-xs text-[color:var(--text-3)]">
                  0{gi + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="chip" data-testid={`skill-chip-${s}`}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal skills strip */}
        <div className="mt-10 border border-[color:var(--border)] p-6 md:p-8 bg-[color:var(--surface)]">
          <div className="flex items-center justify-between mb-5">
            <span className="overline text-[color:var(--text-2)]">
              Operating Style
            </span>
            <span className="font-mono text-xs text-[color:var(--text-3)]">
              0 · soft skills
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Relationship-led",
              "Goal-Oriented",
              "Maximizer",
              "Analytical",
              "Problem Solver",
              "Mentor",
              "Entrepreneur Mindset",
              "Diverse Industry",
              "Highly Energetic",
              "Offshore + Global Teams",
              "SG Enterprise Network",
            ].map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
