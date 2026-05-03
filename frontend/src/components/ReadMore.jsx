import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Show a short summary; reveal full content on click.
 * Keeps text DOM mounted so it stays SEO-readable.
 */
export default function ReadMore({ summary, full, className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <p className="leading-relaxed text-[color:var(--text-2)] text-sm md:text-base">
        {summary}
        {!open && full && (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1 text-[color:var(--accent)] hover:underline align-baseline ml-1"
              data-testid="read-more-toggle"
            >
              Read more <ChevronDown size={14} className="-mb-0.5" />
            </button>
          </>
        )}
      </p>
      {open && full && (
        <p className="mt-3 leading-relaxed text-[color:var(--text-2)] text-sm md:text-base">
          {full}{" "}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-1 text-[color:var(--accent)] hover:underline align-baseline ml-1"
            data-testid="read-less-toggle"
          >
            Show less
          </button>
        </p>
      )}
    </div>
  );
}
