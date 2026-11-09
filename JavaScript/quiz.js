var pontos = 0;

var respondida = [false, false, false, false, false];

function acertou(numero, explicacao) {
    if (respondida[numero] == true) {
        alert("Você já respondeu essa pergunta.");
        return;
    }
    respondida[numero] = true;
    pontos = pontos + 1;
    atualizarPlacar();
    alert("Você acertou!" + explicacao);

}

function errou(numero, explicacao) {
    if (respondida[numero] == true) {
        alert("Você já respondeu essa pergunta.");
        return;
    }
    respondida[numero] = true;
    alert("Você errou!" + explicacao);
}

function atualizarPlacar() {
    document.getElementById("placar").textContent = "Pontos: " + pontos;
    document.getElementById("barra").value = pontos;
}

function reiniciar() {
    pontos = 0;
    respondida = [false, false, false, false, false];
    atualizarPlacar();
}