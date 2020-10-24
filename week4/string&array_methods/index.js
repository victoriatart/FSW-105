const a = String.prototype.toUpperCase.call({
    toString: function toString() {
        return 'hamburger'
    }
});

const b = String.prototype.toUpperCase.call(true);

//prints out 'HAMBURGER TRUE'
console.log(a,b);

const food = ['pizza', 'chicken', 'avocado', 'gyro'];

console.log(food.slice(2));

function capitalizeFirstLetter(string) {
  
	let half = string.length / 2

	let firstWord = string.slice(0, half).toUpperCase();
  
  	let secondWord = string.slice(half, string.length)
    
    return firstWord + secondWord;
  }