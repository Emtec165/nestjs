const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },

    setAge(age: number): void {
        this.age = age;
    }
}

// Normal way
const age1 = profile.age;

// ES2015 destructuring
const {age}: { age: number } = profile;
console.log('age_value: ', age);

const {coords: {lat, lng}}: { coords: { lat: number, lng: number } } = profile;
console.log('lat_value: ', lat);
console.log('lng_value: ', lng);
