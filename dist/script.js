var notaDoPrimeiroBimestre = 8;
var notaDoSegundoBimestre = 6;
var notaDoTerceiroBimestre = 5;
var notaDoQuartoBimestre = 7;
    
console.log("Sua Média é " + ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1)) 

//Desafio do cálculo da média em uma linha. 

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4  

if (notaFinal >= 6) {
  console.log("Sua Média Foi " + notaFinal.toFixed(1) + ", Você foi Aprovado(a)!") 

} 
    else{
      console.log("Sua Média Foi " + notaFinal.toFixed(1) + ", Você foi Reprovado(a).")
              } ;

//desafio para saber se o aluno foi aprovado ou reprovado. 

function saberMediaD() {
  var notaUm = parseFloat(document.getElementById('primeiraNota').value)
  var notaDois = parseFloat(document.getElementById('segundaNota').value)
  var notaTres = parseFloat(document.getElementById('terceiraNota').value)
  var notaQuatro = parseFloat(document.getElementById('quartaNota').value)
  var resultadoD = document.getElementById('resultado')
  var media = ((notaUm + notaDois + notaTres + notaQuatro) / 4).toFixed(1)
  if (media >= 6) {
    resultadoD.innerHTML = "Você passou sua nota foi " + media + " e está na média."
    } else {
     resultadoD.innerHTML = "Você foi reprovado sua nota foi " + media + " e está abaixo da média"
      }
  }