var n1 = 2050.59

console.log(`Seu novo salario é ${n1.toFixed(2).replace('.',',')}`)
/*
n.toFixed(n) Para formatar as casas decimais 

.replace('.',',') Troca o ponto pela virgula 
*/


console.log(`Seu salario em é ${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
//Formata para uma notação monetaria