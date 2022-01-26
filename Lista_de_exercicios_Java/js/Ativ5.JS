/*Crie um script que leia o primeiro termo, a razão e a quantidade de termos e gere uma
progressão geométrica */

function progressaoarritmetica(){
    var V=parseINt (document.getElementById("inicial").value);
    var R=parseInt(document.getElementById("razão").value);
    var T=parseInt(document.getElementById("termo").value);
    var progressão="";
    var cont=0;

    for(var cont=1; cont<=T; cont++){
        progressão +"t"+cont+"="+v+"<br>";
        v+=R;
    }
    document.write(progressão)
}