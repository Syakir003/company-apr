// Brand wall micro-interaction: each logo drifts gently toward the cursor
// (parallax) while hovering, composing with the CSS hover 3D pop. The .4s
// transform transition makes the drift trail the pointer for a fluid, "halus"
// feel — same language as the hero tilt. Pointer/desktop only; disabled for
// touch and prefers-reduced-motion. Sets only CSS vars, never the full
// transform, so it can't fight the data-reveal entrance.

const DRIFT = 8; // px — max logo offset toward the cursor

export function initBrandWall() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (reduce || !fine) return;

  document.querySelectorAll('.brand-wall .bw-cell').forEach((cell) => {
    const logo = cell.querySelector('.bw-logo');
    if (!logo) return;

    let raf = null;
    let x = 0;
    let y = 0;

    const apply = () => {
      raf = null;
      logo.style.setProperty('--px', x.toFixed(1) + 'px');
      logo.style.setProperty('--py', y.toFixed(1) + 'px');
    };

    cell.addEventListener('pointermove', (e) => {
      const r = cell.getBoundingClientRect();
      x = ((e.clientX - r.left) / r.width - 0.5) * DRIFT * 2;
      y = ((e.clientY - r.top) / r.height - 0.5) * DRIFT * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    });

    cell.addEventListener('pointerleave', () => {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      logo.style.setProperty('--px', '0px');
      logo.style.setProperty('--py', '0px');
    });
  });
}
