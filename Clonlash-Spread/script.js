'use strict'

// Clone lash

// Yuzaki Clone lash

const person = {
    name: 'Yahyo',
    age: 16,
    hobbies: {
        game: 'Minecraft',
        sport: 'Football'
    }
}

// ------------------------------------------------------------------------------------------------------

// #1. - Iteratsiya yordamida clone lash
// const copyObj = (obj) => {
//     const clone = {}

//     for (let key in obj) {
//         clone[key] = obj[key]
//     }

//     return clone
// }

// const secondPerson = copyObj(person)

// secondPerson.name = 'Sard    or'
// secondPerson.age = 13

// console.log(person);
// console.log(secondPerson);

// ------------------------------------------------------------------------------------------------------

// #2. - Object assign() yordamida clone lash
// Object assign() yordamida clone lagan objectga yana ma'lumot qo'shishimiz mumkin bo'ladi
// const secondPerson = Object.assign({
//     isMarried: false
// }, person)

// secondPerson.name = 'Oyatillo'
// secondPerson.age = 7

// console.log(person);
// console.log(secondPerson);

// ------------------------------------------------------------------------------------------------------

// #3. - Spread operatori yordamida clone lash
// const secondPerson = {...person}

// secondPerson.name = 'Yusuf'
// secondPerson.age = 12

// console.log(person);
// console.log(secondPerson);

// ********************************************************************************************************
// ********************************************************************************************************

// Massivlarni yuzaki clone lash

// #1. - slice() method yordamida clone lash
const cars = ['MERS', 'BMW', 'PORSCHE']
const clonedCars = cars.slice()
clonedCars.push('MCLAREN')

const joinedClonedCars = clonedCars.join(' ')

console.log(cars)
console.log(clonedCars)
// console.log(joinedClonedCars)

// ------------------------------------------------------------------------------------------------------

// #2. Spread operatori yordamida clone lash
const spreatedCars = [...cars]
spreatedCars.push('LAMBARGHINI')

console.log(cars)
console.log(spreatedCars)

// ********************************************************************************************************
// ********************************************************************************************************

// Function - Spread

function log(a,b,c) {
    console.log('First arg', a);
    console.log('Second arg', b);
    console.log('Thords arg', c);
}

const arr = [1,2,3]

// biza server dan yoki database dan keloyotgan malumotlarni spread operatori yordamida tarqatvorishimiz mumkin bo'ladi

log(...arr)