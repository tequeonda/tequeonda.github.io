// Código JavaScript para la página de Teque Onda


// Animación al hacer scroll para que las secciones aparezcan suavemente
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.menu, .nosotros, .sucursales');
    const triggerBottom = window.innerHeight * 0.8;
    
    
    elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
    }
    });
    });
    
    
    // Botón de WhatsApp flotante: efecto de sonido o animación al hacer clic
    const whatsappBtn = document.querySelector('.whatsapp');
    if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
    whatsappBtn.style.transform = 'scale(1.2)';
    setTimeout(() => whatsappBtn.style.transform = 'scale(1)', 200);
    });
    }
    
    
    // Mensaje de bienvenida en consola (para los curiosos)
    console.log('%cBienvenido a Teque Onda 🌮', 'color: #009640; font-size: 16px; font-weight: bold;');