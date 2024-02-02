//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
for (let i = 0; i < foodSchedule.length; i++) {
  const food = foodSchedule[i]

  if (!food.isVegan) {
    foodSchedule.splice(i, 1)

    const fruitIndex = i % fruits.length
    foodSchedule.splice(i, 0, { name: fruits[fruitIndex], isVegan: true })
  }
}

console.log(foodSchedule)
