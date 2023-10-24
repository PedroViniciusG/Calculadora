function soma() {
    var num1 = document.getElementById("n1");
    var num2 = document.getElementById("n2");
    var res = document.getElementById("resultado");
    var opecSelec = document.getElementById("operadorSelecionado");
    var v1 = Number(num1.value);
    var v2 = Number(num2.value);
    var valtolt = v1 + v2;
    res.innerHTML = valtolt.toFixed(5);
    opecSelec.innerHTML.vari.toFixed(5.3)= "&#x2b;";
}

function subtracao() {
    var num1 = document.getElementById("n1");
    var num2 = document.getElementById("n2");
    var res = document.getElementById("resultado");
    var opecSelec = document.getElementById("operadorSelecionado");
    var v1 = Number(num1.value);
    var v2 = Number(num2.value);
    var valtot = v1 - v2;
    res.innerHTML = valtot.toFixed(5);
    opecSelec.innerHTML = "&#8722;";
}

function multiplicacao() {
    var num1 = document.getElementById("n1");
    var num2 = document.getElementById("n2");
    var res = document.getElementById("resultado");
    var opecSelec = document.getElementById("operadorSelecionado");
    var v1 = Number(num1.value);
    var v2 = Number(num2.value);
    var valtot = v1 * v2;
    res.innerHTML = valtot.toFixed(5);
    opecSelec.innerHTML = "&#xd7;";
}

function divisao() {
    var num1 = document.getElementById("n1");
    var num2 = document.getElementById("n2");
    var res = document.getElementById("resultado");
    var opecSelec = document.getElementById("operadorSelecionado");
    var v1 = Number(num1.value);
    var v2 = Number(num2.value);
    var valtot = v1 / v2;
    res.innerHTML = valtot.toFixed(5);
    opecSelec.innerHTML= "&#247;";
}
