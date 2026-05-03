import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const keywords = [
  "Digital Transformation",
  "21+ Years",
  "APAC Business Development",
  "SMART Factory",
  "LIMS",
  "Digital Twin",
  "Energy Management",
  "IT-OT Data",
  "AI Development",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30547584/pexels-photo-30547584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1600"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--bg)]/70 via-[color:var(--bg)]/60 to-[color:var(--bg)]" />
        <div className="absolute inset-0 hero-grid-bg" />
        <div className="accent-blob" style={{ top: "20%", left: "-120px" }} />
        <div className="accent-blob" style={{ bottom: "-220px", right: "-160px", opacity: 0.6 }} />
      </div>

      {/* Content */}
      <div className="relative container-x pt-40 pb-28 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)] animate-pulse" />
          <span className="overline">Cover Story · 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[56px] leading-[0.95] md:text-[96px] lg:text-[136px] tracking-[-0.035em] font-medium text-white"
          data-testid="hero-title"
        >
          Prashant
          <br />
          <span className="text-[color:var(--text-2)]">Kumar</span>
          <span className="text-[color:var(--accent)]">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-7">
            <p className="text-lg md:text-2xl leading-relaxed text-[color:var(--text-2)] max-w-2xl">
              Building <span className="text-white">Digital Growth</span> across{" "}
              <span className="text-white">IT, IT-OT,</span> and{" "}
              <span className="text-white">Smart Industry</span> — at the
              intersection of business development, digital solution consulting
              and enterprise transformation across APAC.
            </p>
          </div>

          <div className="md:col-span-5 flex md:justify-end gap-3">
            <a href="#contact" className="btn-primary" data-testid="hero-cta-contact">
              Start a Conversation
            </a>
            <a href="#work" className="btn-ghost" data-testid="hero-cta-work">
              What I Do
            </a>
          </div>
        </motion.div>

        <div className="mt-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[color:var(--text-3)] text-xs font-mono">
            <ArrowDown size={14} className="animate-bounce" />
            Scroll to explore
          </div>
          <div className="hidden md:flex items-center gap-2 text-[color:var(--text-3)] text-xs font-mono">
            <Sparkles size={14} className="text-[color:var(--accent)]" />
            Singapore · APAC
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-[color:var(--border)] py-5 overflow-hidden">
        <div className="marquee">
          {[...keywords, ...keywords, ...keywords].map((k, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-[0.25em] uppercase text-[color:var(--text-3)]"
            >
              {k} <span className="text-[color:var(--accent)] ml-12">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
