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




// About 
document.getElementById('btn-about').addEventListener('click', function(e) {
  e.stopPropagation();
  
  if (window.innerWidth <= 768) {
    whyHireMeCard.classList.add('active');
    setTimeout(() => {
      document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
      });
    }, 300);
  } else {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
    });
  }
});

//Edu/Exp
document.getElementById('btn-edu-exp').addEventListener('click', function(e) {
  e.stopPropagation();
  
  if (window.innerWidth <= 768) {
    whyHireMeCard.classList.add('active');
    setTimeout(() => {
      document.getElementById('edu-exp').scrollIntoView({
        behavior: 'smooth'
      });
    }, 300);
  } else {
    document.getElementById('edu-exp').scrollIntoView({
      behavior: 'smooth'
    });
  }
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