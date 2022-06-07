//Operadores Relacionais, Lógicos(binarius e unarius) e Ternarius

var num = 5

//maior
console.log(num > 5) 

//menor
console.log(num < 5) 

//maior igual
console.log(num >= 4)

//menor igual
console.log(num <= 2) 

//igual
console.log(num == 8)

//igualdade restrita
console.log(num === 8)

//diferente
console.log(num != 6)

//disigual restrito
console.log(num !== 7)

//negação !
num = true
console.log(!num)

//conjunção &&
console.log(5 === '5' && 4 != '4') //FALSE : os dois são false
console.log(5 == '5' && 4 != '4') //FALSE : somente a segunda é false
console.log(5 == '5' && 4 !== '4') //TRUE : os dois são verdadeiros

//disjunção ||
console.log(5 === '5' || 4 != '4') //FALSE : os dois são false
console.log(5 == '5' || 4 != '4') //TRUE : somente a segunda é false
console.log(5 == '5' || 4 !== '4') //TRUE : os dois são verdadeiros

//operador ternario  'TESTE ? TRUE : FALSE'
var nota = 5.5
console.log(nota >= 7.0 ? 'APROVADO':'REPROVADO' )






