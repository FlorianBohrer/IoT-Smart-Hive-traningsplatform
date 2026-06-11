import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/scroll-progress.css';

/**
 * Vertikale Fortschrittsanzeige am rechten Seitenrand:
 * zeigt, wie weit man auf der Seite gescrollt hat.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(max > 240); // nur anzeigen, wenn die Seite nennenswert scrollt
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    // nach Routenwechsel erneut messen, sobald der Inhalt gerendert ist
    const timer = setTimeout(update, 300);

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-label="Lesefortschritt"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
    >
      <div className="scroll-progress-fill" style={{ height: `${progress * 100}%` }} />
    </div>
  );
}
