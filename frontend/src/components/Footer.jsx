import { Link } from "react-router-dom";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-14" data-testid="site-footer">
      <div className="container-x grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <Link to="/" className="font-display text-2xl">
            Prashant<span className="text-[color:var(--accent)]">.</span>
          </Link>
          <p className="text-sm text-[color:var(--text-2)] mt-4 max-w-sm">
            Building digital growth across IT, IT-OT and smart industry.
            Based in Singapore. Operating across APAC.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="overline mb-3">Navigate</p>
          <ul className="space-y-2 text-sm text-[color:var(--text-2)]">
            <li><a href="/#work" className="hover:text-white">What I Do</a></li>
            <li><a href="/#timeline" className="hover:text-white">Timeline</a></li>
            <li><a href="/#sectors" className="hover:text-white">Sectors</a></li>
            <li><a href="/#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="overline mb-3">Explore</p>
          <ul className="space-y-2 text-sm text-[color:var(--text-2)]">
            <li><Link to="/videos" className="hover:text-white">Videos</Link></li>
            <li><Link to="/articles" className="hover:text-white">Articles</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="overline mb-3">Connect</p>
          <div className="flex gap-3">
            <a href="https://wa.me/6593914327" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 border border-[color:var(--border)] hover:border-[color:var(--accent)]" data-testid="footer-whatsapp">
              <MessageCircle size={16} />
            </a>
            <a href="mailto:prashantkumar18@gmail.com" aria-label="Email" className="p-2 border border-[color:var(--border)] hover:border-[color:var(--accent)]" data-testid="footer-email">
              <Mail size={16} />
            </a>
            <a href="https://www.linkedin.com/in/prashant-kumar-digital/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 border border-[color:var(--border)] hover:border-[color:var(--accent)]" data-testid="footer-linkedin">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="container-x mt-10 pt-6 border-t border-[color:var(--border)] flex flex-col md:flex-row justify-between gap-2 text-xs font-mono text-[color:var(--text-3)]">
        <span>© {new Date().getFullYear()} Prashant Kumar · dutyee.com</span>
        <span>Crafted in Singapore · Interactive edition</span>
      </div>
    </footer>
  );
}
