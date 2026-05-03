import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MapPin,
  ArrowUpRight,
  Calendar,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Linkedin,
} from "lucide-react";

const PMAX_IMAGES = [
  "https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/umjpm1k7_586233576_1340903891380886_1640483451021889747_n.jpg",
  "https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/ryzoko2f_90cf1d17-bb16-4ae9-8201-e07e29215e08.jpeg",
  "https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/xmarbldc_fea03e61-8cc5-4337-9ffc-f581385c1dc9.jpeg",
  "https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/iodsgepe_e56a798a-dd54-4c1b-ae71-dae787b1970a.jpeg",
  "https://customer-assets.emergentagent.com/job_duty-tracker-60/artifacts/ft8kjp78_5559e013-1c92-4c0b-b511-512b5f02f9cf.jpeg",
];

const featured = {
  year: "2025",
  date: "Dec 3, 2025",
  title: "Philippines Manufacturing & Automation Expo",
  org: "PMAX 2025 · Yokogawa · Web Synergies",
  place: "SMX Convention Center, Manila",
  topic:
    "Featured Yokogawa speaker on Digital Twin & Energy Management. Walked the audience through The Global Manufacturing Shift, Sustainability frameworks, and 'Small Changes, Big Impact' — how digital transformation can start with one process and scale across the factory.",
  url: "https://www.linkedin.com/posts/yokogawaphilippinesinc_pmax2025-aimanufacturing-industrialgrowth-activity-7397423505023201280-YwZd",
  badge: "Keynote",
  images: PMAX_IMAGES,
};

const others = [
  {
    year: "2026",
    title: "How to Prepare a Sales Budget Using AI",
    org: "EGN · Sales Forum",
    place: "Singapore",
    topic:
      "Practical AI for commercial planning, forecasting and target setting — designed for sales leaders facing 2026 budgeting cycles.",
    badge: "Executive Workshop",
    url: "https://www.linkedin.com/posts/prashant-kumar-digital_leadership-salesleadership-businessgrowth-activity-7442366047753711616-FjwA",
  },
  {
    year: "2025",
    title: "China's Competitive Advantage in Manufacturing",
    org: "EGN Leadership Team",
    place: "Singapore · APAC",
    topic:
      "Roundtable on how China outperforms peer economies in manufacturing — and what ASEAN leaders can practically learn from it.",
    badge: "Leadership Roundtable",
    url: null,
  },
  {
    year: "2020",
    title: "Driving SaaS Growth with Customer Success",
    org: "Future of SaaS Festival APAC",
    place: "Online · APAC",
    topic:
      "The world's first and only online festival dedicated to the future of SaaS in APAC — keynote on customer success as a growth engine.",
    badge: "Keynote · Festival",
    url: null,
  },
];

