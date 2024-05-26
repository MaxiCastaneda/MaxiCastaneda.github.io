document.addEventListener('DOMContentLoaded', function () {
  const sections = [
    { trigger: '.projects-section-header', target: '.projects-section-header', className: 'visible' },
    { trigger: '#contact', target: '.contact-section-header', className: 'show' },
    { trigger: '#welcome-section', target: '.right', className: 'show' }
  ];

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      const targetElement = document.querySelector(entry.target.dataset.target);
      const className = entry.target.dataset.className;
      if (entry.isIntersecting) {
        targetElement.classList.add(className);
      } else {
        targetElement.classList.remove(className);
      }
    });
  };

  sections.forEach(section => {
    const target = document.querySelector(section.trigger);
    if (target) {
      target.dataset.target = section.target;
      target.dataset.className = section.className;
      const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
      observer.observe(target);
    }
  });
});

// Selectores de elementos
const navToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const nav = document.querySelector('.nav');

// Event listener para el toggle del menú
navToggle.addEventListener('click', () => {
  // Toggle de la clase "active" en la lista de navegación y en la barra de navegación
  navList.classList.toggle('active');
  nav.classList.toggle('active');
});

// Cerrar el menú cuando se hace clic en un enlace
navList.addEventListener('click', () => {
  navList.classList.remove('active');
  nav.classList.remove('active');
});
