var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomoato", "pepper", "lettuce"];

vegetables.pop();
fruit.shift();
let num = fruit.indexOf("orange");
fruit.push(num);
let vegLength = vegetables.length
vegetables.push(vegLength);
let food = fruit.concat(vegetables);
food.splice(4, 5);
food.reverse();
return food.toString();
