const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

const pepsi: [string, boolean, number] = ['brown', true, 40]

// type alias
type Drink = [string, boolean, number]

const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 20]


const carSpecs: [number, number] = [400, 3354];      // <- unclear meaning of magic numbers
const carStats = {      // <- more descriptive
    horsepower: 400,
    weight: 3354
}