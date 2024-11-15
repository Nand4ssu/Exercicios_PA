var dia = parseInt(prompt("Digite uma data: "));
var mes = parseInt(prompt("Digite um mês: "));
var ano = parseInt(prompt("Digite um ano: "));

if(dia > 0 && dia <32 && mes >=0 && mes <=13 && ano>0){
    alert("A data é válida");
}else{
    alert("A data é inválida.");
}