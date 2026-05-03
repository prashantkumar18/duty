import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { MessageCircle, Mail, Linkedin, ArrowUpRight, Check } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const WHATSAPP = "6593914327"; // +65 93914327
const EMAIL = "prashantkumar18@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/prashant-kumar-digital/";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErr("");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (e2) {
      setStatus("error");
      setErr(e2?.response?.data?.detail || "Could not send. Please try again.");
    }
  };

  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi Prashant, I came across dutyee.com and would like to connect.",
  )}`;

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-[color:var(--border)]" data-testid="contact-section">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <p className="overline mb-4">Let's Talk</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-white mb-8">
              Let's build the next{" "}
              <span className="italic text-[color:var(--accent)]">digital growth</span> story.
            </h2>
            <p className="text-[color:var(--text-2)] leading-relaxed max-w-md mb-10">
              Whether it's APAC business development, enterprise transformation
              or digital manufacturing — happy to discuss, advise or collaborate.
            </p>

            <div className="space-y-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border border-[color:var(--border)] p-5 hover:border-[color:var(--accent)] transition-colors group"
                data-testid="contact-whatsapp"
              >
                <span className="flex items-center gap-4">
                  <MessageCircle size={20} className="text-[color:var(--accent)]" />
                  <span>
                    <span className="block text-white">WhatsApp</span>
                    <span className="block text-xs font-mono text-[color:var(--text-3)]">
                      Direct chat · click to open
                    </span>
                  </span>
                </span>
                <ArrowUpRight size={18} className="text-[color:var(--text-2)] group-hover:text-[color:var(--accent)]" />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-between border border-[color:var(--border)] p-5 hover:border-[color:var(--accent)] transition-colors group"
                data-testid="contact-email"
              >
                <span className="flex items-center gap-4">
                  <Mail size={20} className="text-[color:var(--accent)]" />
                  <span>
                    <span className="block text-white">Email</span>
                    <span className="block text-xs font-mono text-[color:var(--text-3)]">
                      {EMAIL}
                    </span>
                  </span>
                </span>
                <ArrowUpRight size={18} className="text-[color:var(--text-2)] group-hover:text-[color:var(--accent)]" />
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border border-[color:var(--border)] p-5 hover:border-[color:var(--accent)] transition-colors group"
                data-testid="contact-linkedin"
              >
                <span className="flex items-center gap-4">
                  <Linkedin size={20} className="text-[color:var(--accent)]" />
                  <span>
                    <span className="block text-white">LinkedIn</span>
                    <span className="block text-xs font-mono text-[color:var(--text-3)]">
                      /in/prashant-kumar-digital
                    </span>
                  </span>
                </span>
                <ArrowUpRight size={18} className="text-[color:var(--text-2)] group-hover:text-[color:var(--accent)]" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={submit}
            className="md:col-span-6 border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:p-10"
            data-testid="contact-form"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
                testid="contact-input-name"
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
                testid="contact-input-email"
              />
            </div>
            <Field
              label="Company (optional)"
              id="company"
              value={form.company}
              onChange={(v) => setForm({ ...form, company: v })}
              testid="contact-input-company"
            />
            <Field
              label="Message"
              id="message"
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              required
              textarea
              testid="contact-input-message"
            />

            <div className="flex items-center justify-between gap-4 mt-6">
              <span className="text-xs font-mono text-[color:var(--text-3)]">
                Your message goes straight to Prashant.
              </span>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:opacity-60"
                data-testid="contact-submit"
              >
                {status === "sending" && "Sending…"}
                {status === "sent" && (
                  <>
                    <Check size={16} /> Sent
                  </>
                )}
                {(status === "idle" || status === "error") && (
                  <>
                    Send Message <ArrowUpRight size={16} />
                  </>
                )}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-3 text-xs text-[color:var(--error,#EF4444)]" data-testid="contact-error">
                {err}
              </p>
            )}
            {status === "sent" && (
              <p className="mt-3 text-xs text-[color:var(--accent)]" data-testid="contact-success">
                Message received — I'll get back to you soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, value, onChange, type = "text", textarea, required, testid }) {
  const base =
    "w-full bg-[color:var(--bg)] border border-[color:var(--border)] focus:border-[color:var(--accent)] text-white placeholder-[color:var(--text-3)] px-4 py-3 outline-none transition-colors";
  return (
    <label className="block mt-4 first:mt-0" htmlFor={id}>
      <span className="overline block mb-2">{label}</span>
      {textarea ? (
        <textarea
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className={base}
          data-testid={testid}
        />
      ) : (
        <input
          id={id}
          required={required}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
          data-testid={testid}
        />
      )}
    </label>
  );
}
