var resposta = prompt("Em qual turno você estuda? (responder com M, V ou N): ");
var matutino = "M";
var vespertino = "V" ;
var noturno = "N";

if(resposta === matutino){
    alert("Bom dia!");
}else if(resposta === vespertino){
    alert("Boa tarde!");
}else if(resposta === noturno){
    alert("Boa noite!");
}else{

    alert("Resposta invália. Por favor digitar uma das opções!");
}



