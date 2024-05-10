// let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let mountains_front = document.getElementById('mountains_front')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let top_part = document.getElementById('top_start')


window.addEventListener('scroll', function(){
    let value = window.scrollY
     top_start.style.top = value * 0.5 + 'px';
     moon.style.top = value * 1.5 + 'px';
     mountains_behind.style.top = value * 0.5 + 'px';
     mountains_front.style.top = value * 0 + 'px';
     text.style.marginRight = value * 4 + 'px'
     text.style.marginTop = value * 1.5 + 'px'
     btn.style.marginTop = value * 1.5 + 'px'

    let moveRate = value * 0.3; // Increase or adjust this rate to change the speed

    

    // Apply horizontal movement to the "About" section elements
    const aboutElements = [
        document.getElementById('profile-img'),
        document.getElementById('about-name'),
        document.getElementById('about-profession'),
        document.getElementById('about-text'),
        document.getElementById('about-social'),
        document.getElementById('about-btn')
    ];

    aboutElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.style.opacity = 1;
            element.style.transform = `translateX(${moveRate}px) scale(1)`; // Move right as you scroll
        }
    });

    animateProgressBars();
   

})

const roles = ['Data Analyst', 'Machine Learning Engineer', 'Software Engineer'];
let currentRole = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const roleElement = document.getElementById('role');
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 1000; // Time to wait before starting to type next role

function typeRole() {
    if (isDeleting) {
        // Remove char
        currentText = roles[currentRole].substring(0, currentText.length - 1);
    } else {
        // Add char
        currentText = roles[currentRole].substring(0, currentText.length + 1);
    }

    roleElement.textContent = currentText;

    if (!isDeleting && currentText === roles[currentRole]) {
        // If the full text is displayed and not deleting, start deleting after a pause
        setTimeout(() => { isDeleting = true; }, delayBetweenRoles);
    } else if (isDeleting && currentText === '') {
        // If all text is deleted, move to the next role
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
        setTimeout(typeRole, typingSpeed); // Wait before starting to type next role
        return;
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeRole, delay);
}

// Start the typing effect on load
document.addEventListener('DOMContentLoaded', typeRole);








window.addEventListener('scroll', function() {
    document.querySelectorAll('.progress-bar').forEach(function(bar) {
        let max = bar.style.width;
        if (bar.getBoundingClientRect().top < window.innerHeight) {
            bar.style.width = 0; // Reset to 0
            setTimeout(function() {
                bar.style.width = max; // Animate to max width
            }, 100);
        }
    });
});

function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        if (isVisible(bar)) {
            const max = bar.getAttribute('data-max');  // Retrieve the target width from data attribute
            bar.style.width = max;  // Animate to the specified width
        }
    });
}

function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Chart.js initialization
var ctx = document.getElementById('doughnutChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Data Analyst', 'Machine Learning Engineer', 'Software Engineer'],
        datasets: [{
            data: [40, 40, 40],
            backgroundColor: ['#92608A', '#F9B085', '#736E9A']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location = this.getAttribute('data-href'); // Ensure each card has a data-href attribute
    });
});

let container = document.querySelector('.card-container');

function next() {
    container.scrollLeft += 300; // Adjust the value to match the width of your cards plus the gap
}

function previous() {
    container.scrollLeft -= 300; // Adjust the value to match the width of your cards plus the gap
}