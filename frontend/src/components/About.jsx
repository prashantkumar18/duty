import { motion } from "framer-motion";
import { MessageCircle, Linkedin, Quote } from "lucide-react";
import ReadMore from "./ReadMore";

const PORTRAIT =
  "https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/1cwi4fq2_ChatGPT%20Image%20Apr%208%2C%202026%20at%2007_59_50%20PM.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)]"
      data-testid="about-section"
    >
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <div className="relative aspect-[4/5] border border-[color:var(--border)] overflow-hidden">
            <img
              src={PORTRAIT}
              alt="Prashant Kumar — APAC Business Development Leader"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[color:var(--accent)]">
                Prashant Kumar
              </div>
              <div className="font-display text-base md:text-lg text-white mt-1 leading-tight">
                APAC Business Development Leader
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] font-mono tracking-widest uppercase text-[color:var(--text-3)]">
            <span className="border border-[color:var(--border)] px-2 py-2 text-center">Yokogawa</span>
            <span className="border border-[color:var(--border)] px-2 py-2 text-center">Web Synergies</span>
            <span className="border border-[color:var(--border)] px-2 py-2 text-center">Singapore</span>
          </div>
        </motion.div>

        {/* About copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="md:col-span-7"
        >
          <p className="overline mb-4">About</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-white mb-8">
            <Quote
              size={26}
              className="inline-block text-[color:var(--accent)] -translate-y-1 mr-2"
            />
            I help industrial enterprises bridge{" "}
            <span className="italic text-[color:var(--accent)]">OT</span>
            <span className="mx-3 inline-block align-middle h-[2px] w-6 bg-[color:var(--accent)]" />
            <span className="italic text-[color:var(--accent)]">IT</span>{" "}
            with AI-enabled platforms.
          </h2>

          <ReadMore
            className="max-w-2xl"
            summary="MES · LIMS · Digital Twin · WMS · QMS · Machine Vision · OCR — turning plant-floor data into business intelligence with AI in the loop."
            full="Two decades across APAC at Yokogawa and Web Synergies — leading digital programs spanning process manufacturing, discrete manufacturing and smart-factory environments. Earlier chapters in core banking, FSI and digital ventures shape the commercial lens I bring to industrial transformation today. Recognised Industry 4.0 content creator with a global community of practitioners."
          />

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/6593914327?text=Hi%20Prashant%2C%20I%20saw%20your%20profile%20and%20would%20love%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              data-testid="about-whatsapp"
            >
              <MessageCircle size={16} /> WhatsApp Me
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-kumar-digital/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              data-testid="about-linkedin"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
