/*
Faça um programa para calcular o valor de uma viagem.
Voce tera 3 variaveis. Sendo elas:
1 - Preco do combustivel
2 - Gasto medio de combustivel do carro por KM
3 - Distancia em KM da viagem
*/

const precoCombustivel = 5.79
const kmLitro = 10
const distanciaViagem = 100

const litroPorViagem = distanciaViagem / kmLitro
const valorDaViagem = litroPorViagem * precoCombustivel
console.log(valorDaViagem)