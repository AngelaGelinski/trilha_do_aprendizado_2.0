/*Crie um script que diga se um número é múltiplo de 3 ou 7. */
function pariedade(){
    var n=parseInt(document.getElementById("n").value);
    var multiplo=parseInt(document.getElementById("multiplo").value);
    var resposta=document.getElementById('resposta');

    if(n%multiplo==0){
        resposta.innerHTML=n+ "é mutiplo de.."+multiplo;
    }
    else{
        resposta.innerHTML=n+"Não é mutiplo de..."+multiplo;
    }


}