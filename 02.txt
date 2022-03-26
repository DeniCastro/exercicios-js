=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DESAFIO 1:

function calcularMedia(){
    var notas = [8, 5, 4, 3]                // Notas dentro da Função.
    var soma = 0;                           // Cria variável soma.
    notas.forEach(function(nota){           // Para for each para usar cada nota de dentro das notas:
        soma += nota                        // A variável soma recebe cada nota que foi inserida.
  
    var media = soma / notas.length; // length serão todas as notas dentro do array.

    if (media >= 5) {                       // Cria a condição
        alert("APROVADO");
    } else {
        alert("REPROVADO");
    }
    });
};
calcularMedia();                            // Chama a função


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DESAFIO 2:

var descontos = [30, 45, 60, 20, 10, 75];

// Cria duas variáveis que serão substituídas pelos valores do array nas condições.
var maior = 0;     
var menor = 9999;

// cria um foreach para chamar cada número no index
descontos.forEach(function(numero, index) {
  if (numero > maior) {      // Se o numero for maior que 0, o numero vira o novo maior.
    maior = numero;
  }
  
  if (numero < menor) {      // Se o numero for menor que 9999, ele se tornará o menor valor.
    menor = numero;
  }
});
alert("O maior número é " + maior);
alert("O menor número é " + menor);


/* Sem utilizar o forEach:
var descontos = [30, 45, 60, 20, 10, 75];
alert("O maior número foi: " + Math.max(...descontos));
alert("O menor número foi: " + Math.min(...descontos));
*\


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DESAFIO 3:

var vendas = [32.54, 44.56, 50.10, 11.09];

// Cria duas variáveis, uma pra vendas e uma pra comissão.
var totalDasVendas = 0;
var valorDaComissao = 0;

// Chama o forEach para estipular o valor da soma do Array.
vendas.forEach(function(valor, index) {
  totalDasVendas = totalDasVendas + valor;  // O "valor" é a soma de todos os valores dentro do array;
});

if (totalDasVendas <= 100) {       // Cria a condição. Obs* 0.15 seriam os 15% de comissão
  valorDaComissao = totalDasVendas * 0.15;
} else if (totalDasVendas > 100 && totalDasVendas <= 200) {
  valorDaComissao = totalDasVendas * 0.2;
} else if (totalDasVendas > 200) {
  valorDaComissao = totalDasVendas * 0.25;
}

console.log("O valor total das suas vendas é: " + totalDasVendas);   // Exibe o valor total somado do array.
console.log("O valor da sua comissão é: " + valorDaComissao.toFixed(2)); // Exibe a comissão.


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DESAFIO 4:

var sexo = ['M', 'M', 'F', 'M', 'F', 'F', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'F', 'M', 'M', 'M', 'F', 'F'];

// Cria variáveis para cada gênero.
var masculino = 0;
var feminino = 0;

// Cria forEach para adicionar cada letra à variável respectiva.
sexo.forEach(function(a, index){
    if (a == 'M') {
        masculino ++;
    } else if (a == 'F') {
        feminino ++;
    }
});

// Exibe o resultado:
console.log('Total de homens: ' + masculino);
console.log('Total de mulheres: ' + feminino);


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DESAFIO 5:

var idades = [];
var menorIdade = 9999;
while(confirm('Deseja adicionar idades? ')){
    idade = prompt('Digite uma idade: ')
    idades.push(idade);
    idades.forEach(function(valor, index) {
        if (valor < menorIdade) {
            menorIdade = valor;
        }
    });
}
console.log('A menor idade é: ' + menorIdade);


=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
