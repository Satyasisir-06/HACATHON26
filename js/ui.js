// ============================================
// HACKWARTS HACKATHON - UI INTERACTIONS
// Mobile-optimized JavaScript for animations and UI
// ============================================

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    initializeHouses();
    initializeScrollAnimations();
    initializeNavigation();
    createParticles();
});

// ============================================
// HOUSES ACCORDION
// ============================================
function initializeHouses() {
    const housesContainer = document.getElementById('housesContainer');

    if (!housesContainer) return;

    // Clear container
    housesContainer.innerHTML = '';

    // Create house cards
    housesData.forEach((house, index) => {
        const houseCard = createHouseCard(house, index === 0);
        housesContainer.appendChild(houseCard);
    });
}

function createHouseCard(house, isFirst = false) {
    const card = document.createElement('div');
    card.className = 'house-card';
    card.style.setProperty('--house-color', house.color);
    // Removed: if (isFirst) card.classList.add('active');
    // All house cards now start closed

    // House Header
    const header = document.createElement('div');
    header.className = 'house-header';
    header.onclick = () => toggleHouse(card);

    header.innerHTML = `
        <img src="${house.icon}" alt="${house.name} icon" class="house-icon">
        <div class="house-info">
            <h3 class="house-name">${house.name}</h3>
            <p class="house-motto">${house.motto}</p>
        </div>
        <span class="house-toggle">▼</span>
    `;

    card.appendChild(header);

    // House Description
    const description = document.createElement('p');
    description.className = 'house-description';
    description.textContent = house.description;
    card.appendChild(description);

    // Projects Container
    const projectsContainer = document.createElement('div');
    projectsContainer.className = 'house-projects';

    const projectsList = document.createElement('div');
    projectsList.className = 'projects-list';

    // Add projects
    house.projects.forEach(project => {
        const projectItem = createProjectItem(project, house.color);
        projectsList.appendChild(projectItem);
    });

    projectsContainer.appendChild(projectsList);
    card.appendChild(projectsContainer);

    return card;
}

function createProjectItem(project, houseColor) {
    const item = document.createElement('div');
    item.className = 'project-item';
    item.style.setProperty('--house-color', houseColor);

    // Project Header
    const header = document.createElement('div');
    header.className = 'project-header';
    header.onclick = () => toggleProject(item);

    header.innerHTML = `
        <span class="project-code">${project.code}</span>
        <h4 class="project-title">${project.title}</h4>
        <p class="project-summary">${project.summary}</p>
        <span class="project-toggle">
            <span class="toggle-text">View Details</span>
            <span class="toggle-icon">▼</span>
        </span>
    `;

    item.appendChild(header);

    // Project Details
    const details = document.createElement('div');
    details.className = 'project-details';

    const keyPointsList = document.createElement('ul');
    keyPointsList.className = 'project-keypoints';

    project.keyPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        keyPointsList.appendChild(li);
    });

    details.appendChild(keyPointsList);
    item.appendChild(details);

    return item;
}

function toggleHouse(houseCard) {
    const allHouses = document.querySelectorAll('.house-card');

    // Close all other houses
    allHouses.forEach(card => {
        if (card !== houseCard) {
            card.classList.remove('active');
        }
    });

    // Toggle current house
    houseCard.classList.toggle('active');
}

function toggleProject(projectItem) {
    const isExpanded = projectItem.classList.contains('expanded');
    const toggleText = projectItem.querySelector('.toggle-text');
    const toggleIcon = projectItem.querySelector('.toggle-icon');

    projectItem.classList.toggle('expanded');

    if (isExpanded) {
        toggleText.textContent = 'View Details';
        toggleIcon.textContent = '▼';
    } else {
        toggleText.textContent = 'Hide Details';
        toggleIcon.textContent = '▲';
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initializeScrollAnimations() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// NAVIGATION
// ============================================
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        updateActiveNav();
    });

    // Smooth scroll on click
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === currentSection) {
            item.classList.add('active');
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const offset = 20;
    const targetPosition = section.offsetTop - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// ============================================
// MAGICAL PARTICLES
// ============================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 215, 0, 0.6);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: sparkle ${2 + Math.random() * 3}s infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// TOUCH RIPPLE EFFECT
// ============================================
document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('magical-ripple')) {
        const rippleElement = e.target.closest('.magical-ripple');
        if (rippleElement) {
            createRipple(e, rippleElement);
        }
    } else {
        createRipple(e, e.target);
    }
});

function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: rippleEffect 0.6s ease-out;
    `;

    // Add ripple animation
    const style = document.createElement('style');
    if (!document.getElementById('ripple-animation')) {
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Optimize scroll handler
window.addEventListener('scroll', throttle(() => {
    updateActiveNav();
}, 100));

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(script);
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add keyboard navigation for accordions
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('house-header')) {
            e.preventDefault();
            e.target.click();
        }
        if (e.target.classList.contains('project-header')) {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Add ARIA attributes
function enhanceAccessibility() {
    const houseHeaders = document.querySelectorAll('.house-header');
    houseHeaders.forEach(header => {
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.setAttribute('aria-expanded', 'false');
    });

    const projectHeaders = document.querySelectorAll('.project-header');
    projectHeaders.forEach(header => {
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.setAttribute('aria-expanded', 'false');
    });
}

// Initialize accessibility on load
window.addEventListener('load', enhanceAccessibility);

// ============================================
// EXPORT FUNCTIONS FOR FORM USE
// ============================================
window.scrollToSection = scrollToSection;
