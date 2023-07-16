// Return annotation for functions is optional,
// but it's worth to add it by hand everytime to not make mistake inside of function body

// Arrow function
const add = (a: number, b: number): number => {
    return a + b;
};

// Fishy, fishy
const subtract = (a: number, b: number) => {
    a - b;
}

// Named function
function divide(a: number, b: number): number {
    return a / b;
}

// Anonymous function
const multiply = function (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string): never => {
    throw new Error(message);
}


const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
};

//ES2015 destructuring with annotations
const logWeatherES2015WithAnnotations = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
};

logWeather(todaysWeather);
logWeatherES2015WithAnnotations(todaysWeather)