export default function Speaking() {
  return (
    <section
      id="speaking"
      className="relative py-24 md:py-32 border-t border-[color:var(--border)]"
      data-testid="speaking-section"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="overline mb-4">Speaking · Industry Stages</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-white">
              From boardrooms to industry stages —{" "}
              <span className="italic text-[color:var(--accent)]">
                same conversation
              </span>
              , bigger room.
            </h2>
          </div>
          <p className="text-[color:var(--text-2)] max-w-md">
            Selected forums, panels and keynotes across APAC on Industry 4.0,
            sales, leadership and the future of SaaS.
          </p>
        </div>

        {/* Featured PMAX with gallery */}
        <FeaturedSpeaking ev={featured} />

        {/* Other events */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[color:var(--border)]">
          {others.map((ev, i) => (
            <OtherEventCard key={i} ev={ev} idx={i} />
          ))}
        </div>

        <div className="mt-10 text-xs font-mono text-[color:var(--text-3)] flex items-center justify-between">
          <span>Open to keynotes, panels and executive workshops across APAC.</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[color:var(--accent)] hover:underline"
            data-testid="speaking-cta"
          >
            Invite me to speak <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturedSpeaking({ ev }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setActive((p) => (p + 1) % ev.images.length);
  const prev = () => setActive((p) => (p - 1 + ev.images.length) % ev.images.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className="border border-[color:var(--border)] bg-[color:var(--surface)] overflow-hidden"
      data-testid="featured-speaking"
    >
      <div className="grid md:grid-cols-12">
        {/* Gallery */}
        <div className="md:col-span-7 relative bg-black">
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[520px] overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={ev.images[active]}
                alt={`${ev.title} — image ${active + 1}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
                onClick={() => setLightbox(true)}
                data-testid="featured-speaking-image"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-black/60 border border-[color:var(--border)] hover:border-[color:var(--accent)] text-white opacity-70 group-hover:opacity-100 transition"
              data-testid="speaking-prev"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-black/60 border border-[color:var(--border)] hover:border-[color:var(--accent)] text-white opacity-70 group-hover:opacity-100 transition"
              data-testid="speaking-next"
            >
              <ChevronRight size={18} />
            </button>

            {/* Counter */}
            <span className="absolute top-3 right-3 font-mono text-[10px] tracking-widest uppercase bg-black/70 border border-[color:var(--border)] px-2 py-1 text-[color:var(--text-2)]">
              {String(active + 1).padStart(2, "0")} / {String(ev.images.length).padStart(2, "0")}
            </span>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-px bg-[color:var(--border)] border-t border-[color:var(--border)]">
            {ev.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`relative aspect-[4/3] overflow-hidden bg-black ${
                  i === active ? "ring-2 ring-[color:var(--accent)] ring-inset" : ""
                }`}
                data-testid={`speaking-thumb-${i}`}
              >
                <img
                  src={src}
                  alt=""
                  className={`w-full h-full object-cover transition ${
                    i === active ? "" : "opacity-50 hover:opacity-90"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-5 p-8 md:p-10 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 border border-[color:var(--accent)] text-[color:var(--accent)] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase">
              <Mic size={11} /> {ev.badge}
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[color:var(--text-3)]">
              {ev.date}
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-white leading-[1.05] tracking-tight mb-5">
            {ev.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[color:var(--text-3)] tracking-widest uppercase mb-6">
            <span className="text-[color:var(--accent)]">{ev.org}</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={11} /> {ev.place}
            </span>
          </div>

          <p className="text-[color:var(--text-2)] leading-relaxed text-base mb-8 max-w-md">
            {ev.topic}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6 border-t border-[color:var(--border)]">
            <a
              href={ev.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              data-testid="featured-speaking-cta"
            >
              <Linkedin size={16} /> See Yokogawa's post
              <ExternalLink size={14} />
            </a>
            <button
              onClick={() => setLightbox(true)}
              className="btn-ghost"
              data-testid="featured-speaking-gallery"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(false)}
            data-testid="speaking-lightbox"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(false);
              }}
              aria-label="Close"
              className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center bg-black/60 border border-[color:var(--border)] hover:border-[color:var(--accent)] text-white"
              data-testid="speaking-lightbox-close"
            >
              <X size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center bg-black/60 border border-[color:var(--border)] hover:border-[color:var(--accent)] text-white"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center bg-black/60 border border-[color:var(--border)] hover:border-[color:var(--accent)] text-white"
            >
              <ChevronRight size={22} />
            </button>
            <motion.img
              key={active}
              src={ev.images[active]}
              alt={`Gallery ${active + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[90vh] max-w-[92vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function OtherEventCard({ ev, idx }) {
  const Wrapper = ev.url ? "a" : "div";
  const wrapperProps = ev.url
    ? { href: ev.url, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className="tile p-7 md:p-8 border-r border-b border-[color:var(--border)] flex flex-col min-h-[300px] relative"
      data-testid={`speaking-event-${idx}`}
    >
      <Wrapper {...wrapperProps} className="flex flex-col h-full group">
        <div className="tile-accent" />
        <div className="flex items-center justify-between mb-6 relative">
          <span className="inline-flex items-center gap-2 border border-[color:var(--border)] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-[color:var(--text-2)]">
            <Mic size={11} className="text-[color:var(--accent)]" /> {ev.badge}
          </span>
          <span className="font-display text-3xl text-[color:var(--accent)] leading-none">
            {ev.year}
          </span>
        </div>

        <h3 className="font-display text-xl md:text-2xl text-white leading-snug mb-4">
          {ev.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-mono text-[color:var(--text-3)] tracking-widest uppercase mb-4">
          <span className="text-[color:var(--accent)]">{ev.org}</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={10} /> {ev.place}
          </span>
        </div>

        <p className="text-sm text-[color:var(--text-2)] leading-relaxed">{ev.topic}</p>

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-[color:var(--border)]">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-[color:var(--text-3)] tracking-widest uppercase">
            <Calendar size={12} /> {ev.year}
          </span>
          {ev.url ? (
            <span className="inline-flex items-center gap-1 text-xs text-[color:var(--accent)]">
              <Linkedin size={12} /> Post <ArrowUpRight size={12} />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs text-[color:var(--text-3)]">
              On request
            </span>
          )}
        </div>
      </Wrapper>
    </motion.div>
  );
}
