
function calcular() {
    let potencia, horas, dias, gasto, valor, hidden
potencia = document.getElementById('potencia').value
horas = document.getElementById('horas').value
dias = document.getElementById('dias').value
    
    potencia = Number(potencia)
    horas = Number(horas)
    dias = Number(dias)
    let resultado = potencia * horas  * dias /1000
    let result_valor = resultado * 0.28093
    gasto = document.getElementById('gasto').textContent = resultado + "kWh"
    valor = document.getElementById('valor').textContent = "R$ " + result_valor.toFixed(2)
    hidden = document.getElementById('hidden').style.visibility = 'visible';
    alert('fds')
}