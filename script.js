/* ==============================================
   TEQUE ONDA — script.js
   1. Base de datos del menú
   2. Lógica del panel interactivo
   3. Navegación mobile (hamburger)
   4. Animación de secciones al scroll
   5. Efecto WhatsApp
   6. Consola
============================================== */


/* =====================
   1. BASE DE DATOS DEL MENÚ
   Agregá, editá o quitá productos acá.
   ===================== */
const menuData = {

    'tequeños': {
        titulo: 'Tequeños',
        items: [
            { nombre: 'Tequeños de Queso Clásico',   img: 'img/t1.jpg', descripcion: 'El original. Masa crocante rellena de queso venezolano derretido. ¡El más pedido!' },
            { nombre: 'Tequeños de Jamon Ahumado & Queso', img: 'img/tj.jpg', descripcion: 'La combinación perfecta: jamón ahumado & rico queso venezolano' },
            { nombre: 'Tequeños Fiesteros (25u y 50u)', img: 'img/25tf.jpg',     descripcion: 'Mini tequeños de queso de aprox. 6cm. Perfectos para compartir en cualquier reunión.' },
            { nombre: 'Tequeños Platano y Queso',      img: 'img/ty.jpg', descripcion: 'La evolución del tequeño con plátano maduro y queso auténtico. Tradición venezolana lista para compartir.' },
            
        ]
    },

    'empanadas': {
        titulo: 'Empanadas',
        items: [
            { nombre: 'Empanada de Carne Mechada',    img: 'img/mme.jpg', descripcion: 'Harina de maíz venezolana, relleno con carne de res de alta calidad desmenuzada, un relleno jugoso y con sazón venezolano que deleitará tu paladar.' },
            { nombre: 'Empanada de Carne Molida',    img: 'img/mmo.jpg', descripcion: 'Harina de maíz venezolana, relleno con carne de res de alta calidad picada, un relleno jugoso y con sazón venezolano que deleitará tu paladar.' },
            { nombre: 'Empanada de Pollo',    img: 'img/mpo.jpg', descripcion: 'Pollo desmenuzado con sofrito venezolano dentro de una masa crocante.' },
            { nombre: 'Empanada de Queso',    img: 'img/mq.jpg', descripcion: 'Simple y deliciosa. Queso venezolano derretido en masa de maíz dorada.' },
            { nombre: 'Empanada de Jamón Ahumado & Queso',    img: 'img/mjq.jpg', descripcion: 'La combinación perfecta: jamón ahumado & rico queso venezolano.' },
            { nombre: 'Empanada de Poroto & Queso', img: 'img/mdm.jpg', descripcion: 'Rellena de frijoles negros guisados al estilo venezolano. Opción vegetariana.' },
            { nombre: 'Empanada Pabellón',       img: 'img/epa.jpg', descripcion: 'Rellena de Carne Mechada, Porotos Negros, Platano Maduro y Queso Llanero Venezolano. 250 gr. de puro Sabor Venezolano' },
        ]
    },

    'pastelitos': {
        titulo: 'Pastelitos',
        items: [
            { nombre: 'Pastelito de Queso',         img: 'img/pq.jpg', descripcion: 'Masa de trigo suave rellena de queso blanco venezolano. Clásico irresistible.' },
            { nombre: 'Pastelito de Carne Mechada', img: 'img/pme.jpg', descripcion: 'El Favorito de todos. Relleno con carne de res de alta calidad desmechada, un relleno jugoso y con sazón venezolano que deleitará tu paladar.' },
            { nombre: 'Pastelito de Carne Molida', img: 'img/pmo.jpg', descripcion: 'Pastelito carne molida (selección de carnes) con receta de la nona venezolana.' },
            { nombre: 'Pastelito de Pollo',         img: 'img/ppo.jpg', descripcion: 'Pollo desmenuzado con sofrito venezolano.' },
            { nombre: 'Pastelito de Pizza', img: 'img/ppz.jpg', descripcion: 'Rico pastelito de pizza, hecho con queso mozarrela y salsa de la nona!' },
            { nombre: 'Pastelito de Papa & Queso', img: 'img/ppa.jpg', descripcion: 'Rico pastelito relleno de papa y queso venezolano' },
            { nombre: 'Pastelito de Jamon Ahumado & Queso', img: 'img/pjq.jpg', descripcion: 'La combinación perfecta: jamón ahumado & rico queso venezolano' },
        ]
    },

    'congelados': {
        titulo: 'Congelados',
        items: [
            { nombre: 'Pack Tequeños Congelados x12',  img: 'img/congelados.jpg', descripcion: 'Llévalos y cocinalos en casa al horno, en la AirFryer o fritos. Listos en minutos.' },
            { nombre: 'Pack Pastelitos Congelados con Queso x6', img: 'img/pcmix1.jpg', descripcion: 'Pastelitos congelados surtidos de queso, papa & queso, pizza y jamon ahumado & queso. Para tener siempre a mano. Horneá cuando quieras.' },
            { nombre: 'Pack Pastelitos Congelados Proteinas X6', img: 'img/pcmix2.jpg', descripcion: 'Pastelitos Congelados surtidos de carne mechada, carne molida y pollo. Para tener siempre a mano. Horneá cuando quieras.' },
        ]
    },

    'promos': {
        titulo: 'Promos del Mes',
        items: [
            { nombre: 'Promo Familiar',    img: 'img/pfa.jpg',          descripcion: '6 Tequeños, 6 Empanadas, 6 Pasteles, 2 TequeYoyos y 1 Gaseosa Grande. ¡20 piezas!' },
            { nombre: 'Combo 12 Tequeños', img: 'img/12teq.jpg',        descripcion: '12 tequeños de queso clásico + salsa de ajo exclusiva de la casa. El favorito.' },
            { nombre: 'Promo del Mes',     img: 'img/promodelmes.jpg',  descripcion: 'Oferta especial que cambia cada mes. ¡Consultanos en WhatsApp para saber cuál es la de hoy!' },
        ]
    },

    'postres': {
        titulo: 'Postres',
        items: [
            { nombre: 'Torta Tres Leches',          img: 'img/postres.jpg',  descripcion: 'La reina de los postres venezolanos. Esponjosa, cremosa y empapada en tres leches.' }, 
        ]
    },

    'especiales': {
        titulo: 'Especiales',
        items: [
            { nombre: 'TequeYoyo',    img: 'img/ty.jpg',          descripcion: 'La evolución del tequeño con plátano maduro y queso auténtico. Tradición venezolana lista para compartir.' },
            { nombre: 'Empanada Grande de Pabellón', img: 'img/epa.jpg',  descripcion: 'Rellena de Carne Mechada, Porotos Negros, Platano Maduro y Queso Llanero Venezolano. 250 gr. de puro Sabor Venezolano' },
        ]
    },

    'vegetariana': {
        titulo: 'Opciones Vegetarianas',
        items: [
            { nombre: 'Pastelitos Queso, Papa&Queso y Pizza',    img: 'img/pve.jpg',          descripcion: 'Pastelitos Elige tus sabores favoritos de queso, papa & queso o pizza' },
            { nombre: 'Mini Empandas de Domino y de Queso', img: 'img/mve.jpg',        descripcion: 'Mini empanadas de Porotos y Queso o Solo Queso, Elegi la que quieras' },
            { nombre: 'TequeYoyo',     img: 'img/ty.jpg',  descripcion: 'La evolución del tequeño con plátano maduro y queso auténtico. Tradición venezolana lista para compartir.' },
        ]
    },


};


