const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
    const links = navLinks.querySelectorAll("a");
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });
}
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Mensagem preparada. O formulário ainda não está ligado a um serviço de envio.");
    });
}
let indiceGaleria = 0;
const trackGaleria = document.getElementById("carouselTrack");
const cardsGaleria = document.querySelectorAll(".galeria-card");
const dotsGaleria = document.getElementById("carouselDots");
function criarPontos() {
    if (!dotsGaleria) return;
    dotsGaleria.innerHTML = "";
    let quantidade;
    if (window.innerWidth <= 600) {
        quantidade = cardsGaleria.length;
    } else if (window.innerWidth <= 900) {
        quantidade = cardsGaleria.length - 1;
    } else {
        quantidade = cardsGaleria.length - 2;
    }
    for (let i = 0; i < quantidade; i++) {
        const ponto = document.createElement("span");
        ponto.classList.add("carousel-dot");
        if (i === indiceGaleria) {
            ponto.classList.add("active");
        }
        ponto.onclick = function () {
            indiceGaleria = i;
            atualizarGaleria();
        };
        dotsGaleria.appendChild(ponto);
    }
}
function moverGaleria(direcao) {
    if (!trackGaleria || cardsGaleria.length === 0) return;
    let maximo;
    if (window.innerWidth <= 600) {
        maximo = cardsGaleria.length - 1;
    } else if (window.innerWidth <= 900) {
        maximo = cardsGaleria.length - 2;
    } else {
        maximo = cardsGaleria.length - 3;
    }
    indiceGaleria += direcao;
    if (indiceGaleria < 0) {
        indiceGaleria = maximo;
    }
    if (indiceGaleria > maximo) {
        indiceGaleria = 0;
    }
    atualizarGaleria();
}
function atualizarGaleria() {
    if (!trackGaleria || cardsGaleria.length === 0) return;
    const largura = cardsGaleria[0].offsetWidth;
    const espaco = 20;
    trackGaleria.style.transform = `translateX(-${indiceGaleria * (largura + espaco)}px)`;
    const pontos = document.querySelectorAll(".carousel-dot");
    pontos.forEach(function (ponto, i) {
        ponto.classList.toggle("active", i === indiceGaleria);
    });
}
window.addEventListener("resize", function () {
    criarPontos();
    atualizarGaleria();
});
criarPontos();
atualizarGaleria();
