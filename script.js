//Efects//

document.addEventListener('DOMContentLoaded', function () {
  const sections = [
    { trigger: '.projects-section-header', target: '.projects-section-header', className: 'visible' },
    { trigger: '#contact', target: '.contact-section-header', className: 'show' },
    { trigger: '#welcome-section', target: '.right', className: 'show' }
  ];

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      const targetElement = document.querySelector(observer.target);
      if (entry.isIntersecting) {
        targetElement.classList.add(observer.className);
      } else {
        targetElement.classList.remove(observer.className);
      }
    });
  };

  sections.forEach(section => {
    const target = document.querySelector(section.trigger);
    if (target) {
      const observer = new IntersectionObserver((entries) => handleIntersection(entries, observer), {
        threshold: 0.5
      });
      observer.target = section.target;
      observer.className = section.className;
      observer.observe(target);
    }
  });
});

//Funcion ojo//

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

