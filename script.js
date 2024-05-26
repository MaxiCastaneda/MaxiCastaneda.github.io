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

  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  sections.forEach(section => {
    const target = document.querySelector(section.trigger);
    if (target) {
      target.dataset.target = section.target;
      target.dataset.className = section.className;
      observer.observe(target);
    }
  });

  // Selectores de elementos para la navegación
  const navToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  const nav = document.querySelector('.nav');

  // Event listener para el toggle del menú
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    nav.classList.toggle('active');
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !isExpanded);
  });

  // Cerrar el menú cuando se hace clic en un enlace
  navList.addEventListener('click', () => {
    navList.classList.remove('active');
    nav.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

function toggleImage() {
  const fotoPerfil = document.querySelector('.foto-perfil');
  const eyeButton = document.querySelector('.eye-button i');
  if (fotoPerfil.style.filter === 'brightness(100%)') {
    fotoPerfil.style.filter = 'brightness(10%)';
    eyeButton.classList.remove('fa-eye-slash');
    eyeButton.classList.add('fa-eye');
  } else {
    fotoPerfil.style.filter = 'brightness(100%)';
    eyeButton.classList.remove('fa-eye');
    eyeButton.classList.add('fa-eye-slash');
  }
}
