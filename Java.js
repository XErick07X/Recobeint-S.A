// ======================================================
// Archivo: js/accordion.js
// Funciones para acordeón, fade-in, tracking y contadores animados
// ======================================================

// Alerta inicial (opcional - puedes comentarla o borrarla si no la usas)
function mostrarAlerta() {
    alert("Bienvenido a Recobeint — Soluciones tecnológicas!");
}

document.addEventListener('DOMContentLoaded', function() {

    // --------------------------------------------------
    // 1️⃣ Animación fade-in al hacer scroll
    // --------------------------------------------------
    const fadeTargets = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
        fadeTargets.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.classList.add('visible');
            }
        });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);


    // --------------------------------------------------
    // 2️⃣ Tracking simple de clicks (analytics local)
    // --------------------------------------------------
    const trackButtons = document.querySelectorAll('.card-link, .btn-primary');

    trackButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            const label = e.currentTarget.textContent.trim();
            console.log('CTA click:', label);
        });
    });


    // --------------------------------------------------
    // 3️⃣ Acordeón (accordion)
    // --------------------------------------------------
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                // Opcional: cierra los demás paneles al abrir uno nuevo
                accordions.forEach(a => {
                    if (a.nextElementSibling) {
                        a.nextElementSibling.style.maxHeight = null;
                    }
                    a.classList.remove('active');
                });
                this.classList.add('active');
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });


    // --------------------------------------------------
    // 4️⃣ Contadores Animados con IntersectionObserver
    // --------------------------------------------------
    const counters = document.querySelectorAll('.counter');
    const speed = 60; // Controla la fluidez y velocidad de animación

    const animateCounters = () => {
        counters.forEach(counter => {
            const animate = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = Math.min(count + increment, target);
                    setTimeout(animate, 25);
                } else {
                    counter.innerText = target;
                }
            };
            animate();
        });
    };

    // Detecta la sección premium clara en blanco
    const statsSection = document.querySelector('.services-stats-premium');
    if (statsSection) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observerInstance.unobserve(entry.target); // Evita que se repita la animación
                }
            });
        }, { threshold: 0.3 });

        observer.observe(statsSection);
    }
});
