// Attend que toutes les sections HTML soient chargées
document.addEventListener('sections-loaded', init);

function init() {
    // Navigation sticky
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Menu mobile
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Fermer le menu au clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggle.classList.remove('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = navbar.offsetHeight;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // Formulaire de contact → mailto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const sujet = document.getElementById('sujet');
        const sujetText = sujet.options[sujet.selectedIndex].text;
        const message = document.getElementById('message').value;

        const subject = encodeURIComponent(`[Site Web] ${sujetText} - ${prenom} ${nom}`);
        const body = encodeURIComponent(
            `Bonjour,\n\n${message}\n\n---\nEnvoyé par : ${prenom} ${nom}\nE-mail : ${email}\nSujet : ${sujetText}`
        );

        window.location.href = `mailto:lesparentsdepennac@gmail.com?subject=${subject}&body=${body}`;
    });

    // Carousel actions passées
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const btnPrev = carousel.querySelector('.carousel-btn-prev');
        const btnNext = carousel.querySelector('.carousel-btn-next');
        let currentIndex = 0;
        let animating = false;

        // Initialiser : seule la première slide est visible
        slides[0].classList.add('active');

        // Créer les dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        function goToSlide(index, reverse) {
            if (animating || index === currentIndex) return;
            animating = true;

            const oldSlide = slides[currentIndex];
            const newSlide = slides[index];

            // Appliquer les classes d'animation
            oldSlide.classList.remove('active');
            oldSlide.classList.add('slide-exit');
            newSlide.classList.add('slide-enter');
            if (reverse) {
                oldSlide.classList.add('reverse');
                newSlide.classList.add('reverse');
            }

            // Mettre à jour les dots
            dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });

            // Nettoyer après l'animation
            newSlide.addEventListener('animationend', function handler() {
                newSlide.removeEventListener('animationend', handler);
                oldSlide.classList.remove('slide-exit', 'reverse');
                newSlide.classList.remove('slide-enter', 'reverse');
                newSlide.classList.add('active');
                currentIndex = index;
                animating = false;
            });
        }

        btnNext.addEventListener('click', () => {
            const next = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
            goToSlide(next, false);
        });

        btnPrev.addEventListener('click', () => {
            const prev = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
            goToSlide(prev, true);
        });

        // Swipe tactile
        let touchStartX = 0;
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });
        carousel.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? btnNext.click() : btnPrev.click();
            }
        });
    }

    // Animation au scroll (Intersection Observer)
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.action-card, .team-card, .about-text, .about-stats, .contact-form, .contact-info, .news-card, .partner-card, .carousel, .supplies-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}
