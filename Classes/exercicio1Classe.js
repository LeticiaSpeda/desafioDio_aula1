/* Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível 
por Kilômetro rodado.Crie um método que dado a quantidade de quilómetros
 e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoCombustivel;

    constructor(marca, cor, gastoCombustivel) {
        this.marca = marca
        this.cor = cor
        this.gastoCombustivel = gastoCombustivel
    }

    calcularGastoPercurso(distancia, precoCombustivel) {
        return distancia * this.gastoCombustivel * precoCombustivel
    }
}

const meuCarro = new Carro('ford', 'vermelho', 1/12)
console.log(meuCarro.calcularGastoPercurso(70, 5))