var a = parseInt(prompt("Digite o valor de A: "));

if(a ===0){
    alert("A equação não é do segundo grau! Por favor digitar o valor de A acima de zero! ");
    exit()
}

var b = parseInt(prompt("Digite o valor de B: "));
var c = parseInt(prompt("Digite o valor de C: "));
 var delta = (b * b) -4 *(a) * c;

if(delta < 0 ){
    alert("A equação não possui raízes reais. ");
    exit();
    
 }else if(delta === 0 ){
    alert("A equação possui apenas uma raíz real. ");
    exit();

 }else if( delta > 0){
    alert("A equação possui duas raízes reais. ");
exit();
 }





