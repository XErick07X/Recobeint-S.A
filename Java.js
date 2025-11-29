// ======================================================
// Archivo: js/accordion.js
// Funciones para acordeón, fade-in y tracking de botones
// ======================================================

// Alerta inicial (opcional)
function mostrarAlerta() {
    alert("Bienvenido a Recobeint — Soluciones tecnológicas!");
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // -------------------------
    // 1️⃣ Animación fade-in al hacer scroll
    // -------------------------
    const fadeTargets = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
        fadeTargets.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.classList.add('visible');
            }
        });
    };

    // Ejecutar inicialmente y al hacer scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);


    // -------------------------
    // 2️⃣ Tracking simple de clicks (analytics local)
    // -------------------------
    const trackButtons = document.querySelectorAll('.card-link, .btn-primary');

    trackButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            const label = e.currentTarget.textContent.trim();
            console.log('CTA click:', label);
            // Aquí podrías enviar info a tu servidor o Google Analytics
        });
    });


    // -------------------------
    // 3️⃣ Acordeón (accordion)
    // -------------------------
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Alterna clase activa
            this.classList.toggle('active');

            // Selecciona el panel siguiente
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                // Si estaba abierto, cerrar
                panel.style.maxHeight = null;
            } else {
                // Opcional: cerrar todos los paneles antes de abrir
                accordions.forEach(a => {
                    a.nextElementSibling.style.maxHeight = null;
                    a.classList.remove('active');
                });
                // Abrir el panel seleccionado
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

});
