let sexo1 = document.querySelector('input#male')
let sexo2 = document.querySelector('input#female')
let bot = document.querySelector('input#botao') 
bot.addEventListener('click', carregar())


function carregar(){
    let n1 = document.getElementById('num')
    let ano = Number(n1.value) //ano digitado
    //let idade =
    let masculino = sexo1
    let feminino = sexo2
    let cont = document.querySelectorAll('div')[1]
    console.log(ano)

    /* 
    if(masculino == true){
        male_option()
    }else {
        female_option()
    }
    */
    

    /* 
    function male_option(){
        if(idade <= 16){
            //juventude 
            cont.innerHTML = `Detectamos Homem com ${idade} anos.`
            cont.img.src = `assets/imagens/jovemmale.png`
        }else if(idade <= 25){
            //adolecencia
            cont.innerHTML = `Detectamos Homem com ${idade} anos.`
            cont.img.src = `assets/imagens/adolecentemale.png`
        }else if(idade <= 45){
            //adulto
            cont.innerHTML = `Detectamos Homem com ${idade} anos.`
            cont.img.src = `assets/imagens/adultomale.png`
        }else{
            //idoso
            cont.innerHTML = `Detectamos Homem com ${idade} anos.`
            cont.img.src = `assets/imagens/idosomale.png`
        }
    }
    */


    /*
    function female_option(){
        if(idade <= 16){
            //juventude
            cont.innerHTML = `Detectamos Mulher com ${idade} anos.`
            cont.img.src = `assets/imagens/jovemfamale.png`
        }else if(idade <= 25){
            //adolecencia
            cont.innerHTML = `Detectamos Mulher com ${idade} anos.`
            cont.img.src = `assets/imagens/adolecentefamale.png`
        }else if(idade <= 45){
            //adulto
            cont.innerHTML = `Detectamos Mulher com ${idade} anos.`
            cont.img.src = `assets/imagens/adultofamale.png`
        }else{
            //idoso
            cont.innerHTML = `Detectamos Mulher com ${idade} anos.`
            cont.img.src = `assets/imagens/idosofamale.png`
        }
    }
    */ 
}
