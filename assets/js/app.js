// ======================
// HEADER SCROLL
// ======================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 80){
        header.classList.add('header-scrolled');
    }else{
        header.classList.remove('header-scrolled');
    }

});

// ======================
// MOBILE MENU
// ======================

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');

if(menuBtn){

    menuBtn.addEventListener('click', () => {

        nav.classList.toggle('show');

    });

}

// ======================
// REVEAL ON SCROLL
// ======================

const reveals = document.querySelectorAll(
    '.service-card,.event-card,.gallery-grid img,.cta-box'
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:.15
});

reveals.forEach(el => {

    el.classList.add('reveal');

    observer.observe(el);

});

// ======================
// 3D HOVER CARDS
// ======================

const cards = document.querySelectorAll(
    '.service-card,.event-card'
);

cards.forEach(card => {

    card.addEventListener('mousemove',(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (
            (x / rect.width) - .5
        ) * 18;

        const rotateX = (
            (.5 - y / rect.height)
        ) * 18;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener('mouseleave',()=>{

        card.style.transform='';

    });

});

// ======================
// PARTICLES
// ======================

const particles = document.getElementById('particles');

if(particles){

    for(let i=0;i<45;i++){

        const p = document.createElement('span');

        p.classList.add('particle');

        p.style.left =
        Math.random()*100 + '%';

        p.style.animationDuration =
        (8 + Math.random()*15) + 's';

        p.style.animationDelay =
        Math.random()*5 + 's';

        p.style.width =
        (2 + Math.random()*4) + 'px';

        p.style.height =
        p.style.width;

        particles.appendChild(p);

    }

}

// ======================
// CURSOR GLOW
// ======================

const glow = document.createElement('div');

glow.classList.add('cursor-glow');

document.body.appendChild(glow);

window.addEventListener('mousemove',(e)=>{

    glow.style.left =
    e.clientX + 'px';

    glow.style.top =
    e.clientY + 'px';

});

const galleryImages =
document.querySelectorAll(".gallery-item");

const galleryModal =
document.getElementById("galleryModal");

const galleryModalImg =
document.getElementById("galleryModalImg");

const galleryClose =
document.querySelector(".gallery-close");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        galleryModal.classList.add("show");

        galleryModalImg.src = img.src;

    });

});

galleryClose.addEventListener("click", () => {

    galleryModal.classList.remove("show");

});

galleryModal.addEventListener("click", (e) => {

    if(e.target === galleryModal){

        galleryModal.classList.remove("show");

    }

});