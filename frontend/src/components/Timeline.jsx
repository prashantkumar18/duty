import { motion } from "framer-motion";

const journey = [
  {
    period: "2024 →",
    company: "Yokogawa",
    role: "DX Consultant",
    place: "Singapore",
    note: "SMART Industry 4.0 digital solutions across APAC — Digital Twin, AI/ML platforms, energy management, sustainability and system integration.",
    highlight: true,
  },
  {
    period: "2023 →",
    company: "Web Synergies",
    role: "Director — Business Development",
    place: "Singapore",
    note: "Building new business and markets for industrial digital solutions. Solution-led GTM across APAC enterprise accounts.",
    highlight: true,
  },
  {
    period: "2022",
    company: "K2 Partnering Solutions",
    role: "Senior Account Executive (Sales & Delivery)",
    place: "Singapore",
    note: "IT professional services — outsourced managed services, resource contracting, reskilling and upskilling across APAC.",
  },
  {
    period: "2019 — 2022",
    company: "SelfDrvn Enterprise · CBLD · TalentGuard",
    role: "Customer Success Director",
    place: "APAC",
    note: "Geo expansion across APAC. Built and led 10-person customer success team; designed CS SOPs and engagement frameworks.",
  },
  {
    period: "2015 — 2019",
    company: "Advante 360",
    role: "Head of Technology",
    place: "India · ASEAN",
    note: "Stood up the digital department, marketing automation, GTM strategy and ASEAN expansion for the group.",
  },
  {
    period: "2011 — 2015",
    company: "Trinity Capital",
    role: "Business Head · Founder Director",
    place: "India · UK · USA",
    note: "First India SaaS marketing automation platform. Built and led a 25-person team; managed strategy across geographies and led real-estate fund advisory across UK/India markets.",
  },
  {
    period: "2005 — 2007",
    company: "Hiranandani Fund",
    role: "Deputy Manager · Real Estate Investment Fund",
    place: "India · UK · USA",
    note: "Built financial valuation and projection models supporting one of India's largest real-estate fundraises on LSE.",
  },
  {
    period: "2004 — 2005",
    company: "MaxVal Technologies · ICIT",
    role: "Investment Analyst · Research Consultant",
    place: "India · USA",
    note: "Outsourced US commercial real-estate advisory; published research on travel & tourism and time management.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)]"
      data-testid="timeline-section"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="overline mb-4">Career Chronicle</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-white">
              From financial markets to the plant floor — one continuous
              <span className="italic text-[color:var(--accent)]"> transformation arc</span>.
            </h2>
          </div>
          <div className="font-mono text-xs tracking-widest uppercase text-[color:var(--text-3)]">
            2004 → 2026
          </div>
        </div>

        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-[14px] md:left-[180px] top-0 bottom-0 w-px bg-[color:var(--border)]" />

          <ol className="space-y-10 md:space-y-12">
            {journey.map((j, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 items-start relative pl-10 md:pl-0"
                data-testid={`timeline-row-${i}`}
              >
                {/* Marker */}
                <span
                  className={`absolute left-[8px] md:left-[174px] top-2 h-3 w-3 rotate-45 ${
                    j.highlight
                      ? "bg-[color:var(--accent)]"
                      : "bg-[color:var(--bg)] border border-[color:var(--accent)]"
                  }`}
                />
                {/* Period */}
                <div className="font-mono text-sm tracking-widest uppercase text-[color:var(--accent)] pt-1">
                  {j.period}
                </div>
                {/* Body */}
                <div className="border-l border-[color:var(--border)] pl-6 md:pl-8 group">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-display text-xl md:text-2xl text-white leading-tight">
                      {j.company}
                    </h3>
                    <span className="text-xs font-mono tracking-widest uppercase text-[color:var(--text-3)]">
                      · {j.place}
                    </span>
                  </div>
                  <div className="text-sm md:text-base text-[color:var(--text-2)] mb-3">
                    {j.role}
                  </div>
                  <p className="text-sm text-[color:var(--text-2)] leading-relaxed max-w-2xl">
                    {j.note}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
