var salario = parseInt(prompt("Digite seu sálario: "));
var reajuste
var aumento 
var novo_sal

if(salario <= 280){
    aumento = 280 * 0.2;
    reajuste = salario;
    novo_sal = aumento + salario;
    

    alert("O valor do seu sálario antes do reajuste: R$"+reajuste);
    alert("Seu sálario teve um aumento de 20%.");
    alert("O seu sálario teve um aumento de: R$"+ aumento);
    alert("Seu novo sálario é: R$"+novo_sal);

}else if(salario > 280 && salario <= 700){
    reajuste= salario;
    aumento = salario * 0.15;
    novo_sal = aumento + salario

    alert("O valor do seu salário antes do reajuste: R$"+reajuste);
    alert("Seu salário teve um aumento de 15%.");
    alert("O seu salário teve um aumento de: R$"+ aumento);
    alert("Seu novo salário é: R$"+novo_sal);
    

}else if(salario > 700 && salario <= 1500){
    reajuste = salario;
    aumento = salario * 0.10;
    novo_sal = aumento + salario;

    alert("O valor do seu salário antes do reajuste: R$"+reajuste);
    alert("Seu salário teve um aumento de 10%.");
    alert("O seu salário teve um aumento de: R$"+ aumento);
    alert("Seu novo salário é: R$"+novo_sal);

    
}else if( salario > 1500){
    reajuste = salario;
    aumento = salario * 0.05;
    novo_sal = aumento + salario;

    alert("O valor do seu salário antes do reajuste: R$"+reajuste);
    alert("Seu salário teve um aumento de 5%.");
    alert("O seu salário teve um aumento de: R$"+ aumento);
    alert("Seu novo salário é: R$"+novo_sal);
}