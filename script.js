function soma() {
    var num1 = document.getElementById("n1");
    var num2 = document.getElementById("n2");
    var res = document.getElementById("resultado");
    var opecSelec = document.getElementById("operadorSelecionado");
    var v1 = Number(num1.value);
    var v2 = Number(num2.value);
    var valtolt = v1 + v2;
    res.innerHTML = valtolt;
    opecSelec.innerHTML = "+";
}

function subtracao() {
    var num1 = document.getElementById("n1");
    var num2 = document.getElementById("n2");
    var res = document.getElementById("resultado");
    var opecSelec = document.getElementById("operadorSelecionado");
    var v1 = Number(num1.value);
    var v2 = Number(num2.value);
    var valtot = v1 - v2;
    res.innerHTML = valtot;
    opecSelec.innerHTML = "-";
}
