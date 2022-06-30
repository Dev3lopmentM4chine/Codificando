function carregar() {
    let sexo1 = document.querySelector('input#male')
    let sexo2 = document.querySelector('input#female')
    let n1 = document.getElementById('num')
    let idade = 2022 - n1.value
    let msg = document.getElementById('mensagem')
    let area = document.getElementById('conteudo')
    let img = document.getElementById('imagem')

    /*
    let img = document.createElement('img') //criando uma tag 'img' direto do js
    img.setAttribute('id', 'imagem') //atribuindo id direto do js
    */
    
    if (male.checked || idade != 2022) {
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
    } else if (female.checked || idade != 2022) {
        if (idade >= 1 && idade < 18) {
            //juventude
            msg.innerHTML = `Detectamos Mulher com ${idade} anos.`
            img.src = 'assets/adolecente_female.png'
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
    }else{
        alert('[Error:] Verifique os dados e tente novamente!')
    }
    area.style.textAlign = 'center'
}
