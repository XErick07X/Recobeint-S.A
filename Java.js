function mostrarAlerta() {
alert("Bienvenido a Recobeint — Soluciones tecnológicas!");
}



// Archivo: assets/js/services.js
// Simple comportamiento: animar secciones al hacer scroll y track de clicks en botones


document.addEventListener('DOMContentLoaded', function(){
// Fade-in on scroll
const targets = document.querySelectorAll('.fade-in');
const onScroll = () => {
targets.forEach(el => {
const rect = el.getBoundingClientRect();
if(rect.top < window.innerHeight - 80) el.classList.add('visible');
});
};
onScroll();
window.addEventListener('scroll', onScroll);


// Analytics simple (local) para botones - puedes integrar Google Analytics luego
document.querySelectorAll('.card-link, .btn-primary').forEach(btn => {
btn.addEventListener('click', (e) => {
const label = e.currentTarget.textContent.trim();
// ejemplo: enviar a consola, luego puedes enviar a tu servidor
console.log('CTA click:', label);
});
});
});