// Mobile menu toggle
function toggleMenu() {
    const navegacion = document.querySelector('.navegacion');
    const hamburger = document.querySelector('.hamburger');

    navegacion.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            const navegacion = document.querySelector('.navegacion');
            const hamburger = document.querySelector('.hamburger');
            navegacion.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const socialBar = document.querySelector('.social-bar');

    if (window.scrollY > 50) {
        header.style.top = '0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        socialBar.style.display = 'none';
    } else {
        header.style.top = '30px';
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
        socialBar.style.display = 'block';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe benefit cards for animation
document.querySelectorAll('.benefit-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;

    // Simple validation
    if (email && email.includes('@')) {
        alert('¡Gracias por suscribirte! Te mantendremos informado sobre las novedades de FarmGuard.');
        this.querySelector('input[type="email"]').value = '';
    } else {
        alert('Por favor, ingresa un email válido.');
    }
});

// CTA button actions
document.querySelectorAll('.cta-button, .btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        if (this.textContent.includes('Comenzar') || this.textContent.includes('Ver Planes')) {
            document.querySelector('#plans').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Plan selection
document.querySelectorAll('.plan-button').forEach(button => {
    button.addEventListener('click', function () {
        const planName = this.closest('.plan-card').querySelector('.plan-name').textContent;
        alert(`Has seleccionado el plan ${planName}. ¡Pronto nos pondremos en contacto contigo!`);
    });
});

// Social media links (placeholder functionality)
document.querySelectorAll('.social-icons i').forEach(icon => {
    icon.addEventListener('click', function () {
        const platform = this.className.split('-').pop();
        alert(`Redirigiendo a ${platform}... (funcionalidad de demostración)`);
    });
});