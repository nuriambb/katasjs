//Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
const datos = Object.keys(alien)
for (const datos in alien) {
  console.log(alien[datos])
}
