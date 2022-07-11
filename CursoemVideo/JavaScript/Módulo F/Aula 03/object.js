const amigo = {
    nome:'Lucas',
    sexo:'M',
    peso: 90.6,
    engordou(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordou(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)