//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

//pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let sumanumeros = 0
  let sumaposicion = 0
  if (Array.isArray(param)) {
    for (let i = 0; i < param.length; i++) {
      if (typeof param[i] === 'number') {
        sumanumeros += param[i]
      } else if (typeof param[i] === 'string') {
        sumaposicion += param[i].length
      }
    }
  }
  return (sumanumeros + sumaposicion) / param.length
}
averageWord(mixedElements)
let test = averageWord(mixedElements)
console.log(test)

/*let suma = 0
  for (let i = 0; i < param.length; i++) {
    suma = suma + param[i]
  }
  return suma / param.length*/
//}

/*if (typeof param === 'number') {
  for (let i = 0; i < param.length; i++) {
    sumanumeros = sumanumeros + param[i]
  }
  //return suma
} else if (typeof param === 'string') {
  for (let f = 0; f < param.length; f++) {
    sumaposicion += param[f].length
  }
}
return sumanumeros + sumaposicion / param.length*/
