/* faca um algoritmo que dado 3 notas tiradas por aluno em um semestre da faculdade
calcule e imprima sua media e a sua classificacao conforme a tabela abaixo:
Media  = (nota1 + nota2+ nota3) / 3

Classificacao
- media menor 5 - reprovacao
- media entre 6 e 7 - recuperacao
- media acima de 7 - aprovado
*/

const nota1 = 1
const nota2 = 7
const nota3 = 1

const media = (nota1 + nota2 + nota3) / 3
console.log(media)

if (media < 5) {
    console.log("reprovacao");
} else if (media >= 5 && media <= 7) {
    console.log("recuperacao")
} else {
    console.log("aprovado")
}