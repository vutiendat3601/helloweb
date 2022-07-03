window.alert('hello')
console.log(factorial(5))

function factorial(x) {
    return x === 1 ? 1 : x * factorial(x - 1);
}

var dat = {
    name: "Dat Vu",
    yearOfBirth: 2001,
    age: function() {
        return (new Date().getFullYear()) - parseInt(this.yearOfBirth)
    }
}

window.console.log(dat.name)
window.console.log( dat["yearOfBirth"])
window.console.log(dat.age())

var cars = ["C300", "C250", "S450"]

Math.m

console.log(cars)