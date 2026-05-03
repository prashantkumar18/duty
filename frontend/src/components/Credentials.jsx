import { motion } from "framer-motion";

const pills = [
  "MBA",
  "CSM",
  "CISI",
  "Digital Transformation",
  "IT + IT-OT",
  "LIMS / MES / Twin",
  "APAC Business Development",
  "Enterprise Architecture",
  "Smart Factory",
  "ESG & Sustainability",
  "Data & AI",
  "Thought Leadership",
];

export default function Credentials() {
  return (
    <section className="relative py-24 md:py-32 border-t border-[color:var(--border)]" data-testid="credentials-section">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <p className="overline mb-4">Credentials</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-white">
              Highlights
            </h2>
            <p className="text-[color:var(--text-2)] mt-6 max-w-sm">
              Certifications, disciplines and focus areas that underpin the
              profile — across business, technology and industrial systems.
            </p>
          </div>

          <div className="md:col-span-8 flex flex-wrap gap-3">
            {pills.map((p, i) => (
              <motion.span
                key={p}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="chip float-slow"
                style={{ animationDelay: `${i * 0.2}s` }}
                data-testid={`credential-${i}`}
              >
                {p}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
