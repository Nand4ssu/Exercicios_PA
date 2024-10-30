var prim_bim = parseFloat(prompt("Digite a sua nota no primeiro Bimestre: "));
var seg_Bim = parseFloat(prompt("Digite a nota do segundo Bimestre: "));
var terc_Bim = parseFloat(prompt("Digite a nota do terceiro bimestre"));
var quar_BIm = parseFloat(prompt("Digite a nota do quarto Bimestre: "));
var media

media = prim_bim + seg_Bim + terc_Bim + quar_BIm % 4

console.log(" Sua média é de: ", media)

