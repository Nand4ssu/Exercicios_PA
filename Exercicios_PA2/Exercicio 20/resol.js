var nota1 = parseFloat(prompt("Digite sua primeira nota obtida: "));
var nota2 = parseFloat(prompt("Digite sua segunda nota: "));
var nota3 = parseFloat(prompt("Digite a terceira nota: "));
var media

media = (nota1 + nota2 + nota3)/3 

if(media === 10) {
    alert("Você foi aprovado com distinção!");
}else if(media >= 7 ){
    alert("Aprovado!");
}else{
    alert("Reprovado");
}alert("Sua média foi: "+media);
