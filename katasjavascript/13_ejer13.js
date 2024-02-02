//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(param, valor) {
  for (i = 0; i < param.length; i++) {
    if (param[i] === valor) {
      return {
        existe: true,
        position: i
      }
    }
  }
  for (i = 0; i < param.length; i++) {
    if (param[i] !== valor) {
      return {
        existe: false,
        position: null
      }
    }
  }
}
finderName(nameFinder, 'Bruce')
let test = finderName(nameFinder, 'Bruce')
console.log(test)

finderName(nameFinder, 'Michael')
let test2 = finderName(nameFinder, 'Michael')
console.log(test2)
