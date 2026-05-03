import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Why Digital Manufacturing Intelligence Should Lead the Story",
    excerpt: "Plant data, enterprise systems, operational visibility and decision-making — brought together to create execution value, not just dashboards.",
    tag: "Transformation",
    date: "Jan 2026",
    read: "8 min read",
  },
  {
    title: "APAC Go-to-Market: Opening Industrial Accounts Deliberately",
    excerpt: "A field-tested approach to prospecting, shaping and closing enterprise deals across Southeast Asia and North Asia.",
    tag: "Business",
    date: "Dec 2025",
    read: "6 min read",
  },
  {
    title: "IT-OT is a Business Conversation, Not an Architecture Diagram",
    excerpt: "How to position convergence programs that actually get funded — framing the conversation with operations, finance and the CIO.",
    tag: "Strategy",
    date: "Nov 2025",
    read: "7 min read",
  },
  {
    title: "LIMS, MES, Digital Twin — Which First, and Why",
    excerpt: "A pragmatic sequencing for quality, production and visibility programs that compound across the plant network.",
    tag: "Industrial",
    date: "Oct 2025",
    read: "9 min read",
  },
  {
    title: "Sustainability Programs that Survive the Budget Review",
    excerpt: "ESG platforms, energy visibility and reporting — what actually moves the needle for operators, customers and investors.",
    tag: "Sustainability",
    date: "Sep 2025",
    read: "5 min read",
  },
  {
    title: "AI on the Plant Floor: From Pilot to P&L",
    excerpt: "Moving beyond demos — how to scope, instrument and operationalize AI on live manufacturing environments.",
    tag: "AI",
    date: "Aug 2025",
    read: "10 min read",
  },
];

export default function Articles() {
  return (
    <div className="App grain-overlay">
      <Navigation />
      <main className="pt-28 md:pt-36">
        <section className="container-x pb-16">
          <p className="overline mb-4">Articles · Selected Writing</p>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-[0.95] max-w-4xl" data-testid="articles-title">
            Writing at the edge of{" "}
            <span className="italic text-[color:var(--accent)]">business, IT and OT</span>.
          </h1>
          <p className="mt-6 text-[color:var(--text-2)] max-w-2xl">
            Field notes on digital transformation, APAC growth, enterprise IT
            and industrial systems — from a practitioner, not a pundit.
          </p>
        </section>

        <section className="container-x pb-32">
          <div className="border-t border-l border-[color:var(--border)]" data-testid="articles-list">
            {articles.map((a, i) => (
              <motion.a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group grid md:grid-cols-12 gap-6 border-r border-b border-[color:var(--border)] p-6 md:p-8 hover:bg-[color:var(--surface)] transition-colors"
                data-testid={`article-card-${i}`}
              >
                <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-1 items-start">
                  <span className="overline text-[color:var(--accent)]">{a.tag}</span>
                  <span className="text-xs font-mono text-[color:var(--text-3)]">{a.date}</span>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-3 group-hover:text-[color:var(--accent)] transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-[color:var(--text-2)] leading-relaxed max-w-2xl">
                    {a.excerpt}
                  </p>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-start md:items-center gap-2">
                  <span className="text-xs font-mono text-[color:var(--text-3)]">{a.read}</span>
                  <ArrowUpRight size={18} className="text-[color:var(--text-2)] group-hover:text-[color:var(--accent)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
