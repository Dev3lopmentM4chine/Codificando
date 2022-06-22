let num = document.getElementById('num')
let botao = document.getElementById('botao')
let resultado = document.getElementById('resul') 
botao.addEventListener('click', carregar)
function carregar(){
    for(var cont = 0; cont <= 10; cont++){
        resultado.innerHTML  = `${Number(num.value)} X ${cont} = ${Number(num.value) * cont}` 
    }
    //resultado.setAttribute(cows: 14)
}