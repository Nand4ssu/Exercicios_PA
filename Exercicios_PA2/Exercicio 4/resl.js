var letrad = prompt("Digite uma letra: ").toLowerCase(); //LowerCase converte a letra digitada para minúscula

//O includes está incluindo no caso as vogais e "associando com a letra digitada."
    if("aeiou".includes(letrad)){
    alert("A letra digitada é uma vogal. ");
}else{
    alert("A letra digitada é uma consoante.");
}