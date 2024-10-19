

function calcular() {
    let altura, peso, resultado_peso

altura = document.getElementById('altura').value
peso = document.getElementById('peso').value
result = document.getElementsByClassName('hidden')[0].style.visibility = 'visible';
    altura = Number(altura)
    peso = Number(peso)

    resultado_peso = peso / altura**2
    if (resultado_peso <= 18.50) {
        imc = document.getElementById('imc').textContent = 'Seu IMC é de ' + resultado_peso.toFixed(2) + " kg/m²"
        result = document.getElementById('result').textContent = 'Abaixo de 18,5: Magreza'

    } else if (resultado_peso <= 24.9) {
            imc = document.getElementById('imc').textContent = 'Seu IMC é de ' + resultado_peso.toFixed(2) + " kg/m²"
            result = document.getElementById('result').textContent = 'Entre 18,5 a 24,9: Normal'
    }else if (resultado_peso <= 29.9) {
        imc = document.getElementById('imc').textContent = 'Seu IMC é de ' + resultado_peso.toFixed(2) + " kg/m²"
        result = document.getElementById('result').textContent = 'Entre 25 a 29,9: Sobrepeso'
} else if (resultado_peso <= 34.9) {
    imc = document.getElementById('imc').textContent = 'Seu IMC é de ' + resultado_peso.toFixed(2) + " kg/m²"
    result = document.getElementById('result').textContent = 'Entre 30 a 34,9: Obesidade grau I'
}else if (resultado_peso <= 39.9) {
    imc = document.getElementById('imc').textContent = 'Seu IMC é de ' + resultado_peso.toFixed(2) + " kg/m²"
    result = document.getElementById('result').textContent = 'Entre 35 a 39,9: Obesidade grau II'
} else {
    imc = document.getElementById('imc').textContent = 'Seu IMC é de ' + resultado_peso.toFixed(2) + " kg/m²"
    result = document.getElementById('result').textContent = 'Acima de 40: Infinito'
}
} 

function Limpar() {
    let altura, peso, resultado_peso

    document.getElementById('altura').value = ""
    peso = document.getElementById('peso').value = ""
    result = document.getElementsByClassName('hidden')[0].style.visibility = 'hidden';
}
