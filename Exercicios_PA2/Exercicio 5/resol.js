var nota1 = parseFloat(prompt("Digite a primeira nota obtida: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
var nota3 = parseFloat(prompt("Por fim, digite a terceira e última nota: "));
var media

media = (nota1+nota2+nota3)/3

if(media === 10) {
    alert("Você foi aprovado com distinção!");
}else if(media >= 7 ){
    alert("Aprovado!");
}else{
    alert("Reprovado");
}
