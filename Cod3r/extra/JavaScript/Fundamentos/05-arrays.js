const valores = [9.2,2.8,'Lucas',true,23]
console.log(valores[0], valores[3])
console.log(typeof valores[0], typeof valores[3])

valores[6] = 'Hello World!' //mudando dados no array
valores[5] = 26
console.log(valores.length) //retorna o tamanho do array ex:6
console.log(valores)

//injetando dados com .push
valores.push(30,'Fernanda',2.3,'renaldocr7@gmail.com')
console.log(valores)
console.log(valores.length)

//deletando dados do array
delete(valores[10])//
console.log(valores)
console.log(valores.length)
 


