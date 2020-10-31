const readline = require('readline-sync');

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

operators = ['+', '-', '*', '/']
num1 = readline.questionInt("Please enter your first number: ");
num2 = readline.questionInt("Please enter your second number: ");
op = readline.keyInSelect(operators, "Please enter the operation to perform: ");

if (op == -1)
    console.log("You canceled the operation");
else {
    op = operators[op]
    result = undefined;
    switch (op) {
        case '+':
            result = add(num1, num2)
            break;
        case '-':
            result = subtract(num1, num2)
            break;
        case '*':
            result = multiply(num1, num2)
            break;
        case '/':
            result = divide(num1, num2)
            break;
    }
    console.log("The result is: ", result);
}