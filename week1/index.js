var shopper = {
    firstName: "Kate",
    lastName: "Martin",
    age: 40, 
    milk: true,
    fullName: function () {
        return this.firstName + " " + this.lastName + " " + this.age;
    },
    location: ["blue","red","yellow"]   
}
console.log (shopper.age)
console.log (shopper.firstName)
console.log (shopper.fullName ())
console.log (shopper.location [0])

function fullName () {
    console.log ("hello world") 
}