/* =====================
   2. PANEL INTERACTIVO
   ===================== */
const panel      = document.getElementById('menuPanel');
const panelGrid  = document.getElementById('menuPanelGrid');
const panelTitle = document.getElementById('menuPanelTitle');
const panelClose = document.getElementById('menuPanelClose');
const pedirFixed = document.querySelector('.pedir-fixed');

document.querySelectorAll('.categoria-card').forEach(card => {
    card.addEventListener('click', () => abrirPanel(card.dataset.categoria));
});

function abrirPanel(cat) {
    const data = menuData[cat];
    if (!data) return;

    panelTitle.textContent = data.titulo;

    panelGrid.innerHTML = data.items.map(item => `
        <div class="menu-item-card">
            <img src="${item.img}" alt="${item.nombre}" loading="lazy">
            <div class="menu-item-card-body">
                <h4>${item.nombre}</h4>
                <p>${item.descripcion}</p>
                <a href="https://menu.fu.do/tequeonda" class="btn btn-gold" target="_blank" rel="noopener">Pedir</a>
            </div>
        </div>
    `).join('');

    panel.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Botón flotante queda encima del panel
    if (pedirFixed) pedirFixed.style.zIndex = '400';
}

function cerrarPanel() {
    panel.classList.remove('open');
    document.body.style.overflow = '';
    if (pedirFixed) pedirFixed.style.zIndex = '200';
}

panelClose.addEventListener('click', cerrarPanel);

// Click en el overlay oscuro → cerrar
panel.addEventListener('click', (e) => {
    if (e.target === panel) cerrarPanel();
});

// Tecla Escape → cerrar
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarPanel();
});


/* =====================
   3. NAVEGACIÓN MOBILE
   ===================== */
const navToggle = document.getElementById('navToggle');
const headerNav = document.getElementById('headerNav');

if (navToggle && headerNav) {
    navToggle.addEventListener('click', () => {
        headerNav.classList.toggle('open');
    });
    headerNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => headerNav.classList.remove('open'));
    });
}


/* =====================
   4. ANIMACIÓN AL SCROLL
   ===================== */
const animatedSections = document.querySelectorAll('.nosotros, .sucursales');

animatedSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

function revealOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;
    animatedSections.forEach(section => {
        if (section.getBoundingClientRect().top < triggerPoint) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


/* =====================
   5. EFECTO WHATSAPP
   ===================== */
const whatsappBtn = document.querySelector('.whatsapp');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        whatsappBtn.style.transform = 'scale(1.2)';
        setTimeout(() => { whatsappBtn.style.transform = 'scale(1)'; }, 200);
    });
}


/* =====================
   6. CONSOLA
   ===================== */
console.log('%c🇻🇪 Bienvenido a Teque Onda', 'color: #FFC72C; font-size: 18px; font-weight: bold;');
console.log('%cHecho con amor y buena onda 🤙', 'color: #aaa; font-size: 13px;');
