// Hero crossfade slideshow over the field photos that aren't in the gallery.
// Auto-advances with a slow fade (CSS handles the crossfade + ken-burns);
// pauses while the tab is hidden. Disabled for prefers-reduced-motion — the
// first slide simply stays shown. Vanilla, no dependencies.

const INTERVAL = 4500; // ms each slide stays before crossfading to the next

export function initHeroSlideshow() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const wrap = document.querySelector('[data-hero-slides]');
  if (!wrap) return;
  const slides = Array.from(wrap.querySelectorAll('img'));
  if (slides.length < 2) return;

  let i = 0;
  let timer = null;

  const advance = () => {
    slides[i].classList.remove('is-active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('is-active');
  };
  const start = () => { if (!timer) timer = setInterval(advance, INTERVAL); };
  const stop = () => { if (timer) { clearInterval(timer); timer = null; } };

  // Be polite: don't cycle in the background.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });

  start();
}
