var maior = -Infinity, menor = Infinity, numero

for (var i = 1; i <= 5; i++) {
    numero = parseFloat(prompt("digite um numero: "))

    if (numero >= maior) {
        maior = numero
    }
    if (numero <= menor) {
        menor = numero
    }
}
if (maior != -Infinity && menor != Infinity) {
    alert("O maior numero digitado é o: " + maior)
    alert("O menor numero digitado é o: " + menor)
}