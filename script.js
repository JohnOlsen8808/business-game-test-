const navToggle = document.querySelector('.nav-toggle');
const primaryMenu = document.querySelector('#primary-menu');
const yearEl = document.querySelector('#year');

if (navToggle && primaryMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    primaryMenu.setAttribute('aria-expanded', !expanded);
  });

  primaryMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      primaryMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');

    contactForm.reset();

    const confirmation = document.createElement('div');
    confirmation.className = 'form-confirmation';
    confirmation.setAttribute('role', 'status');
    confirmation.setAttribute('tabindex', '-1');
    confirmation.textContent = `Thanks ${name || 'there'}! We will be in touch within one business day.`;

    const existing = contactForm.querySelector('.form-confirmation');
    if (existing) {
      existing.remove();
    }

    contactForm.appendChild(confirmation);
    confirmation.focus?.();
  });
}
