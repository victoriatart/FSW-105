if(5 > 3){
    console.log("is greater than")
}
var cat = 3
var dog = 3
if ("cat".length === 3){
    console.log("is the lenght")
}
if ("cat" === "dog"){
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
}
if (person.age >= 18) { 
    console.log(person.name + " is allowed to go to the movie")
} else if(person.age <= 18) {
    console.log(`${person.name} is not allowed to go to the movies`)
}
if (person.name.charAt(0) == "B" && person.age > 18){
    console.log("can go to the movies")
}