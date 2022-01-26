/*Elabore um script em que seja possível entrar com dados de idade e sexo de 5
pessoas. Exiba:
a. Quantas pessoas são do sexo masculino e quantas pessoas são do sexo
feminino.
b. Quantas pessoas são maiores e menores de idade
c. Qual o homem mais velho e mais novo
d. Qual a mulher mais velha e mais nova
e. Quantos homens e quantas mulheres são maiores de idade. */

var i, idade, sexo,Qmulheres, Qhomens, MaioridadeM, MaioriadadeH, MenoridadeM, MenoridadeH,demaior, demenor, idadee, idadem, menorresdeidade, p1, p2, p3, p4, p5;

for(i=1; i<=5;i++){
    idade:parseInt(promot("Informe sua idade"));
    sexo=prompt("Sexo: Masculino ou Feminino?");


    if(sexo=="masculino"){
        Qhomens++;
        idadee+=idade;
        MenoridadeM=MenoridadeM
        MaioridadeM=MaioridadeM
    }
    alert("total de homens;" +Qhomens);
    alert(" total de mulheres;"+Qmulheres);
    alert(" homem mais novo;"+MenoridadeH);
    alert(" mulher mais nova;"+MenoridadeM);
    alert(" homem mais velho;"+MaioriadadeH);
    alert("mulher mais velha;"+MaioridadeM);
    
    if(idade<=17){
        alert("Total de menores de idade;"+menorresdeidade);
    }
    
}