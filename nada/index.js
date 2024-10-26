 //Criar a função
 function calcular() {
    //Criar as variaveis
    let txt1, txt2, resultado, apresentarS;

    // inicializar as variaveis
    txt1 = document.getElementById('txtnota1').value
    txt2 = document.getElementById('txtnota2').value
    apresentarS = document.getElementById('apresentar')
    
    //converter para numero
    txt1= Number(txt1)
    txt2= Number(txt2)
    //realizar calculo
    resultado = txt1 * txt2
    //apresentar resultado
    apresentarS.textContent = resultado
    
 }