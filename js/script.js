// Fade-in sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

// Off-canvas menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});


//Highlight active section
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // Sticky nav color change (desktop)
  const nav = document.querySelector('nav');
  if (nav) {
    
    const stickyPoint = 50;
    if (window.scrollY > stickyPoint) {
      nav.classList.add('sticky-active');
    } else {
      nav.classList.remove('sticky-active');
    }
  }

  // Sticky mobile header and off-canvas color change
  const mobileHeader = document.querySelector('.mobile-header');
  const offCanvas = document.querySelector('.off-canvas');
  if (mobileHeader && offCanvas) {
    
    const stickyMobilePoint = 50;
    if (window.scrollY > stickyMobilePoint) {
      mobileHeader.classList.add('sticky-active-mobile');
      offCanvas.classList.add('sticky-active-mobile');
    } else {
      mobileHeader.classList.remove('sticky-active-mobile');
      offCanvas.classList.remove('sticky-active-mobile');
    }
  }
});