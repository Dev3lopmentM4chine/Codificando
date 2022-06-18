let i = document.getElementById('inicio')
let f = document.getElementById('final')
let p = document.getElementById('passo')
let area = document.querySelector('div#conteudo')
let bot = document.querySelector('input#botao')
bot.addEventListener('click', carregar)


function carregar(){
    if(i.value == ''){
        alert('[Erro]:Preencha o campo INICIO!')
    }else if(f.value == ''){
        alert('[Erro]:Preencha o campo FIM!')
    }else if(p.value <= 0){
        alert('[Erro]:PASSO invalido, considerando passo 1!')
    }else if (i.value < f.value){
        area.innerHTML = `contando... <br>`
        for(var cont = Number(i.value); cont <= Number(f.value); cont += Number(p.value)){
            area.innerHTML += `${cont} \u{1F449}`
        }
        area.innerHTML += `\u{1F3C1}`
        /*
        *ATENÇÃO SCRIPT EM DESENVOLVIMENTO!
        *adicionar funcionalidade de contagem regressiva!
        */
    }else if (i.value > f.value){
        area.innerHTML = `contando...<br>`
        for(var cont = Number(i.value); cont >= Number(f.value); cont -= Number(p.value)){
          area.innerHTML += `${cont} \u{1F449}`  
        }
        area.innerHTML += `\u{1F3C1}`
    }
}