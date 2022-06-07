//declarando object
const HondaCivic = {}
HondaCivic.modelo = 'exl turbo'
HondaCivic.ano = 2021
HondaCivic.cambioAutomatico = true
HondaCivic['teto solar'] = false //evitar criar chaves com espaço no nome
const golpolo = {
    modelo: 'polo',
    ano: 2022,
    cambioAutomatico: false
}

console.log(golpolo)
console.log(HondaCivic)
console.log(typeof HondaCivic)
