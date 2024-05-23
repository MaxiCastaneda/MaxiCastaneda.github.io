// Seleccionamos el elemento a animar
const projectsSectionHeader = document.querySelector('.projects-section-header');

// Creamos una nueva instancia de Intersection Observer
const observer = new IntersectionObserver(entries => {
  // entries es un arreglo que contiene información sobre los elementos observados
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Si el elemento entra en el viewport, añadimos la clase 'visible' al elemento
      projectsSectionHeader.classList.add('visible');
    } else {
      // Si el elemento sale del viewport, removemos la clase 'visible' del elemento
      projectsSectionHeader.classList.remove('visible');
    }
  });
}, {
  // Opciones del Intersection Observer
  threshold: 0.5  // El porcentaje del elemento que debe estar visible para disparar la animación
});

// Observamos el elemento
observer.observe(projectsSectionHeader);

// Contact section

document.addEventListener('DOMContentLoaded', function () {
    const contactSection = document.querySelector('#contact');
  
    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const contactHeader = document.querySelector('.contact-section-header');
          contactHeader.classList.add('show');
        } else {
          const contactHeader = document.querySelector('.contact-section-header');
          contactHeader.classList.remove('show');
        }
      });
    }
  
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust as needed
    });
  
    observer.observe(contactSection);
  });

  // Welcome section
  
  document.addEventListener('DOMContentLoaded', function () {
    const welcomeSection = document.querySelector('#welcome-section');
  
    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rightSection = document.querySelector('.right');
          rightSection.classList.add('show');
        } else {
          const rightSection = document.querySelector('.right');
          rightSection.classList.remove('show');
        }
      });
    }
  
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust as needed
    });
  
    observer.observe(welcomeSection);
  });
  
