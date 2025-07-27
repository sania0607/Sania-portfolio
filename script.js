// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

const backToTop = document.getElementById('back-to-top');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeScrollAnimations();
    initializeFormHandler();
    initializeTypingEffect();
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Update active navigation link
    updateActiveNavLink();
    
    // Animate elements on scroll
    animateOnScroll();
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// Update Active Navigation Link
function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Initialize Particles.js
function initializeParticles() {
    // Check if particles.js is loaded
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#6366f1", "#8b5cf6", "#06b6d4"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6366f1",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    } else {
        console.log('Particles.js not loaded, using fallback animation');
        // Add a class to show fallback animation
        document.getElementById('particles-js').classList.add('particles-fallback');
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    // Add animation classes to elements
    const homeContent = document.querySelector('.home-content .hero-text');
    const aboutCards = document.querySelectorAll('.about-card, .stat-item');
    const skillCategories = document.querySelectorAll('.skill-category');
    const projectCards = document.querySelectorAll('.project-card');
    const certCards = document.querySelectorAll('.cert-card');
    
    if (homeContent) homeContent.classList.add('animate-on-scroll', 'animate-left');
    
    aboutCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', 'animate-up');
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    skillCategories.forEach((category, index) => {
        category.classList.add('animate-on-scroll', 'animate-up');
        category.style.animationDelay = `${index * 0.2}s`;
    });
    
    projectCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', 'animate-up');
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    certCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', 'animate-up');
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Animate Elements on Scroll
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animated');
        }
    });
}

// Typing Effect for Hero Title
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    // Get the text content without HTML tags
    const textContent = heroTitle.textContent || heroTitle.innerText;
    
    // Keep the original HTML structure but make it invisible initially
    heroTitle.style.opacity = '0';
    
    // After a delay, show the title with a fade-in effect
    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s ease-in-out';
        heroTitle.style.opacity = '1';
    }, 500);
}

// Social Link Tracking (Optional Analytics)
function initializeSocialTracking() {
    const socialLinks = document.querySelectorAll('.social-link-card');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.classList.contains('linkedin') ? 'LinkedIn' :
                           this.classList.contains('github') ? 'GitHub' :
                           this.classList.contains('email') ? 'Email' :
                           this.classList.contains('twitter') ? 'Twitter' : 'Unknown';
            
            console.log(`Social link clicked: ${platform}`);
            // Add analytics tracking here if needed
        });
    });
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 500px;
        animation: slideDown 0.3s ease;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        font-size: 1rem;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(notificationStyles);

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.floating-card');
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Intersection Observer for Better Performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Preload Images
function preloadImages() {
    const images = [
        'https://pixabay.com/get/gf94f01747b231ce7d990cd6eb43ca991988756d3847d019f689a4c6c37f9ffd648aa3669aa6a631b01a38a35311263ec61b1a67c3abe6af926e95075d18235bd_1280.jpg',
        'https://pixabay.com/get/gb1db93127e010886a170d28b058f51aa909e9f804ad17c63bda8d740c6793afd0c8de8ae2d3cfc680ddad3bf4ee3044668bc8a0c81a0ebc78cd3888c11a8b02e_1280.jpg',
        'https://pixabay.com/get/ge8df4369a3c2ff2edbf8b1769cc6cc1f0db16c12f3b8dc3e58bdd3e73e6578189a6bf5f3f7380ebecde0d985098ee8f2de2f932e657b4303dc584474789bee87_1280.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Skills Animation Observer
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate skill level bars when they come into view
            if (entry.target.classList.contains('skill-highlight')) {
                const levelFill = entry.target.querySelector('.level-fill');
                if (levelFill) {
                    const targetWidth = levelFill.style.width;
                    levelFill.style.width = '0%';
                    setTimeout(() => {
                        levelFill.style.width = targetWidth;
                    }, 300);
                }
            }
        }
    });
}, { threshold: 0.3 });

// Observe skill highlights
document.addEventListener('DOMContentLoaded', function() {
    const skillHighlights = document.querySelectorAll('.skill-highlight');
    skillHighlights.forEach(skill => {
        skillsObserver.observe(skill);
    });
});

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(function() {
    updateActiveNavLink();
    animateOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Error Handling
window.addEventListener('error', function(e) {
    console.error('Script error:', e.error);
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}
