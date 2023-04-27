var pontos = 0;
if(prompt("Para a produção de vinho branco, é necessário: \n 1-Somente uvas de casca branca \n 2-Tanque com temperatura controlada \n 3-Necessário de determinada maceração ") == "3") {
    pontos = pontos+ 1;
}
if(prompt("Um elemento que NÃO influencia no envelhecimento do vinho é:\n 1-Calor\n 2-Luz\n 3-Nenhuma das Alternativas") == "1") {
    pontos = pontos+ 1;
}
if(prompt("São acessórios e estão relacionados com vinho, exceto:\n 1-Colméia\n 2-Rótulo\n 3-Salva-gotas.") == "2") {
    pontos = pontos+ 1;
}
if(prompt(" O vinho do porto é um vinho português fortificado de qual região:\n 1-Douro\n 2-Alentejo\n 3-Porto") == "1") {
    pontos = pontos+ 1;
}
if(prompt(" Qual das alternativas abaixo traduz uma expressão usada por degustadores:\n 1-Magro = Sem corpo\n 2-Longo = De grande persistência\n 3-Oxidado = Vinho ao estilo de vinagre")  == "2") {
    pontos = pontos+ 1;
}

document.getElementById('resultado').innerHTML="Calculando...";
function mostrarResultado() {
    console.log('entrei na função')
    if(pontos == 5) {
        alert("Você acertou 5/5");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 4) {
        alert("Você acertou 4/5");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 3) {
        alert("Você acertou 3/5");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 2) {
        alert("Você acertou 2/5");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 1) {
        alert("Você acertou 1/5");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 0) {
        alert("Você acertou 0/5");
        document.getElementById('resultado'). innerHTML = pontos;
    }
}
setTimeout(mostrarResultado, 2000);
