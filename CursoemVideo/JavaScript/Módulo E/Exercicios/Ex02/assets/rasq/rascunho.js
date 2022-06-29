document.getElementById('btn-set').addEventListener('click', function(){
    document.getElementById('title').setAttribute('class', 'red')
})

document.getElementById('btn-remove').addEventListener('click', function(){
    document.getElementById('title').removeAttribute('class')
})

document.getElementById('btn-get').addEventListener('click', function(){
    var valor = document.getElementById('title').getAttribute('class')
    document.getElementById('class').innerHTML = valor
})