// Accordion behavior for course modules: click a module header to open it,
// and clicking a sidebar link opens + scrolls to the matching module.
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.module-toggle');
  const navLinks = document.querySelectorAll('.module-nav a[href^="#"]');

  const setNavActive = (id) => {
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  };

  const openModule = (id, { scroll = false } = {}) => {
    const toggle = document.querySelector(`.module-toggle[data-target="${id}-panel"]`);
    const panel = document.getElementById(`${id}-panel`);
    if (!toggle || !panel) return;
    toggle.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    setNavActive(id);
    if (scroll) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const panel = document.getElementById(targetId);
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      panel.hidden = isOpen;
      if (!isOpen) {
        const moduleId = toggle.closest('.module').id;
        setNavActive(moduleId);
      }
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      openModule(id, { scroll: true });
    });
  });

  // Open module 1 by default so the page isn't empty on load.
  const first = document.querySelector('.module-toggle');
  if (first) {
    const firstModuleId = first.closest('.module').id;
    openModule(firstModuleId);
  }

  // If the URL already has a hash (e.g. shared link to a specific module), open it.
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    if (document.getElementById(id)) {
      openModule(id, { scroll: true });
    }
  }
});
