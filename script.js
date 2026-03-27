(() => {
  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.14,
      rootMargin: '0px 0px -6% 0px'
    });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, { passive: false });
  });
})();
