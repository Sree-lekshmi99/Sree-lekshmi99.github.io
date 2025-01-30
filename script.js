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
    setTimeout(typeWriter, 100); // Typing speed
  } else if (isDeleting && charIndex > 0) {
    // Deleting
    typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeWriter, 50); // Deleting speed
  } else {
    // Switch to next role
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeWriter, 1000); // Delay before next role
  }
}

typeWriter();
// Update script.js
const educationButton = document.getElementById('btn-education');
const homeContent = document.querySelector('.home-content');
const educationContent = document.querySelector('.education-content');
const backButton = document.querySelector('.back-btn');

educationButton.addEventListener('click', () => {
  homeContent.style.display = 'none';
  educationContent.style.display = 'block';
});

backButton.addEventListener('click', () => {
  homeContent.style.display = 'block';
  educationContent.style.display = 'none';
});


