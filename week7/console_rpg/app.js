var readlineSync = require('readline-sync');
console.log("hi, welcome to node rpg console");
let ans = readlineSync.question("what is your good name?")
console.log('lets begin the game ' + ans)
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let enemyNames = ["bob", 'maria', "john"]
let enemyFound = false
let enemyName = null
let prob = null
let walk = null
let mypower = 100
let enemyPower = 100
// Wait for user's response.
function recursive() {
    let prob = getRandomInt(5)
    console.log(prob)
    if (prob === 4) {
        enemyFound = true
        enemyFounds()
    }
    walk = readlineSync.question("press 'w' to walk around ")
}
function enemyFounds() {
    let index = getRandomInt(3)
    enemyName = enemyNames[index]
    console.log('you found ' + enemyName + ' around you')
    let choice = readlineSync.question("you wanna fight with " + enemyName + " or you wanna run? 'press f for fight and r for run'")
    if (choice === 'f' || choice === 'F') {
        fightBegins()
    } else {
        runaway()
    }
}
function hitornot() {
    console.log(enemyPower, mypower)
    if (enemyPower < 1 || mypower < 1) {
        return false
    } else {
        return true
    }
    // return enemyPower < 1 || mypower < 1 ? false : true
}
function fightBegins() {
    let Damage = null
    let hitting = null
    do {
        Damage = getRandomInt(20)
        console.log('you hit ' + enemyName + ' with ' + Damage + ' damage Points')
        enemyPower = enemyPower -= Damage
        console.log('enemypower =', enemyPower, 'myPower =', mypower)
        hitting = readlineSync.question("press 'h' to hit the enemy")
        console.log(hitornot())
    } while (hitornot());

}
function runaway() {
    runDoWHile()
}
function runDoWHile() {

    do {
        recursive()
    } while (!enemyFound);
}
runDoWHile()