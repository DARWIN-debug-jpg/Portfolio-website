// ============================================
// MOBILE MENU TOGGLE
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// FORM SUBMISSION
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const inputs = this.querySelectorAll('input, textarea');
        const formData = new FormData(this);
        
        // Show success message
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #43e97b, #38f9d7)';
        
        // Reset form
        this.reset();
        
        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and stat boxes
document.querySelectorAll('.project-card, .stat, .info-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 15, 30, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(102, 126, 234, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 15, 30, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// ADD STAGGERED ANIMATION TO PROJECT CARDS
// ============================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// PRELOAD ANIMATIONS
// ============================================
window.addEventListener('load', () => {
    // Add fade-in effect to page on load
    document.body.style.animation = 'fadeInUp 0.5s ease-out';
});

// ============================================
// TYPING ANIMATION (Optional enhancement)
// ============================================
const typeWriter = (element, text, speed = 50) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Optional: Uncomment to enable typing animation on hero title
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 30);
// }

// ============================================
// PARALLAX EFFECT (Optional enhancement)
// ============================================
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const scrolled = window.pageYOffset;
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%cWelcome to My Portfolio! 👋', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cLooking for the source code? Check out my GitHub!', 'font-size: 14px; color: #a1a1a1;');
