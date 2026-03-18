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

    // Animation au scroll (Intersection Observer)
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.action-card, .team-card, .about-text, .about-stats, .contact-form, .contact-info').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}
