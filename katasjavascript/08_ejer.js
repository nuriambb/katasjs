//Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(avengers) {
  let longestWord = ''
  for (let i = 0; i < avengers.length; i++) {
    const currentWord = avengers[i]

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord
    }
  }
  return longestWord
}

const resultado = findLongestWord(avengers)
console.log(resultado)
