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

function toggleImage() {
  const fotoPerfil = document.querySelector('.foto-perfil');
  const eyeButton = document.querySelector('.eye-button i');
  const isBright = fotoPerfil.style.filter === 'brightness(100%)';
  
  fotoPerfil.style.filter = isBright ? 'brightness(10%)' : 'brightness(100%)';
  eyeButton.classList.toggle('fa-eye', !isBright);
  eyeButton.classList.toggle('fa-eye-slash', isBright);
}
