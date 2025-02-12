// Add event listener to nav links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const sectionId = link.getAttribute('href');
          const section = document.querySelector(sectionId);
          section.scrollIntoView({ behavior: 'smooth' });
      });
  });
});

// Add event listener to project cards
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card) => {
      card.addEventListener('click', () => {
          card.classList.toggle('active');
      });
  });
});