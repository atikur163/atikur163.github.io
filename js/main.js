// Scroll-spy: highlights the active module link in the sidebar as you scroll.
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.module-nav a[href^="#"]');
  const modules = document.querySelectorAll('.module[id]');
  if (!links.length || !modules.length) return;

  const setActive = (id) => {
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  modules.forEach(m => observer.observe(m));
});
