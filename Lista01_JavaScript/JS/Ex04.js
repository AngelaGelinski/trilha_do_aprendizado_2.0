var i, numero_um = 0, numero_dois = 0, numero_atual = 0

i = parseInt(prompt("Digite até que elemento contar"))

for (var contador = 1; contador <= i; contador++) {
    if (contador == 1) {
        numero_atual = 1
        numero_um = numero_dois
        numero_dois = numero_atual
    } else {
        numero_atual = numero_dois + numero_um
        numero_um = numero_dois
        numero_dois = numero_atual
    }
}

alert(numero_atual)