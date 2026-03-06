// =====================================================
// ANIMAÇÃO DO AVATAR (movimento flutuante suave)
// =====================================================

// Seleciona o avatar da seção hero
const avatar = document.querySelector(".hero-avatar");

// Variável de posição usada para criar o movimento senoidal
let position = 0;

// Função responsável pelo movimento
function float(){

    // Incrementa a posição lentamente
    position += 0.02;

    // Move o avatar no eixo Y usando função seno
    avatar.style.transform = `translateY(${Math.sin(position)*5}px)`;

    // Loop de animação contínua
    requestAnimationFrame(float);

}

// Inicia a animação
float();



// =====================================================
// REVELAR ELEMENTOS AO ROLAR A PÁGINA (scroll animation)
// =====================================================

function reveal(){

    // Seleciona todos os elementos com a classe reveal
    const reveals = document.querySelectorAll(".reveal");

    // Percorre todos os elementos
    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        // Posição do elemento na tela
        const elementTop = element.getBoundingClientRect().top;

        // Distância antes do elemento aparecer
        const revealPoint = 120;

        // Se o elemento entrou na área visível da tela
        if(elementTop < windowHeight - revealPoint){

            // Ativa animação
            element.classList.add("active");

        }

    });

}

// Evento que dispara ao rolar a página
window.addEventListener("scroll", reveal);

// Executa também ao carregar a página
reveal();



// =====================================================
// MODAL DOS PROJETOS
// =====================================================

// Função para abrir o modal
function abrirModal1(){

document.getElementById("modal").classList.add("show");

}

function fecharModal(){

document.getElementById("modal").classList.remove("show");

}

function abrirModal2(){

document.getElementById("modal").classList.add("show");

}

function fecharModal(){

document.getElementById("modal").classList.remove("show");

}

function abrirModal3(){

document.getElementById("modal").classList.add("show");

}

function fecharModal(){

document.getElementById("modal").classList.remove("show");

}
// Fechar modal clicando fora

const modal = document.getElementById("modal");

modal.addEventListener("click", function(event){

if(event.target === modal){

fecharModal();

}

});