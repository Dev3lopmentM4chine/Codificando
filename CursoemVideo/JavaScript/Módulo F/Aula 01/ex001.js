let num = []
num[0] = 5

num.push(8, 9, 6) //adiciona varios valores de uma só vez
num.sort() //organiza array de forma crescente

console.log(num)
console.log(num.length)

//script que lê arrays utilizando laço while
let cont = 0
/*
while(cont <= num.length){
    console.log(num[cont])
    cont++
}
 */

//script que lê arrays utilizando laço do while
/*
do{
    console.log(num[cont])
    cont++
}while(cont < num.length)
*/

//script que lê arrays utilizando laço do for com in
for(cont in num){
console.log(num[cont])
}

//indexOf
cont = num.indexOf(2)
console.log(cont)
