let sexo1 = document.querySelector('input#male')
let sexo2 = document.querySelector('input#female')
let img = document.getElementById('imagem')

function carregar() {
    let n1 = document.getElementById('num')
    let idade = 2022 - n1.value
    let msg = document.getElementById('mensagem')
    

    if (male.checked == true) {
        male_option()
    } else {
        female_option()
    }

    function male_option() {
        if (idade >= 1 && idade < 18) {
            //juventude 
            msg.innerHTML = `Detectamos Homem com ${idade} anos.`
            img.src = 'assets/adolecente_male.png'
        } else if (idade >= 18 && idade < 27) {
            //adolecencia
            msg.innerHTML = `Detectamos Homem com ${idade} anos.`
            img.src = 'assets/jovem_male.png'
        } else if (idade >= 27 && idade < 55) {
            //adulto
            msg.innerHTML = `Detectamos Homem com ${idade} anos.`
            img.src = 'assets/adulto_male.png'
        } else {
            //idoso
            msg.innerHTML = `Detectamos Homem com ${idade} anos.`
            img.src = 'assets/idoso_male.png'
        }
    }

    function female_option() {
        if (idade >= 1 && idade < 18) {
            //juventude
            msg.innerHTML = `Detectamos Mulher com ${idade} anos.`
            img.src = 'assets/adolecente_female2.png'
        } else if (idade >= 18 && idade < 27) {
            //adolecencia
            msg.innerHTML = `Detectamos Mulher com ${idade} anos.`
            img.src = 'assets/jovem_female.png'
        } else if (idade >= 27 && idade < 55) {
            //adultos
            msg.innerHTML = `Detectamos Mulher com ${idade} anos.`
            img.src = 'assets/adulto_female.png'
        } else {
            //idoso
            msg.innerHTML = `Detectamos Mulher com ${idade} anos.`
            img.src = 'assets/idoso_female.png'
        }
    }
}
