const n = document.getElementById('num')
const btn1 = document.getElementById('btn-num')
const multmedia = document.getElementById('multmedia')
const btn2 = document.getElementById('btn-area')
const num = []

btn1.addEventListener('click', validar)

function validar() {
    if (Number(n.value) <= 0 || Number(n.value) > 100) {
        return console.log(`[Erro:${Number(n.value)}]Informe um número valído!`)
    } else {
        return carregar()
    }
}
function carregar() {
    for (let c = 1; c >= num.length; c--) {
        num[num.length] = Number(n.value)
    }
    let opt = document.createElement('option')
    opt.text = `Número ${Number(n.value)} adicionado!`
    multmedia.appendChild(opt)
    console.log(num)
    console.log(num.length)
}
