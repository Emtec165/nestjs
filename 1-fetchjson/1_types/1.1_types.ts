const appleCount: number = 5
const colors: string[] = ['red', 'blue', 'black']
const today = new Date()
today.getMonth()

const person = {
    age: 20,
    someOtherField: null
}

class Point {
    x: 10 = 10
    y: -20 = -20
}

class Color {
    static from(): Color {
        return new Color()
    }
}
const color1 = new Color()
const color2 = Color.from()
