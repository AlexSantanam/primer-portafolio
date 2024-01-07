// JavaScript para el desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const sectionId = this.getAttribute('href');
  
      document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });