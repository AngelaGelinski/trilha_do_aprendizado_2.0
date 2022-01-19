/* crie um script que leia a idade do usuario e se ele passou no teste prático para obter a CNH*. Caso tenha passado nos dois requesitos estará APTO caso contrário INAPTO, e dizer qual quesito reprovou*/

var idade, tp

idade=prompt("Entre com sua idade")

if(idade>=18){
tp=prompt("Passou no teste prático?(s/n)")
if(tp=="s"){
    alert("Parabéns você esta apto")
}
else{
    alert("Desculpa mas você não esta Apto")
}
}
else{
    alert("Idade inferior a 18 anos.Não pode tirar a CNH")
}
