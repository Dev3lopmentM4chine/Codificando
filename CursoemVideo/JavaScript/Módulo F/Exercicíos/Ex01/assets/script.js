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

let getBtn1 = document.getElementById('btn-one')
let getBtn2 = document.getElementById('btn-two')
let getnum = document.getElementById('inp-num')
let getAreaResult = document.getElementById('area-result')


const numeros = []

getBtn1.addEventListener('click', validacao)

function validacao() {
    let num = Number(getnum.value) //conversão de tipo primitivo
    if (num <= 0 || num > 100) {
        alert(`[Erro: Número invalido]`)
    } else {
        if(numeros.indexOf(num) != -1){
            alert(`[Erro: Número já inserido]`)
        }else{
            numeros.push(num)
        }
    }
}
