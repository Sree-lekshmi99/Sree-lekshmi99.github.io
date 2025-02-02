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


document.getElementById('btn-skills').addEventListener('click', function(e) {
  e.stopPropagation();
  
  if (window.innerWidth <= 768) {
    whyHireMeCard.classList.add('active');
    setTimeout(() => {
      document.getElementById('skills').scrollIntoView({
        behavior: 'smooth'
      });
    }, 300);
  } else {
    document.getElementById('skills').scrollIntoView({
      behavior: 'smooth'
    });
  }
});


// Loader dismissal with guaranteed minimum 3 second display
const loader = document.querySelector('.loader');
const minimumDisplayTime = 3000; // 3 seconds
let loadStartTime = Date.now(); // Capture time when script runs

window.addEventListener('load', function() {
  const elapsed = Date.now() - loadStartTime;
  const remaining = Math.max(minimumDisplayTime - elapsed, 0);

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }, remaining);
});

document.addEventListener('DOMContentLoaded', () => {
  const progressContainers = document.querySelectorAll('.progress-container');
  
  progressContainers.forEach(container => {
      const progressValue = container.querySelector('.progress-value');
      const dataValue = parseInt(container.dataset.value);
      const radius = progressValue.getAttribute('r');
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (dataValue / 100 * circumference);

      progressValue.style.strokeDasharray = circumference;
      progressValue.style.strokeDashoffset = offset;
  });
});