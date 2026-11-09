var pontos = 0;

function acertou(explicacao) {
    pontos = pontos + 1;
    atualizarPlacar();
    alert("Acertou!" + explicacao);
}

function errou(explicacao) {
    alert("Errou!" + explicacao);
}

function atualizarPlacar() {
    document.getElementById("placar").textContent = "Pontos: " + pontos;
    document.getElementById("barra").value = pontos;
}