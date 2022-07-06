/* 
    *funcionalidades:
        -adicionar valores ao array
        -ação do botão 'finalizar': mostrar o resultado na div 'num'
        -ação de reset na div 'result' quando clicar no 'btn-num' se ja tiver sido gerado uma requisição de resultado na div 'result'.
        -conteudo do campo de resultado:div 'result'
*/

const n = document.getElementById('num')
const btn1 = document.getElementById('btn-num')
const multmedia = document.getElementById('multmedia')
const btn2 = document.getElementById('btn-area')
btn1.addEventListener('click', validation)

const num = []


function validation() {
    if (Number(n.value) <= 0 || Number(n.value) > 100) {
        return alert(`[Erro:${Number(n.value)}]Informe um número valído!`)
    } else {
        return Addnumber()
    }
}
function Addnumber() {
    let opt = document.createElement('option')
    opt.text = `Número ${Number(n.value)} adicionado!`
    multmedia.appendChild(opt)
}
