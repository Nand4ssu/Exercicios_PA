var numero1 = parseInt(prompt("Digite o primeiro número: "));
var numero2 = parseInt(prompt("Digite o segundo número: "));
var numero3 = parseInt(prompt("Digite o último número: "));
var maior

if(numero1 >= numero2 && numero1 >= numero3 ){
   maior = numero1;
}else if(numero2 >= numero1 && numero2 >= numero3){
    maior = numero2;
}else{
 maior = numero3
} alert("O maior número é: "+ maior)