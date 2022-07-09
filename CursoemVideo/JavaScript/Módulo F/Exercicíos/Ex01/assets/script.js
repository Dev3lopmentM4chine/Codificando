/* 
    *Funcionalidades do script-SEGUIR ORDEM ABAIXO:

        -Validação de número ao clicar no botão 'analisar';
        
        -Adicionar valores ao array limitando valores repitidos;
        
        -Adicionar valores ao select;
        
        -Ação do botão 'finalizar': mostrar o resultado na div 'num';
        
        -Conteudo do campo de resultado:div 'result';
            *Total de numeros adicionados;
            *O mair e o menor numero adicionados;
            *Soma total dos números adicionados;
            *A média total do números adicionados;
        
            -Ação de reset na div 'result' quando clicar no 'btn-num' se ja tiver sido gerado um
        resultado;
*/

//Declarando variaveis e pegando elementos
let getBtn1 = document.getElementById('btn-one')
let getBtn2 = document.getElementById('btn-two')
let getnum = document.getElementById('inp-num')
let getAreaResult = document.getElementById('area-result')
let getAreaResult2 = document.getElementById('end-result-area')
let menorNum = 0
let maiorNum = 0
let somaTotal = 0
let mediaTotal = 0
const numeros = []

//Eventos
getBtn1.addEventListener('click', validacao)
getBtn2.addEventListener('click', finalResult)

//Validação e processamento dos valores
function validacao() {
    let num = Number(getnum.value) //conversão de tipo primitivo
    if (num <= 0 || num > 100) {
        alert(`[Erro: Número invalido]`)
    } else {
        if (numeros.indexOf(num) != -1) {
            alert(`[Erro: Número já inserido]`)
        } else {
            //Chamada pra função reset
            resetContent(getAreaResult2)

            //Adicionando valor digitado no Array
            numeros.push(num)
            
            //Indexando conteudo
            let opt = document.createElement('option')
            opt.text = `Número ${num} adicionado!`
            getAreaResult.appendChild(opt)

            //Calculos
            numeros.forEach(function (numero) {
                if (numero > maiorNum) {
                    maiorNum = numero
                }
                if (menorNum == 0) {
                    menorNum = numero
                } else if (numero < menorNum) {
                    menorNum = numero
                }
            })
            somaTotal += num
            mediaTotal = somaTotal / 2
        }
    }
}

function resetContent(c){
    c.innerHTML = ""
}

//Relatório sobre valores adicionados
function finalResult() {
    if(numeros.length == 0){
        alert('[Erro: Adcione um valor]')
    }else{
        getAreaResult2.innerHTML = `Ao todo temos, ${numeros.length} números cadastrados. <br><br>`
        getAreaResult2.innerHTML += `O maior valor informado foi ${maiorNum}. <br><br>`
        getAreaResult2.innerHTML += `O menor valor informado foi ${menorNum}. <br><br>`
        getAreaResult2.innerHTML += `Somando todos os valores, temos ${somaTotal}. <br><br>`
        getAreaResult2.innerHTML += `A média dos valores digitados é ${mediaTotal}. <br><br>`
    }
}