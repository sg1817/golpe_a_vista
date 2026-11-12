function contarPassos() {
    var feitos = 0;
    for (var i = 1; i <= 5; i++) {
        if (document.getElementById("passo" + i).checked) {
            feitos++;
        }
    }
    document.getElementById("barra").value = feitos;
    document.getElementById("texto-progresso").innerHTML = feitos + " de 5 passos completados";
}