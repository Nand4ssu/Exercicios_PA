var nota1 = parseFloat(prompt("Digite a nota que você obteve no primeiro semestre: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
var media;


media = (nota1 + nota2)/2;
var A= "APROVADO" ;
var  D = "REPROVADO";

if(media > 9.0 && media === 10.0){
  
    alert("Sua nota é um A!");
    alert("Sua média foi: "+media);
    alert("E por fim, você foi "+A);

}else if(media > 7.5 && media === 9.0){
    
    alert("Sua nota é um B!");
    alert("Sua média foi: "+media);
    alert("E por fim, você foi "+A);
}else if(media > 6.0 && media === 7.5){
  
    alert("Sua nota é um C!");
    alert("Sua média foi: "+media);
    alert("E por fim, você foi "+A);
}else if(media > 4.0 && media === 6.0){
   
    alert("Sua nota é um D!");
    alert("Sua média foi: "+media);
    alert("E por fim, você foi "+D);
}else if(media > 4.0 && media === 0.0){
    
    alert("Sua nota é um E!");
    alert("Sua média foi: "+media);
    alert("E por fim, você foi "+D);
}