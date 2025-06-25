// Função pra abrir/fechar o menu no mobile, só alterna a classe pra mostrar ou esconder
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
}

// Função do relógio digital, pega a hora atual e joga no HTML
function updateTime() {
    const timeElement = document.getElementById('time'); // Pega o span/div do relógio
    const now = new Date(); // Pega o horário atual
    const hours = now.getHours().toString().padStart(2, '0'); // Hora formatada bonitinha
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Minuto formatado
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Segundo formatado
    const timeString = `${hours}:${minutes}:${seconds}`; // Monta o texto do relógio
    timeElement.textContent = timeString; // Atualiza o relógio na tela
}

// Atualiza o relógio a cada segundo
setInterval(updateTime, 1000); 
updateTime(); // Já mostra a hora assim que carrega

// Espera o site carregar pra mexer no carrossel
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel"); // Pega o carrossel

    let currentIndex = 0; // Começa no primeiro slide
    let autoSlideInterval; // Vai guardar o intervalo do auto-slide

    // Função que faz o carrossel deslizar pro slide certo
    function updateCarousel() {
        const translateValue = -currentIndex * 100 + "%"; // Calcula quanto tem que andar
        carousel.style.transform = `translateX(${translateValue})`; // Move o carrossel
    }

    // Função que reinicia o auto-slide (troca de slide sozinho)
    function resetAutoSlideInterval() {
        clearInterval(autoSlideInterval); // Para o que tava rodando antes
        autoSlideInterval = setInterval(function () {
            // Se não chegou no último slide, vai pro próximo
            if (currentIndex < carousel.children.length - 1) {
                currentIndex++;
                updateCarousel();
            } else {
                // Se chegou no fim, volta pro começo
                currentIndex = 0;
                updateCarousel();
            }
        }, 3000); // Troca de slide a cada 3 segundos
    }

    // Já começa o auto-slide assim que carrega
    resetAutoSlideInterval();
});
