// Section A

// Q1
function fiveAndGreaterOnly(arr) {
    return arr.filter(function (e) {
        return e >= 5;
    })
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//Q2
function evensOnly(arr) {
    return arr.filter(function (e) {
        return e % 2 == 0;
    })
}
console.log(evensOnly([3, 6, 8, 2]));

function ofAge(arr) {
    return arr.filter(function (e) {
        if (e.age >= 17)
            return e
    })
}
console.log(ofAge([
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jone', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }
]))

// section B
// Q1
function doubleNumbers(arr) {
    return arr.map(function (e) {
        return e * 2;
    });
}
console.log(doubleNumbers([2, 5, 100]));
// Q2
function stringItUp(arr) {
    return arr.map(function (e) {
        return "" + e;
    })
}
console.log(stringItUp([2, 5, 100]));

//Q3
function capitalizeNames(arr) {
    return arr.map(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

//Extra Credit 1
function namesOnly(arr) {
    return arr.map(function (e) {
        return e.name;
    })
}
console.log(namesOnly([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]))
//Extra Credit 2
function makeStrings(arr) {
    return arr.map(function (e) {
        if (e.age > 17)
            return e.name + " can go to the The Matrix";
        else
            return e.name + " is under age";
    })
}
console.log(makeStrings([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

//Section C
//Q1
function total(arr) {
    return arr.reduce(function (sum, e) {
        return sum + e;
    })
}
console.log(total([1, 2, 3]));
//Q2
function stringConcat(arr) {
    return arr.reduce(function (output, e) {
        return output + "" + e;
    })
}
console.log(stringConcat([1, 2, 3]));
//Q3
function totalVoters(arr) {
    return arr.reduce(function (total, e) {
        if (e.voted) {
            return total + 1;
        } else {
            return total + 0;
        }
    }, 0);
}
console.log(totalVoters([
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }

]));
//Extra Credit 1
function shoppingSpree(arr) {
    return arr.reduce(function (total, next) {
        return total + next.price;
    }, 0);
}
console.log(shoppingSpree([
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]))

function flatten(arr) {
    return arr.reduce(function (total, e) {
        return total.concat(e);
    }, [])
}
console.log(flatten([["1", "2", "3"], [true], [4, 5, 6]]))

//Section D
// Q1
function leastToGreatest(arr) {
    return arr.sort(function (a, b) {
        return a - b
    });
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))
// Q2
function greatestToLeast(arr) {
    return arr.sort(function (a, b) {
        return b - a;
    });
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))
// Q3
function lengthSort(arr) {
    return arr.sort(function (a, b) {
        return a.length - b.length;
    })
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]))

//extra credit
function alphabetical(arr) {
    return arr.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]))