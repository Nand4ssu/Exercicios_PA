var numero1 = parseInt(prompt("Digite o primeiro número: "));
var numero2 = parseInt(prompt("Digite o segundo número: "));
var numero3 = parseInt(prompt("Digite o terceiro e o último número: "));
var maior
var menor 


if(numero1 >= numero2 && numero1 >= numero3 ){
   maior = numero1;
}else if(numero2 >= numero1 && numero2 >= numero3){
    maior = numero2;
}else{
 maior = numero3
} alert("O maior número é: "+ maior);

if(numero1 <= numero2 && numero1 <= numero3){
    menor= numero1;
}else if(numero2 <= numero1 && numero2 <= numero3){
    menor = numero2;
}else{
    menor = numero3;
}alert("O menor número é: "+ menor);
