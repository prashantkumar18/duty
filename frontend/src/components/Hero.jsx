import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const PORTRAIT =
  "https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/d5l834xk_F4263EE4-8D3D-433E-90C2-A5CB93F9841E.jpeg";

const keywords = [
  "Digital Transformation",
  "APAC",
  "SMART Factory",
  "MES · LIMS · Digital Twin",
  "WMS · QMS · EMS · APM",
  "IT-OT Integration",
  "AI / OCR Platforms",
  "Industry 4.0",
  "Core Banking",
  "Sustainability",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[color:var(--bg)]" />
        <div className="absolute inset-0 hero-grid-bg" />
        <div className="accent-blob" style={{ top: "15%", left: "-160px" }} />
        <div
          className="accent-blob"
          style={{ bottom: "-220px", right: "-120px", opacity: 0.55 }}
        />
      </div>

      {/* Content */}
      <div className="relative container-x pt-32 pb-20 md:pb-28 grid md:grid-cols-12 gap-10 md:gap-8 items-end">
        <div className="md:col-span-8 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)] animate-pulse" />
            <span className="overline">APAC · Singapore · 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[52px] leading-[0.95] md:text-[88px] lg:text-[120px] tracking-[-0.035em] font-medium text-white"
            data-testid="hero-title"
          >
            Prashant
            <br />
            <span className="text-[color:var(--text-2)]">Kumar</span>
            <span className="text-[color:var(--accent)]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-2xl leading-relaxed text-[color:var(--text-2)] max-w-2xl"
          >
            <span className="text-white">APAC Business Development Leader.</span>{" "}
            Bridging <span className="text-white">OT and IT</span> for industrial
            enterprises through MES, Digital Twin, AI-enabled platforms and
            smart-factory solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn-primary" data-testid="hero-cta-contact">
              Start a Conversation
            </a>
            <a href="#work" className="btn-ghost" data-testid="hero-cta-work">
              What I Do
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 order-1 md:order-2 relative"
          data-testid="hero-portrait"
        >
          <div className="relative aspect-[3/4] border border-[color:var(--border)] overflow-hidden bg-[color:var(--surface)]">
            <img
              src={PORTRAIT}
              alt="Prashant Kumar"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            {/* Corner ticks */}
            <span className="absolute top-2 left-2 h-3 w-3 border-l border-t border-[color:var(--accent)]" />
            <span className="absolute top-2 right-2 h-3 w-3 border-r border-t border-[color:var(--accent)]" />
            <span className="absolute bottom-2 left-2 h-3 w-3 border-l border-b border-[color:var(--accent)]" />
            <span className="absolute bottom-2 right-2 h-3 w-3 border-r border-b border-[color:var(--accent)]" />
            {/* ID strip */}
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-black/70 backdrop-blur-md flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
              <span className="text-[color:var(--text-2)]">ID · PK / 21Y</span>
              <span className="text-[color:var(--accent)]">SG · APAC</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="relative container-x pb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[color:var(--text-3)] text-xs font-mono">
          <ArrowDown size={14} className="animate-bounce" />
          Scroll to explore
        </div>
        <div className="hidden md:flex items-center gap-2 text-[color:var(--text-3)] text-xs font-mono">
          <span className="h-px w-12 bg-[color:var(--border)]" />
          Cover · 2026
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
              {k}{" "}
              <span className="text-[color:var(--accent)] ml-12">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
