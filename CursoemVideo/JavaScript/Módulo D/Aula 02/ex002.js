var agora = new Date()
var agora2 = new Date()
var horas = agora.getHours()
var minutos = agora2.getMinutes()
console.log(`Agora são ${horas}h${minutos}`)
if(horas < 12){
    console.log('Bom Dia!')
} else if (horas <= 18){
    console.log('Boa Tarde!')
} else{
    console.log('Boa Noite!')
}