function calcular() {
    let prova1, prova2, prova3, trabalho1, trabalho2, resultado

    prova1 = Number(document.getElementById('txtprova1').value)
    
    prova2 = Number(document.getElementById('txtprova2').value)
    
    prova3 = Number(document.getElementById('txtprova3').value)
    
    trabalho1 = Number(document.getElementById('txttrab1').value)

    trabalho2 = Number(document.getElementById('txttrab2').value)

    resultado = (prova1 + prova2 + prova3 + trabalho1+ trabalho2) /5

    if (resultado >= 7) {
        document.getElementById('result').textContent= "O aluno foi aprovado e a média dele foi " + resultado
        alert("O aluno foi reprovado e a média dele foi " + resultado)
    } else {
        document.getElementById('result').textContent= "O aluno foi reprovado e a média dele foi " + resultado
        alert("O aluno foi reprovado e a média dele foi " + resultado)
    }
}