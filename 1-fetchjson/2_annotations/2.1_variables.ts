// Type annotations
const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;

// Built-in objects
const now: Date = new Date();

// Array
const colors: string[] = ['red', 'green', 'blue'];
const mNumbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, true, false];

// Classes
class Car {
}

const car: Car = new Car()

// Object literal
const point: { x: number, y: number } = {
    x: 10,
    y: 20
}

// Function
//  without annotation
const logNumber = (i: number) => {
    console.log(i);
}
//  with annotation
const logNumber2: (i: number) => void = (i: number): void => {
    console.log(i)
}
logNumber(1)

// Fun example
const logNumberLast = (i: number): () => void => (): void => {
    console.log(i)
}
logNumberLast(2)();

const thisIsString = 'string';

// Type not inferred
let notInitializedVariable;
notInitializedVariable = '';

// When to use annotations
//  1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);                               // <- this is 'any' - bad
const coordinates2: { x: number, y: number } = JSON.parse(json);    // <- this is good
console.log(coordinates);                                           // <- {x: 10, y: 20}
console.log(coordinates2);

// 2) When wwe declare a variable on one line and initialize it later
const words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (const word of words) {
    if (word === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;                      // <- variable of type boolean or number
console.log('patola uno ', numberAboveZero)
for (const number of numbers) {
    if (number > 0) {
        numberAboveZero = number;
    }
}
console.log('patola duo ', numberAboveZero)
