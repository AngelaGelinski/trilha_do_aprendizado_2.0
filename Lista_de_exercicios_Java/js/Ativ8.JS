/*Crie um script que gere o fatorial de um número. Ex: 3! = 3x2x1 = 6*/
 function fatorial(valor){
     var  n
   n=promot("Insira o numero aqui");

   if(valor<0){
       return" O seu valor tem que ser maior ou igual a 0"
   }
   else if((valor==00|| valor==1)){
       return 1;
   }
   else{
       var acumula=1
       for(n=valor; n>1; n--){
           acumula=acumula*n
       }
   }
   return acumula
 }