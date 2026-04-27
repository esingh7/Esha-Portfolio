/* ============================================================
   MAIN.JS — Portfolio interactions
   You generally don't need to edit this file.
   ============================================================ */

/* ── Active nav link on scroll ───────────────────────────── */
(function () {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const nav      = document.getElementById('nav');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.tab === entry.target.id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));

  /* Scrolled state for nav border */
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();


/* ── Scroll reveal ────────────────────────────────────────── */
(function () {
  const revealTargets = [
    '.skill-card',
    '.project-card',
    '.timeline-item',
    '.edu-item',
    '.hero-stats',
  ];

  const elements = document.querySelectorAll(revealTargets.join(', '));
  elements.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
})();


/* ── Staggered reveal for grids ───────────────────────────── */
(function () {
  const grids = document.querySelectorAll('.skills-grid, .projects-grid');
  grids.forEach((grid) => {
    const children = grid.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`;
    });
  });
})();
