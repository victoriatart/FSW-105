var readlineSync = require('readline-sync');
let ans = ""
let freetogo = false
let keyFound = false
// Wait for user's response.
function recursive() {
    console.log("You are in a locked room, you got 3 options to choose from");
    console.log("a) 'Put your hand in the hole to find something'");
    console.log("b) 'Find the key'");
    console.log("c) 'Open the door'");
    ans = readlineSync.question('Your answer?');
}
function foundkey() {
    console.log("CONGRATS You have the key now, what would you do now?");
    console.log("a) 'Put your hand in the hole to find something'");
    console.log("c) 'Open the door'");
    ans = readlineSync.question('Your answer?');
}
recursive()
do {
    if (ans === "a") {
        console.log('You are dead')
        freetogo = true
    } else if (ans === "b") {
        foundkey()
        keyFound = true
    } else {
        if (!keyFound) {
            console.log("You can't open the door without key!")
            recursive()
        } else {
            console.log("CONGRATS YOU ARE FREE TO GO...")
            break;
        }
    }
} while (!freetogo);