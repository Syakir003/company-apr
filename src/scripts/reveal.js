// Scroll reveal + staggered groups + number counters.
// Vanilla, no dependencies. Honors prefers-reduced-motion and degrades safely.

const STAGGER = 80;      // ms between siblings in a group
const COUNT_DURATION = 1200; // ms for number count-up

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// Parse a stat string into { prefix, target, suffix } — but only when it has
// exactly ONE run of digits (so "24/7" is left untouched, "15+" animates).
function parseCount(raw) {
  const groups = raw.match(/\d+/g);
  if (!groups || groups.length !== 1) return null;
  const numStr = groups[0];
  const i = raw.indexOf(numStr);
  return {
    prefix: raw.slice(0, i),
    target: parseInt(numStr, 10),
    suffix: raw.slice(i + numStr.length),
  };
}

function animateCount(el, parsed) {
  const start = performance.now();
  const { prefix, target, suffix } = parsed;
  function tick(now) {
    const t = Math.min(1, (now - start) / COUNT_DURATION);
    el.textContent = prefix + Math.round(target * easeOutCubic(t)) + suffix;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = prefix + target + suffix; // exact final value
  }
  requestAnimationFrame(tick);
}

function showAll() {
  document
    .querySelectorAll('[data-reveal], [data-reveal-group] > *')
    .forEach((el) => el.classList.add('is-in'));
}

export function initReveal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // No animation: make sure everything is visible with its final values.
  if (reduce || !('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  const reveal = (el, delay = 0) => {
    if (delay) el.style.transitionDelay = delay + 'ms';
    el.classList.add('is-in');
  };

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.hasAttribute('data-reveal-group')) {
          Array.from(el.children).forEach((child, i) => reveal(child, i * STAGGER));
        } else {
          reveal(el);
        }
        obs.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );
  document
    .querySelectorAll('[data-reveal], [data-reveal-group]')
    .forEach((el) => io.observe(el));

  // Counters: prime to start value now (no flash), then count up when visible.
  const counters = [];
  document.querySelectorAll('[data-count]').forEach((el) => {
    const parsed = parseCount(el.getAttribute('data-count'));
    if (!parsed) return; // e.g. "24/7" — leave the original text as-is
    el.textContent = parsed.prefix + 0 + parsed.suffix;
    counters.push([el, parsed]);
  });

  if (counters.length) {
    const cio = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const match = counters.find(([el]) => el === entry.target);
          if (match) animateCount(match[0], match[1]);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(([el]) => cio.observe(el));
  }
}
