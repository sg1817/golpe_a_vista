var pontos = 0;
var respondidas = 0;
var respondida = [false, false, false, false, false];

function acertou(numero, explicacao) {
    if (respondida[numero] == true) {
        alert("Você já respondeu essa pergunta.");
        return;
    }
    respondida[numero] = true;
    pontos = pontos + 1;
    respondidas = respondidas + 1;
    atualizarPlacar();
    alert("Você acertou!" + explicacao);
    verificarFim();
}

function errou(numero, explicacao) {
    if (respondida[numero] == true) {
        alert("Você já respondeu essa pergunta.");
        return;
    }
    respondida[numero] = true;
    respondidas = respondidas + 1;
    alert("Você errou!" + explicacao);
    verificarFim();
}

function verificarFim() {
    if (respondidas == 5) {
        document.getElementById("resultado").textContent = "Você acertou " + pontos + " de 5 perguntas.";
    }
}


function atualizarPlacar() {
    document.getElementById("placar").textContent = "Pontos: " + pontos;
    document.getElementById("barra").value = pontos;
}

function reiniciar() {
    pontos = 0;
    respondidas = 0;
    respondida = [false, false, false, false, false];
    document.getElementById("resultado").textContent = "";
    atualizarPlacar();
}