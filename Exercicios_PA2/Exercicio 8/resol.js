var Produto1 = parseFloat(prompt("Informe o valor do primeiro produto: "));
var Produto2 = parseFloat(prompt("Informe o valor do segundo: "));
var Produto3 = parseFloat(prompt("Informe o valor do terceiro e último: "));

if(Produto1 < Produto2 && Produto1 < Produto3){
    alert("O primeiro produto possui o preço mais acessível para compra.");
}
else if(Produto2 < Produto1 && Produto2 < Produto3){
    alert("O segundo produto possui o preço mais acessível para compra.");
}else{
    alert("O terceiro produto é o mais acessível para compra.");
}