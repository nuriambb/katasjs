//Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:
const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

const toys2 = []
const palabraeliminada = 'gato'
for (i = 0; i < toys.length; i++) {
  if (!toys[i].name.includes(palabraeliminada)) {
    toys2.push(toys[i])
  }
}
console.log(toys2)

/*for (i = 0; i < toys.length; i++) {
  if (toys[i].name.includes(palabraeliminada)) {
    toys.name.splice(palabraeliminada, 1)
  }
}
console.log(toys) NO FUNCIONA */
