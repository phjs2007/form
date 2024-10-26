//Passo 1: criar a function
function escore() {
    //passo 2: variáveis
    let cardiaca, respiratoria, irritabilidade, tonus, mucosa;
    let total;
 
    //passo 3: inicializar: atribuir valor
    cardiaca = document.getElementById("txtcardiaca").value;
    respiratoria = document.getElementById("txtrespiratoria").value;
    irritabilidade = document.getElementById("txtirritabilidade").value;
    tonus = document.getElementById("txttonus").value;
    mucosa = document.getElementById("txtmucosa").value;
 
 
  //passo 4: converter
  cardiaca = Number(cardiaca);
  respiratoria = Number(respiratoria);
  irritabilidade = Number(irritabilidade);
  tonus = Number(tonus);
  mucosa = Number(mucosa);
 
  //passo 5: calcular
  //média aritmética simples: soma os valores
  //e divide pela quant de valores utilizados
 
  total = (cardiaca + respiratoria + irritabilidade + tonus + mucosa) / 5;
 

 
    document.getElementById('txtescore').textContent = total;

    if (total >= 1.5) {
        alert ('animal saudável')
    } else {
        alert('animal doente')
    }
}