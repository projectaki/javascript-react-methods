// String to number
Number.parseInt("5");

// working with float numbers
//converts to fixed decimal position, "+" sign converts string to int
+(1.1 + 1.3).toFixed(2)

// Objects

let car = { 
    type: "4 wheeler",
    size: "big",
    func: function() {
        
    }
}

let car2 = {}

//assigns second parameters value to first parameter (Merge)
Object.assign(car2,car);
// To avoid mutating original object
Object.assign({},car2,car);

//constructer functions

function Person(fname) {
    this.fname = fname;
}
//arrays

const values= [1,2,3,4]
const search = values.filter(function(item) {
    return item > 2;
})

const search = values.forEach(function(item) {
    return item > 2;
})

values.push()
values.pop()
values.shift()
values.unshift()

//arrow functions

let sum = (n1, n2) => n1 + n2;

// function call
let test = function(param, param2) {
    console.log(this.name + param + param2);
}

let person = {
    name: "me",
    getName: function() {
        return this.name;
    }
}

let person2 = {
    name: "notme"
}
let getNameCopy = person.getName.bind(person2);
test.call(person, "first", "second");
test.apply(person, ["first", "second"]);

eval("1 + 2 + abc") //3abc
escape(" ")// %20

let func = function greet(...names) {
    names.forEach(name => console.log(name));
}

try {

}
catch (error) {
    throw {
        message: "mesg" + error.message,
        name: "Type"
    }
}

// Object properties
const obj = {
    name: "a"
}
Object.getOwnPropertyDescriptor(obj, "name");
Object.defineProperty(obj, "name", {writable: false});
// Prototypes are objects with base values for an object constructor
function Prot(id) {
    this.id = id;
}
Prot.prototype.val = 5; // add a protoype value which all new objects have

// Own inheritance chain
function child(name,id) {
    Prot.call(this,id);
    this.name = name;
}
child.prototype = Object.create(Prot.prototype);
child.prototype.constructor = child;

// USING CLASSES
class classPerson {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }
}

class classChild extends classPerson {
    constructor(name) {
        super(name);
        
    }
    
}

// Destructing
let [first, second, thrid] = [1,2,3];

// string template literals
literalFunc `asda ${3}`;

function literalFunc(string , ...values) {
    // do somethings with string or values
}