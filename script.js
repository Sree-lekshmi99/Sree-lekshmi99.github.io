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

//Skills Section

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

//Project
document.getElementById('btn-project').addEventListener('click', function(e) {
  e.stopPropagation();
  
  if (window.innerWidth <= 768) {
    whyHireMeCard.classList.add('active');
    setTimeout(() => {
      document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
      });
    }, 300);
  } else {
    document.getElementById('projects').scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// Project Section

// Store project details
const projects = [
  {
    title: "CARBON EMISSION ANALYZER",
    tech: "Node.js, React, AWS, Kibana",
    date: "October 2024 - Jan 2025",
    description:`A machine learning system designed to detect cardiac anomalies in ECG data using LSTM autoencoders. It effectively differentiates between normal and abnormal heart patterns with high accuracy, providing reliable insights for early diagnosis and monitoring.

    Key Features:
    • Built with PyTorch's deep learning framework for efficient ECG data processing
    • Achieved 97% accuracy in anomaly detection using autoencoder architecture
    • Real-time monitoring system with automated threshold detection
    • Advanced visualization tools for cardiac pattern analysis
    • Comprehensive error analysis and performance metrics
    
    Applications:
    • Early detection of cardiac abnormalities
    • Continuous patient monitoring systems
    • Healthcare diagnostic support tool
    • Research and development in medical AI`,
    github: "https://github.com/user/carbon-emission-analyzer"
  },
  {
    title: "LSTM AUTOENCODER FOR ECG ANOMALY DETECTION",
    tech: "PyTorch, LSTM, Autoencoder, Matplotlib",
    date: "Feb 2024 - May 2024",
    description: "A machine learning system that detects cardiac anomalies in ECG data using LSTM autoencoders.",
    github: "https://github.com/user/ecg-anomaly-detection"
  },
  {
    title: "SAN FRANCISCO CRIME ANALYSIS & FORECASTING",
    tech: "ARIMA, ETS, ACF, PCF, spatial mapping",
    date: "Oct 2023 - Dec 2023",
    description: "A time series crime forecasting project analyzing 15 years of crime trends in San Francisco.",
    github: "https://github.com/user/crime-analysis"
  }
];

// Handle project modal
const modal = document.getElementById("projectModal");
const detailButtons = document.querySelectorAll(".view-details-btn");
const closeButton = document.querySelector(".close-modal");
const projectLinks = modal.querySelector(".project-links");
const gitButton = projectLinks.querySelector(".git-link");

detailButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const project = projects[index];
    if (project) {
      modal.querySelector(".project-title").textContent = project.title;
      modal.querySelector(".project-tech").textContent = `Tech Used: ${project.tech}`;
      modal.querySelector(".project-date").textContent = project.date;
      // modal.querySelector(".project-description").innerHTML = `<p>${project.description}</p>`;
      modal.querySelector(".project-description").innerHTML = `
      ${project.description
        .split('\n')
        .map(paragraph => {
          if (paragraph.includes(':')) {
            return `<h4 style="margin-top: 16px;">${paragraph}</h4>`;
          } else if (paragraph.startsWith('•')) {
            return `<li style="margin-bottom: 8px;">${paragraph.replace('• ', '')}</li>`;
          }
          return `<p style="margin-bottom: 12px;">${paragraph}</p>`;
        })
        .join('')}
    `;
      // modal.querySelector(".project-links").innerHTML = `<a href='${project.github}' target='_blank'>GitHub Repository</a>`;
      // gitButton.onclick = () => window.open(project.github, '_blank');

      gitButton.addEventListener("click", () => window.open(project.github, '_blank'));
      
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});




//contact me
document.getElementById('btn-contact-me').addEventListener('click', function(e) {
  e.stopPropagation();
  
  if (window.innerWidth <= 768) {
    whyHireMeCard.classList.add('active');
    setTimeout(() => {
      document.getElementById('contactme').scrollIntoView({
        behavior: 'smooth'
      });
    }, 300);
  } else {
    document.getElementById('contactme').scrollIntoView({
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