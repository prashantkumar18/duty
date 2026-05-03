import { useEffect, useState } from "react";

export default function CursorDot() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const t = e.target;
      if (t.closest("a, button, input, textarea, [data-cursor='hover']")) {
        setExpand(true);
      } else {
        setExpand(false);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      className={`cursor-dot ${expand ? "expand" : ""}`}
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)` }}
      aria-hidden
    />
  );
}
