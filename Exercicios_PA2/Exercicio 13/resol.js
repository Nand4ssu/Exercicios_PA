var num_d = parseInt(prompt("Digite um número de 1-7 para saber os dias da semana: "));
var domingo = "1";
var segunda = "2";
var terça = "3";
var quarta = "4";
var quinta = "5";
var sexta = "6";
var sabado = "7";

if(num_d === 1){
    alert("1-Domingo!");
}else if(num_d === 2){
    alert("2-Segunda-feira!");
}else if(num_d === 3){
    alert("3-Terça-feira!");
}else if(num_d === 4){
    alert("4-Quarta-Feira");
}else if(num_d === 5){
    alert("5-Quinta-feira");
}else if(num_d === 6){
    alert("6-Sexta-feira!");
}else if (num_d === 7){
    alert("7-Sábado!");
}else{
    alert("Resposta inválida! Por favor digitar um dos valores propostos.");
}