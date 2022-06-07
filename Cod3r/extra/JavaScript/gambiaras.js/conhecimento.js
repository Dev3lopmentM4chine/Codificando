//objeto
const pessoas = {}
pessoas.rg = 79846
pessoas.rg = 'ola'
//pessoas = 5  erro!
console.log(pessoas)

//function que retorna
function somador(a = 1, b = 1){
    return a + b
}

console.log(`A soma do seu calculo é igaul a ${somador(50, 45)}`)

//array
let dados = []
dados[0] = 'lucas'
dados[1] = 12
dados[2] = false
dados[3] = undefined
dados[4] = null
dados[3] = 'ola mundo'
dados = 12
console.log(dados)
console.log(typeof dados[2])