function tabload(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
        alert('[Error]: Número invalido!')
    }else{
        let n  = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}