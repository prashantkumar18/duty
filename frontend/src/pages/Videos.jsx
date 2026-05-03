import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Linkedin, ArrowUpRight, Quote } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/prashant-kumar-digital/";

// Real Shōto Shōto (ショートショート) Video Series
const series = [
  {
    no: "151",
    badge: "Latest",
    title: "Hidden Factory Story",
    subtitle: "Vietnam · 5 APAC locations",
    tags: ["IT-OT", "Real-time Control", "Edge"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7416327819711889408/",
    excerpt:
      "On paper, capacity was 100. Reality: barely 40. Singapore IT said systems were stable. Malaysia said machines paused. India said decisions arrived too late. Philippines said money was bleeding. Everyone had data — no one had alignment.",
    lesson:
      "Real-time control belongs near the machines. Analytics belongs higher up. Capacity moved from 40 toward what the factory was built for — without buying anything new.",
  },
  {
    no: "150",
    badge: "Featured",
    title: "Start with IT First — Not Machines",
    subtitle: "Singapore · Malaysia · Philippines",
    tags: ["IT Foundations", "Sequencing", "ERP · MES"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7415241789944582144/",
    excerpt:
      "Daniel (IT, SG): 'IT is already stretched.' Nur Aina (Ops, MY): 'Machines are the problem.' Marco (Finance, PH): 'Costs are rising everywhere.' Everyone was right. Everyone was stuck.",
    lesson:
      "Most IT teams keep networks alive — they don't build systems that scale decisions. Flip the approach: IT first, automate manual IT work for early cost wins, then ERP, MES, machine data. Transformation isn't a technology issue — it's a sequencing issue.",
  },
  {
    no: "149",
    badge: "Featured",
    title: "Cloud, Cybersecurity & The Shop Floor",
    subtitle: "Malaysia · Singapore · UK HQ",
    tags: ["Hybrid Cloud", "Edge Control", "Security by Design"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7414887423815606272/",
    excerpt:
      "Farid (Ops, MY): 'We want analytics… but not the cloud.' Kelvin (IT, SG): 'Cyber risk is not fine.' UK CEO: 'Will this cause downtime?' Three countries, same factory group, same fear — nothing moved.",
    lesson:
      "Stop asking cloud vs on-prem. Ask what stays local and what can move. Control logic stays with machines. Real-time decisions stay on the floor. Analytics moves up. Secure access. Clear boundaries. Factories don't reject digital — they reject uncertainty.",
  },
  {
    no: "148",
    badge: "Featured",
    title: "Who Owns The Outcome?",
    subtitle: "Singapore · Malaysia · India · Philippines",
    tags: ["Ownership", "Architecture", "Vendor Management"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7414459702740340736/",
    excerpt:
      "Wei Ming showed automation. Aisyah explained ERP. Ravi spoke about maintenance tools. Jose shared analytics dashboards. On paper, complete. In reality, nothing was connected. Vendors blamed each other. Integration was always 'phase two.'",
    lesson:
      "I asked one question — 'who owns the outcome?' Silence. It wasn't a technology problem; it was an ownership problem. We paused, mapped the value chain, simplified the architecture. The factory stopped managing vendors and started managing outcomes.",
  },
];

const upcoming = [
  { tag: "MES", title: "MES — The Backbone of Smart Manufacturing" },
  { tag: "Digital Twin", title: "Digital Twin in Practice — Beyond the Buzzword" },
  { tag: "AI · OCR", title: "OCR + AI on the Plant Floor" },
  { tag: "EMS · ESG", title: "Energy Management & Sustainability in Industry 4.0" },
  { tag: "WMS · QMS", title: "Quality of Operations Data" },
  { tag: "GTM", title: "ASEAN GTM for Industry 4.0 Solutions" },
];

export default function Videos() {
  return (
    <div className="App grain-overlay">
      <Navigation />
      <main className="pt-28 md:pt-36">
        {/* Header */}
        <section className="container-x pb-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <p className="overline mb-4">
                Shōto Shōto · ショートショート · Video Series
              </p>
              <h1
                className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-[0.95]"
                data-testid="videos-title"
              >
                Real factory stories.
                <br />
                <span className="italic text-[color:var(--accent)]">
                  Real APAC conversations.
                </span>
              </h1>
              <p className="mt-6 text-[color:var(--text-2)] max-w-2xl leading-relaxed text-base md:text-lg">
                A continuing short-form series on what actually happens inside
                factories across Singapore, Malaysia, Vietnam, India, the
                Philippines and beyond — published consistently on LinkedIn.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                data-testid="videos-linkedin-cta"
              >
                <Linkedin size={16} /> Follow on LinkedIn
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Featured episode (latest) */}
        <section className="container-x pb-20">
          <FeaturedCard ep={series[0]} />
        </section>

        {/* Episode list */}
        <section className="container-x pb-24">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl md:text-4xl text-white tracking-tight">
              Recent Episodes
            </h2>
            <span className="font-mono text-xs text-[color:var(--text-3)] tracking-widest uppercase">
              #148 — #150
            </span>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[color:var(--border)]"
            data-testid="videos-grid"
          >
            {series.slice(1).map((ep, i) => (
              <EpisodeCard key={ep.no} ep={ep} idx={i} />
            ))}
          </div>
        </section>

        {/* Topics in pipeline */}
        <section className="container-x pb-32">
          <div className="border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:p-12">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <p className="overline mb-3">More on the way</p>
                <h2 className="font-display text-2xl md:text-4xl text-white tracking-tight">
                  Topics in the pipeline
                </h2>
              </div>
              <span className="font-mono text-xs text-[color:var(--text-3)] tracking-widest uppercase hidden md:inline">
                Drop a comment to vote
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {upcoming.map((t, i) => (
                <a
                  key={i}
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border border-[color:var(--border)] p-4 hover:border-[color:var(--accent)] transition-colors bg-[color:var(--bg)]"
                  data-testid={`upcoming-topic-${i}`}
                >
                  <div>
                    <span className="overline text-[color:var(--accent)] block mb-1">
                      {t.tag}
                    </span>
                    <span className="text-sm text-white">{t.title}</span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[color:var(--text-3)] group-hover:text-[color:var(--accent)] transition-colors shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FeaturedCard({ ep }) {
  return (
    <motion.a
      href={ep.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group block border border-[color:var(--border)] bg-[color:var(--surface)] hover:border-[color:var(--accent)] transition-colors relative overflow-hidden"
      data-testid="video-featured-card"
    >
      <div className="grid md:grid-cols-12 gap-0">
        {/* Visual side */}
        <div className="md:col-span-5 relative aspect-video md:aspect-auto md:min-h-[420px] bg-[color:var(--bg)] overflow-hidden">
          <div className="absolute inset-0 hero-grid-bg" />
          <div className="accent-blob" style={{ top: "10%", left: "-100px", opacity: 0.6 }} />
          <div className="absolute inset-0 flex flex-col justify-between p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[color:var(--accent)]">
                Episode #{ep.no}
              </span>
              <span className="border border-[color:var(--accent)] text-[color:var(--accent)] text-[10px] font-mono tracking-widest uppercase px-2 py-1">
                {ep.badge}
              </span>
            </div>
            <div>
              <div className="font-display text-7xl md:text-8xl text-white leading-none tracking-tighter">
                #{ep.no}
              </div>
              <div className="overline mt-3 text-[color:var(--text-2)]">
                {ep.subtitle}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {ep.tags.map((t) => (
                <span key={t} className="chip text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="md:col-span-7 p-8 md:p-12">
          <h3 className="font-display text-3xl md:text-5xl text-white tracking-tight leading-[1.05] mb-6">
            {ep.title}
          </h3>
          <p className="text-[color:var(--text-2)] leading-relaxed text-base md:text-lg mb-6">
            <Quote size={18} className="inline-block text-[color:var(--accent)] -translate-y-0.5 mr-2" />
            {ep.excerpt}
          </p>
          <div className="border-l-2 border-[color:var(--accent)] pl-4 mb-8">
            <p className="text-[color:var(--text-1)] leading-relaxed text-base md:text-lg">
              {ep.lesson}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm text-[color:var(--accent)] group-hover:translate-x-1 transition-transform">
              <Linkedin size={16} /> Watch on LinkedIn{" "}
              <ArrowUpRight size={16} />
            </span>
            <span className="font-mono text-xs text-[color:var(--text-3)] tracking-widest uppercase">
              Shōto Shōto
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function EpisodeCard({ ep, idx }) {
  return (
    <motion.a
      href={ep.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className="tile p-7 md:p-8 border-r border-b border-[color:var(--border)] flex flex-col min-h-[420px]"
      data-testid={`video-card-${idx}`}
    >
      <div className="tile-accent" />
      <div className="flex items-center justify-between mb-8 relative">
        <span className="font-display text-5xl text-white leading-none">
          #{ep.no}
        </span>
        <Linkedin size={18} className="text-[color:var(--accent)]" />
      </div>
      <div className="overline mb-3 text-[color:var(--accent)]">
        {ep.subtitle}
      </div>
      <h3 className="font-display text-xl md:text-2xl text-white leading-tight mb-4">
        {ep.title}
      </h3>
      <p className="text-sm text-[color:var(--text-2)] leading-relaxed mb-6 line-clamp-5">
        {ep.excerpt}
      </p>
      <div className="mt-auto pt-5 border-t border-[color:var(--border)] flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {ep.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono tracking-widest uppercase text-[color:var(--text-3)] border border-[color:var(--border)] px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
        <ArrowUpRight
          size={18}
          className="text-[color:var(--text-2)] group-hover:text-[color:var(--accent)]"
        />
      </div>
    </motion.a>
  );
}
