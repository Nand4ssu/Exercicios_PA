var numero1 = parseInt(prompt("Informe o primeiro número: "));
var numero2 = parseInt(prompt("Informe o segundo número:  "));
var numero3 = parseInt(prompt("Infome o terceiro número:  "));

if(numero1 >= numero2 && numero1 >= numero3){
    alert("Sua ordem decrescente é: "+ "\n"+ numero1 + "\n" + numero2 + "\n"+numero3);
    if(numero2 >= numero3){
        alert("A ordem decrescente dos números é:  "+"\n" + numero1 + "\n" + numero3 + "\n" + numero2);
    }else{
        alert("A ordem descrescente dos números é: "+"\n"+ numero1+ "\n"+ numero3 + "\n"+ numero2);
    }} else if(numero2 >= numero1 && numero2 >= numero3){
        if(numero1 >= numero3){
            alert("A ordem decrescente dos números é: "+ "n" +numero2+"\n"+ numero1+"\n"+numero3);
        } else{
            alert("A ordem decrescente dos números é: "+"\n"+numero2+"\n"+numero3+"\n"+numero1);
        }

    }else{
        alert("A ordem decrescente dos números é: "+"\n"+numero3+"\n"+numero2+"\n"+numero1);
    }
