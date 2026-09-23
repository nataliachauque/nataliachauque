const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
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
/* Formulário */
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Mensagem preparada. O formulário ainda não está ligado a um serviço de envio.");
    });
}

let indiceGaleria=0;
const trackGaleria=document.getElementById("carouselTrack");
const cardsGaleria=document.querySelectorAll(".galeria-card");
const dotsGaleria=document.getElementById("carouselDots");
function criarPontos(){
if(!dotsGaleria)return;
dotsGaleria.innerHTML="";
const quantidade=window.innerWidth<=600?cardsGaleria.length:window.innerWidth<=900?cardsGaleria.length-1:cardsGaleria.length-2;
for(let i=0;i<quantidade;i++){
const ponto=document.createElement("span");
ponto.classList.add("carousel-dot");
if(i===indiceGaleria)ponto.classList.add("active");
ponto.onclick=function(){
indiceGaleria=i;
atualizarGaleria();
};
dotsGaleria.appendChild(ponto);
}
}
function moverGaleria(direcao){
const maximo=window.innerWidth<=600?cardsGaleria.length-1:window.innerWidth<=900?cardsGaleria.length-2:cardsGaleria.length-3;
indiceGaleria+=direcao;
if(indiceGaleria<0)indiceGaleria=maximo;
if(indiceGaleria>maximo)indiceGaleria=0;
atualizarGaleria();
}
function atualizarGaleria(){
if(!trackGaleria||cardsGaleria.length===0)return;
const largura=cardsGaleria[0].offsetWidth;
const espaco=20;
trackGaleria.style.transform=`translateX(-${indiceGaleria*(largura+espaco)}px)`;
const pontos=document.querySelectorAll(".carousel-dot");
pontos.forEach((ponto,i)=>{
ponto.classList.toggle("active",i===indiceGaleria);
});
}
window.addEventListener("resize",function(){
criarPontos();
atualizarGaleria();
});
criarPontos();
atualizarGaleria();