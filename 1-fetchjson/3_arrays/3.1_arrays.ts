const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carMyMake = [
    ['F150'],
    ['Corolla'],
    ['Camaro']
]

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop()

// prevent incompatible types
// carMakers.push(100); // <- error

// help with 'map'
const capitalizedCars = carMakers.map((car: string): string => {
    return car.toUpperCase();
})

console.log('capitalizedCars_value: ', capitalizedCars);

// flexible types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030-10-10')
importantDates.push(new Date())
// importantDates.push(100) // <- error