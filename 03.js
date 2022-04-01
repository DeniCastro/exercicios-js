// Cria a classe vendedor, recebe nome cargos e vendas(ARRAY), comissão e total de vendas:
class Vendedor {
    nome
    cargo
    vendas = []
    comissão = 0
    totalVendas = 0
    
    // Cria Métodos de calcular comissão e Total de Vendas
    calcularComissão() {
      this.comissão = this.totalVendas * this.cargo.percentual
    }
  
    calcularTotalVendas() {
        this.vendas.forEach((produto) => {
        this.totalVendas = this.totalVendas + produto.valor
    })
    this.totalVendas = this.totalVendas.toFixed(2)
    // Usei o toFixed e fechei a classe
    }
  }
// Cria a classe Produto (constructor pro nome e valor)
class Produto{
    nome
    valor

    constructor(){
        this.nome = nome
        this.valor = valor
    }
}
// Cria a class Cargo(recebe valor e percentual)
class Cargo{
    valor
    percentual
}

// Cria o cargo(Vendedor1)
var vendedor1 = new Cargo()
vendedor1.nome = 'Vendedor Nível 1'
vendedor1.percentual = 0.05
 
// Agora, cria as variáveis dos produtos comprados(nome e valor)
var nome = prompt("Digite o nome do produto")
var valor = parseFloat(prompt("Digite o preco"))
var item1 = new Produto (nome, valor)

var nome = prompt("Digite o nome do produto")
var valor = parseFloat(prompt("Digite o preço"))
var item2 = new Produto (nome, valor)

// Cria a variável do usuário com nome e cargo:
var deni = new Vendedor();
deni.nome = "Denilson Castro"
deni.cargo = vendedor1

// faz o vendas/push dos itens vendidos:
deni.vendas.push(item1);
deni.vendas.push(item2);
  
// chama as duas funções:
deni.calcularTotalVendas();
deni.calcularComissão();

// Exibe as vendas, comissão e o vendedor.
alert ("O total de vendas é: " + deni.totalVendas)
alert('O total de comissão é: ' + deni.comissão)
console.log(deni);
