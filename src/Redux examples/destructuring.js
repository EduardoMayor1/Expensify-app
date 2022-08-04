const person = {
    name: 'Eduardo',
    age: 17,
    location: {
        city: 'Miami',
        temp: 72
    }
}


const { name, age } = person
console.log(`${name} is ${age}`)

const {city, temp} = person.location
if(city && temp) {
    console.log(`It is ${temp} degrees in ${city}`)
}

