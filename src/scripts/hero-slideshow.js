// Hero crossfade slideshow over the field photos that aren't in the gallery.
// Auto-advances with a slow fade (CSS handles the crossfade + ken-burns);
// pauses while the tab is hidden. Disabled for prefers-reduced-motion — the
// first slide simply stays shown. Vanilla, no dependencies.

const INTERVAL = 4500; // ms each slide stays before crossfading to the next

// Slides beyond the first carry no src (see Hero.astro) so the browser
// fetches nothing for them. Once the page has finished loading, hydrate them
// one at a time in idle time so they don't compete with the LCP image.
function hydrateLazySlides(wrap) {
  const pending = Array.from(wrap.querySelectorAll('[data-lazy-slide]'));
  const schedule = (fn) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 1000 }) : setTimeout(fn, 300));
  const hydrateNext = () => {
    const img = pending.shift();
    if (!img) return;
    if (img.dataset.fallback) img.onerror = () => { img.onerror = null; img.src = img.dataset.fallback; };
    img.src = img.dataset.src;
    img.removeAttribute('data-lazy-slide');
    schedule(hydrateNext);
  };
  schedule(hydrateNext);
}

export function initHeroSlideshow() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const wrap = document.querySelector('[data-hero-slides]');
  if (!wrap) return;

  if (document.readyState === 'complete') hydrateLazySlides(wrap);
  else window.addEventListener('load', () => hydrateLazySlides(wrap), { once: true });

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
