//Q1
const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        var pet = {type: pets[i]}
        let name;
        if(pets[i] === "cat"){
            name = "fluffy"
        } else {
            name="spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects;
}

runForLoop(["cat", "dog"])

//Q2

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot)=> {
        return {type:"carrot", name: carrot}
    })
}
console.log(mapVegetables(carrots))

//Q3
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Browser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person)=> {
        return person.friendly
    })
}

console.log(filterForFriendly(people))

//Q4
var doMathSum = (a, b) => {
    return a + b
}

var produceProduct = (a, b) => {
    return a * b
}

console.log('sum: ', doMathSum(5, 10), ' product ', produceProduct(10, 5))

//Q5
var printString = (firstName="Jane", lastName="Doe", age=100) => {
    console.log('Hi' , firstName, lastName + ", how does it feel to be", age)
}
printString()

//Q6
var printStringLiterals = (firstName="Jane", lastName="Doe", age=100) => {
    str = `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
    console.log(str)
}

printStringLiterals()

//Q7
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
]

function filterForDogs(arr) {
    return arr.filter((animal) => animal.type === "dog")
}
console.log(filterForDogs(animals))

//Q8
function welcomeNote(location, name) {
    msg = `Hi ${name}!
    
Welcome to ${location}.
    
I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
    console.log(msg)
}

welcomeNote('Hawaii', 'Janice')