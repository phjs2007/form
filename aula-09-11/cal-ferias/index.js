function calcular() {
    let salario, resultado,inss, ir

    salario = Number(document.getElementById('txtsalario').value)

    if (salario <= 1412) {
        inss = 0.075
    } else if (salario <= 2.666) {
        inss = 0.09
    }else if (salario <= 4000.03) {
        inss = 0.12
    }else {
        inss = 0.14
    }

    if (salario <= 1903.98) {
        ir = 0
    } else if (salario <= 2826.65) {
        ir = 0.075
    }else if (salario <= 3751.05) {
        ir = 0.15
    }else if (salario <= 4664.68) {
        ir = 0.2250
    }else {
        ir = 0.2750
    }

    let result_salario = salario + salario/3 
    let result_inss = result_salario * inss
    let result_ir = result_salario * ir
    resultado = result_salario - result_inss - result_ir



    return (
        alert("Você vai receber na suas feéria " + resultado.toFixed(2))
    )
}