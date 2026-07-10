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

  // --- 3D scroll parallax on hero/service photos ---
  const parallaxEls = [...document.querySelectorAll('[data-parallax]')];
  if (parallaxEls.length && !reduce) {
    const updateAll = () => {
      parallaxEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // Only apply when element is in or near viewport
        if (r.bottom < -200 || r.top > vh + 200) {
          el.style.transform = '';
          return;
        }
        const fromCenter = r.top + r.height / 2 - vh / 2;
        const shift = Math.max(-18, Math.min(18, -fromCenter * 0.05));
        const rot = Math.max(-4, Math.min(4, -fromCenter * 0.012));
        el.style.transform = `perspective(800px) translateY(${shift.toFixed(1)}px) rotateX(${rot.toFixed(2)}deg) scale(1.04)`;
        el.style.transition = 'transform 0.15s ease-out';
      });
    };
    const onScroll = () => { requestAnimationFrame(updateAll); };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateAll();
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
