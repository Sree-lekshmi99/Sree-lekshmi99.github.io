const roles = ["Data Analyst", "Software Engineer", "Machine Learning Engineer"]; // Add your roles here
const typewriterElement = document.getElementById("typewriter");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentRole = roles[roleIndex];

  if (!isDeleting && charIndex < currentRole.length) {
    // Typing
    typewriterElement.textContent += currentRole.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50); // Typing speed
  } else if (isDeleting && charIndex > 0) {
    // Deleting
    typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeWriter, 100); // Deleting speed
  } else {
    // Switch to next role
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeWriter, 1000); // Delay before next role
  }
}

typeWriter();
// Update script.js
const whyHireMeCard = document.getElementById('why-hire-me');

// Handle both hover and touch
whyHireMeCard.addEventListener('mouseenter', showButtons);
whyHireMeCard.addEventListener('mouseleave', hideButtons);
whyHireMeCard.addEventListener('click', function(e) {
  if (window.innerWidth <= 768) { // Mobile toggle
    if (this.classList.contains('active')) {
      hideButtons();
    } else {
      showButtons();
    }
  }
});

function showButtons() {
  whyHireMeCard.classList.add('active');
}

function hideButtons() {
  whyHireMeCard.classList.remove('active');
}




// script.js
// Update the education button handler in script.js
document.getElementById('btn-education').addEventListener('click', function(e) {
  e.stopPropagation(); // Prevent event bubbling to parent elements
  
  // If on mobile, ensure card stays open during scroll
  if (window.innerWidth <= 768) {
    whyHireMeCard.classList.add('active');
    setTimeout(() => {
      document.getElementById('experience').scrollIntoView({
        behavior: 'smooth'
      });
    }, 300); // Match the transition duration
  } else {
    document.getElementById('experience').scrollIntoView({
      behavior: 'smooth'
    });
  }
});
// Update experience animation
$(document).ready(function() {
  $(window).on('scroll', function() {
    $('.experience-content').each(function() {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('visible');
      }
    });
  }).scroll();
});



// Loader dismissal with minimum 3 second display
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  const minimumDisplayTime = 3000; // 3 seconds
  
  // Get current time
  const loadStartTime = Date.now();

  // Calculate remaining time to reach 3 seconds
  const elapsed = Date.now() - loadStartTime;
  const remaining = Math.max(minimumDisplayTime - elapsed, 0);

  setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 1000); // Match CSS transition time
  }, remaining);
});