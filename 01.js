// Os exercícios a seguir foram solucionados usando o Console do Google Chrome, conforme ensinado na aula 1 de CPII da FlexPeak.


// 1. Crie 5 variáveis de cada tipo abaixo:

-Number:
var minhaIdade = 25
var minhaAltura = 1.84
var meuPeso = 80
var meuNumero = 13
var minhaCasa = 10

-String:
var meuNome = 'Denilson'
var sobrenome = 'Castro'
var ultimonome = 'Oliveira'
var apelido = 'Deni'
var pet = 'Ash'

-Boolean:
1 + 1 == 3
meuNome == 'Denis'
apelido == 'Denilson'
pet == 'Rex'
minhaIdade = 18


// 2. Escreva um programa que receba dois valores do usuário, some eles e exiba a soma final.

var valor1 = prompt('Digite o primeiro valor da soma: ')
var valor2 = prompt('Digite o segundo valor: ')
soma = parseInt(valor1) + parseInt(valor2)
alert('O valor da soma é ' + soma)
// também é possível assim:
valor1 = Number(prompt('Digite o primeiro numero: '))
valor2 = Number(prompt('Digite o segundo numero: '))
soma = valor1 + valor2
alert('O total é: ' + soma)


// 3. Escreva um programa que receba o valor do lado de um quadrado em cm e calcule o perímetro do quadrado.

var lado = prompt('Digite o tamanho dos lados: ')
var perimetro = lado * 4
alert('O perímetro do quadrado é de: ' + perimetro + 'cm')

// 4. Escreva um programa que receba um número inteiro e calcule o quadrado desse número.
var num = prompt('Digite um número para calcular o seu quadrado: ')
quad = num * num
alert('O quadrado desse número é ' + quad)

// 5. Escreva um programa que receba um valor em horas e que calcule quantos segundos há nesse valor.

var segundos = 60
var horas = prompt('Quantas horas deseja somar? ')
tot = horas * segundos
alert('O total de segundos é de ' + tot)


// 6. Escreva um programa que receba a idade de uma pessoa e classifique ela como: Criança (0 a 10 anos), Adolescente (11 a 15 anos), Jovem (16 a 18 anos), Adulto (19 a 60 anos) e Idoso (61 anos ou mais)

var idade = prompt ("Quantos anos você tem? ")
if (idade <=10) {
  alert ("Você é uma Criança!")
} else if (idade >10 && idade <= 15) {
   alert ("Você é Adolescente!")
} else if  (idade >=16 && idade <= 18) {
  alert ("Você é Jovem!")
} else if (idade >=19 && idade <= 60) {
  alert ("Você é Adulto!")
} else {
 alert ("Você é Idoso!")
}


// 7. Escreva um programa que receba a velocidade do carro em km/h e calcule a multa recebida pelo motorista. A regra é a segunte, o limite da via é 60 km/h, para cada km excedido o motorista irá receber R$ 3,99 de multa.

const = MAX_VIA
vel = prompt('Qual a velocidade do carro? ')
if (vel > MAX_VIA) {
    var multa = (vel - 60) * 3.99
    alert("MULTADO! pague R$ " + multa.toFixed(2))
} else {
    alert("Tudo certo, tenha um ótimo dia!")
}


// 8. Escreva um programa que receba a quantidade de litros que um motorista abasteceu o carro dele e calcule o valor que ele irá pagar. Ele poderá escolher entre álcool e gasolina. O valor do álcool é R$ 4,01 por litro e o valor da gasolina é R$ 5,99 por litro.

const LITRO_GASOLINA = 5.99
const LITRO_ALCOOL = 4.01

combustivel = prompt ('O que deseja abastecer:\n[1]- Gasolina\n[2] - Etanol')
litros = prompt ('Quantos litros deseja abastecer?')
pagar = 0

if (combustivel == 1) {
    pagar = litros * LITRO_GASOLINA
    alert('Total a pagar: R$' + pagar.toFixed(2)) // ".toFixed(2)" irá remover os números Float
} else if (combustivel == 2) {
    pagar = litros * LITRO_ALCOOL
    alert('Total a pagar: R$' + pagar.toFixed(2))
} else {
    alert('OPERAÇÃO INVÁLIDA!')
}


// 9. Escreva um programa que receba dois valores. Após isso, o usuário deverá escolher se deseja somar, subtrair, dividir ou multiplicar esses valores. O resultado final deverá ser exibido. 

v1 = Number(prompt('Insira o primeiro valor: '))
v2 = Number(prompt ('Agora, o segundo: '))
total = 0
op = prompt ('Qual operação deseja realizar:\n[1] - Soma \n[2] - Subtração\n[3] - Multiplicação\n[4] - Divisão')
if (op == 1) {
    total = v1 + v2
    alert ('O resultado é: ' + total)
} else if (op == 2) {
    total = v1 - v2
    alert ('O resultado é: ' + total)
} else if (op == 3) {
    total = v1 * v2
    alert ('O resultado é: ' + total)
} else if (op == 4) {
    total = v1 / v2
    alert ('O resultado é: ' + total)
} else {
    alert('Operação Inválida')
}
if(typeof resultado != 'undefined') {
alert("O resultado é " +resultado)



// 10. Escreva um programa que faça uma pergunta para o usuário e dê 5 alternativas. O usuário deverá escolher uma alternativa e você deverá dizer se a alternativa está certa ou errada. 

confirm ("Iniciar Jogo?? ")
resposta = prompt('O que é, o que é? Não é vivo, mas cresce. Não tem pulmões, mas precisa de ar. Não tem boca, mas a água pode matá-lo. a - caverna / b - pessoa / c - fogo / d - coração .')
if (resposta == 'c') {
    alert("PARABÉNS, VOCÊ ACERTOU! ")
} else if (resposta == 'fogo') {
    alert("Muito bem!")
} else {
    alert('ERROU! HAHHAHAHAH')
}

===============        //       ===============        //         ===============        //    
