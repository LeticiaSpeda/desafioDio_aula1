/*
Faça um programa para calcular o valor de uma viagem.
Voce tera 3 variaveis. Sendo elas:
1 - Preco do Etanol
2 - Preco da Gasolina
3 - O tipo de combustivel que esta no seu carro
3 - Gasto medio de combustivel do carro por KM
4 - Distancia em KM da viagem
*/

const gasolina = 5.79
const etanol = 6.66
const combustivelNoCarro = "gasolina"
const gastoMedioKm = 10
const distanciaDaViagem = 100

const litroPorViagem = distanciaDaViagem / gastoMedioKm

if (combustivelNoCarro === 'Gasolina') {
    const valorTotal = litroPorViagem * gasolina
    console.log(valorTotal.toFixed(2)) 
} else  { 
    const valorTotal = litroPorViagem * etanol
    console.log(valorTotal.toFixed(2)) 
}


