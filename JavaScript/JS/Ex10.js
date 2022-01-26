var v=[4, 8, 7, 6]

alert(v)

alert(v[2])
v[1=3]
alert(v)

var soma
soma=v[0]+ v[3]
alert(soma)

lista=["Juquinha", 1910,"Rua a", "Irati", "Pr", 88.5]
alert(lista)
aler(lista[3])

for(var i=0;i<lista.legnht;i++){
document.write("<h2>" +lista[i]+"</h2>")
}
lista.push("84500-000")//adiciona um elemento no final da lista
lista.push("teste")
alert(lista)

lista.pop()//remove o ultimo elemento da lista
alert(lista)

lista.shift()//remove o primeiro elemento da lista
alert(lista)
lista.unshift("Zequinha")

var posicao

posicao=lista.indexOf(" Irati")
alert(posicao)