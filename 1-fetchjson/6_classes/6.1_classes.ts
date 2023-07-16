class Vehicle {
    constructor(private _color: string) {
    }

    get color(): string {
        return this._color;
    }

    drive(): void {
        console.log('chugga chugga')
    }

    honk(): void {
        console.log('beep')
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    override drive() {
        console.log('vroom')
    }

}

const car = new Car(4, 'orange');
car.drive()
car.honk()
console.log(car.color)
console.log(car.wheels)