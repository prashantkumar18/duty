import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: 21, suffix: "+", label: "Years Experience", note: "Across enterprise IT, banking and Industry 4.0." },
  { num: "APAC", label: "Regional Coverage", note: "Singapore, ASEAN and beyond." },
  { num: "IT · OT", label: "Transformation Lens", note: "Enterprise and plant convergence with AI in the loop." },
  { num: "Factory Solutions", label: "Practice Areas", note: "LIMS · Machine Vision · MES · Digital Twin · AI." },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [n, setN] = useState(0);
  const isNumeric = typeof value === "number";

  useEffect(() => {
    if (!inView || !isNumeric) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(start + (value - start) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, value]);

  // Auto-scale label-style values so long phrases (e.g. "Factory Solutions") fit.
  let textSize = "stat-number";
  if (!isNumeric) {
    const len = String(value).length;
    if (len > 12) textSize = "font-display font-medium text-3xl md:text-4xl tracking-tight leading-[1.05]";
    else if (len > 6) textSize = "font-display font-medium text-4xl md:text-5xl tracking-tight leading-[1.05]";
  }

  return (
    <span ref={ref} className={`${textSize} text-white block`}>
      {isNumeric ? n : value}
      {isNumeric && suffix ? <span className="text-[color:var(--accent)]">{suffix}</span> : null}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32" data-testid="stats-section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-14"
        >
          <p className="overline mb-4">At a Glance</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-white">
            Not only IT-OT. This profile spans core IT, digital strategy,
            commercial growth and enterprise transformation.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[color:var(--border)]">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-r border-b border-[color:var(--border)] p-6 md:p-10 bg-[color:var(--surface)]/30 hover:bg-[color:var(--surface)] transition-colors"
              data-testid={`stat-card-${i}`}
            >
              <div className="mb-3">
                <Counter value={s.num} suffix={s.suffix} />
              </div>
              <div className="overline text-[color:var(--text-3)] mb-2">{s.label}</div>
              <div className="text-sm text-[color:var(--text-2)] leading-relaxed">
                {s.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
