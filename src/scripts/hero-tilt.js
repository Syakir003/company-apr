// Hero 3D tilt (mouse), depth parallax for overlay chips, subtle scroll
// parallax on the hero photo, and a faint magnetic effect on CTA buttons.
// Vanilla, no dependencies. All effects are pointer/desktop only and are
// disabled for touch devices and prefers-reduced-motion.

const TILT_MAX = 6;     // deg — max rotation of the hero card
const DEPTH_MAX = 10;   // px  — how far overlay chips float against the tilt
const MAGNET = 6;       // px  — max pull of a magnetic button
const PARALLAX = 0.05;  // hero photo scroll factor (0 = none)

export function initHeroTilt() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // --- Hero card 3D tilt + chip depth (desktop pointer only) ---
  const card = document.querySelector('[data-tilt]');
  if (card && fine && !reduce) {
    const chips = card.querySelectorAll('[data-depth]');
    let raf = null;
    let rx = 0;
    let ry = 0;

    const apply = () => {
      raf = null;
      card.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      // Chips drift opposite the tilt to fake depth (clipped within the card).
      chips.forEach((chip) => {
        chip.style.transform = `translate(${(ry / TILT_MAX) * DEPTH_MAX}px, ${(-rx / TILT_MAX) * DEPTH_MAX}px)`;
      });
    };

    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;  // -0.5..0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      ry = px * TILT_MAX * 2;
      rx = -py * TILT_MAX * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    });

    card.addEventListener('pointerleave', () => {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      card.style.transform = '';
      chips.forEach((chip) => { chip.style.transform = ''; });
    });
  }

  // --- Subtle scroll parallax on the hero photo ---
  const photo = document.querySelector('[data-parallax]');
  if (photo && !reduce && PARALLAX > 0) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = photo.getBoundingClientRect();
      const fromCenter = r.top + r.height / 2 - window.innerHeight / 2;
      const shift = Math.max(-12, Math.min(12, -fromCenter * PARALLAX));
      photo.style.transform = `translateY(${shift.toFixed(1)}px) scale(1.06)`;
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
  }

  // --- Faint magnetic CTA (desktop pointer only) ---
  if (fine && !reduce) {
    document.querySelectorAll('[data-magnetic]').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        btn.style.transform = `translate(${(x * MAGNET).toFixed(1)}px, ${(y * MAGNET).toFixed(1)}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }
}
