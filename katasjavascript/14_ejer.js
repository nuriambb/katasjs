//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  const conteopalabras = {}

  for (i = 0; i < param.length; i++) {
    const palabra = param[i]
    if (conteopalabras[palabra]) {
      conteopalabras[palabra]++
    } else {
      conteopalabras[palabra] = 1
    }
  }
  return conteopalabras
}
repeatCounter(counterWords)
let test = repeatCounter(counterWords)
console.log(test)
