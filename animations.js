(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined';

  if (!hasGSAP || reduceMotion) return;

  const { gsap } = window;
  const hasScrollTrigger = typeof window.ScrollTrigger !== 'undefined';

  if (hasScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);
  }

  gsap.from('.hero-content h1', { y: 28, opacity: 0, duration: 0.7, ease: 'power2.out' });
  gsap.from('.hero-content .subtitle', { y: 24, opacity: 0, duration: 0.7, delay: 0.12, ease: 'power2.out' });
  gsap.from('.hero-content .btn-group .btn', {
    y: 18,
    opacity: 0,
    stagger: 0.12,
    duration: 0.6,
    delay: 0.25,
    ease: 'back.out(1.3)'
  });

  gsap.to('.badge', {
    y: -6,
    repeat: -1,
    yoyo: true,
    stagger: 0.2,
    duration: 1.4,
    ease: 'sine.inOut'
  });

  if (hasScrollTrigger) {
    gsap.utils.toArray('.card').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true
        }
      });
    });

    gsap.from('.gallery img', {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: '.gallery',
        start: 'top 82%',
        once: true
      }
    });
  }
})();
