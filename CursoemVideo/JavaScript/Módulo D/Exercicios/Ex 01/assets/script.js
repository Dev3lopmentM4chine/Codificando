function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora < 12){
        img.src = 'assets/fotomanha.png'
        document.body.style.background = '#be8b46'
    } else if(hora <= 18){
        img.src = 'assets/fototarde.png'
        document.body.style.background = '#ba8249'
    } else{
        img.src = 'assets/fotonoite.png'
        document.body.style.background = '#a95e36'
    }
}