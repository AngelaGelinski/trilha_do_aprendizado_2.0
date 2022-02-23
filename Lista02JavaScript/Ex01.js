function calcular() {
    var Celsius = parseFloat(document.getElementById("n1").value)

    document.getElementById("resultado1").innerHTML = `A temperatura de Celsius para Fahrenheit é: ${((Celsius * 1.8) + 32)}`

    document.getElementById("resultado2").innerHTML = `A temperatura de Celsius para Kelvin é: ${(Celsius + 273.15)}`
}