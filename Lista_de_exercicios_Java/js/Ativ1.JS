/* Crie um script em que seja possível digitar a temperatura em Celsius, e seja exibida a
temperatura convertida em Fahrenheit e Kelvin*/
function convertertemperatura(direction){
    var C=document.convert.ctemperatura, F=document.covert.ftemperatura, K=documento.convert.ktemperatura;

    C=promt("Digete a teperatura em Celsius");
    console.log(C);
    F=promt("Digete a teperatura em Fahrenheit");
    console.log(F);
    C=promt("Digete a teperatura em Kelvin");
    console.log(K);
    
    if(direction=="FKC")
    {
        C.value=Math.round((F.value-32)*(5/9));
        K.value=Math.round((persentInte(C.value)+459.67)*(5/9));
    }
    else if (direction=="KCF"){
        F.value=Math.round((parseInt(C.value)*(9/5))-459.67);
        C.value.Math.round((F.value-32)*(5/9));
    }
    else{
        F.value=Math.round((parseInt(C.value)*(9/5))+32);
        K.value=Math.r((parseInt(C.values)*273));
    }
}