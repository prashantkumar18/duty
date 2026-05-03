import { motion } from "framer-motion";
import { Languages, ArrowUpRight } from "lucide-react";

const phrases = [
  { jp: "改善", romaji: "Kaizen", en: "Continuous improvement" },
  { jp: "現場", romaji: "Genba", en: "The actual place — the shop floor" },
  { jp: "ものづくり", romaji: "Monozukuri", en: "The craft of making things" },
  { jp: "報連相", romaji: "Hō-Ren-Sō", en: "Report · Inform · Consult" },
  { jp: "ショートショート", romaji: "Shōto Shōto", en: "Short short — my video series" },
  { jp: "おもてなし", romaji: "Omotenashi", en: "Wholehearted hospitality" },
];

export default function Japanese() {
  return (
    <section
      id="japanese"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)] overflow-hidden"
      data-testid="japanese-section"
    >
      {/* Decorative oversized kanji */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none"
      >
        <span
          className="font-display block text-[26vw] md:text-[18vw] leading-none text-white/[0.04] tracking-tighter"
          style={{ fontFeatureSettings: "'kern' 1" }}
        >
          日本語
        </span>
      </div>

      <div className="relative container-x grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <div className="inline-flex items-center gap-2 border border-[color:var(--border)] px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase text-[color:var(--text-2)] mb-6">
            <Languages size={12} className="text-[color:var(--accent)]" />{" "}
            Currently Learning
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-white tracking-tight">
            <span className="block text-[color:var(--accent)] text-2xl md:text-3xl mb-3 tracking-normal">
              日本語 · Nihongo
            </span>
            Learning Japanese — quietly, daily.
          </h2>
          <p className="mt-6 text-[color:var(--text-2)] leading-relaxed text-base md:text-lg max-w-md">
            Working closely with{" "}
            <span className="text-white">Yokogawa</span> and Japanese
            manufacturing partners, I'm learning the language to honour the
            culture behind the work — and to listen better in the rooms where
            it matters most.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-mono tracking-widest uppercase text-[color:var(--text-3)]">
            <span className="border border-[color:var(--border)] px-2.5 py-1.5">
              Hiragana
            </span>
            <span className="border border-[color:var(--border)] px-2.5 py-1.5">
              Katakana
            </span>
            <span className="border border-[color:var(--border)] px-2.5 py-1.5">
              N5 → N4
            </span>
            <span className="border border-[color:var(--accent)] text-[color:var(--accent)] px-2.5 py-1.5">
              Practice · Daily
            </span>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 text-sm text-[color:var(--accent)] hover:underline"
            data-testid="japanese-cta"
          >
            よろしくお願いします · Yoroshiku onegaishimasu{" "}
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-7"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-[color:var(--border)]">
            {phrases.map((p, i) => (
              <div
                key={i}
                className="border-r border-b border-[color:var(--border)] p-6 md:p-7 bg-[color:var(--surface)]/40 hover:bg-[color:var(--surface)] transition-colors"
                data-testid={`japanese-phrase-${i}`}
              >
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <span className="font-display text-3xl md:text-4xl text-white tracking-tight">
                    {p.jp}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[color:var(--text-3)]">
                    0{i + 1}
                  </span>
                </div>
                <div className="font-mono text-xs text-[color:var(--accent)] tracking-widest uppercase mb-1">
                  {p.romaji}
                </div>
                <div className="text-sm text-[color:var(--text-2)] leading-snug">
                  {p.en}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
