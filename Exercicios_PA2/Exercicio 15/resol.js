var num1 = parseInt(prompt("Digite o primeiro lado do Triângulo: "));
var num2 = parseInt(prompt("Digire o segundo lado: "));
var num3 = parseInt(prompt("Digite o terceito e o último lado: "));

if(num1 === num2 && num2 === num3 && num1==num3){
    alert("O triângulo é Equilátero.");
}else if(num1 != num2 && num2 != num3 && num1!=num3){
    alert("O triângulo é Escaleno.");
}else{
    alert("O triãngulo é Isósceles.");
}