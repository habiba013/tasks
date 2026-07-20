console.log("Start");
console.log("Middle");
console.log("End");

function second() {
    console.log("Second Function");
}

function first() {
    console.log("First Function");
    second();
    console.log("First Function End");
}

first();

let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);

function getNumber() {
    return 10;
}

function doubleNumber() {
    let num = getNumber();
    console.log("Double Number:", num * 2);
}

doubleNumber();

console.log("Hello");

setTimeout(() => {
    console.log("World");
}, 2000);

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}

console.log("Loading...");

setTimeout(() => {
    console.log("Done");
}, 3000);

function sendMessage(message) {
    setTimeout(() => {
        console.log(message);
    }, 2000);
}

sendMessage("Message Sent!");

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("End");

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

console.log("3");

console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 0);

console.log("Finish");

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Sara", sayBye);

function calculator(x, y, operation) {
    console.log(operation(x, y));
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

calculator(10, 5, add);
calculator(10, 5, subtract);
calculator(10, 5, multiply);

function loadData(callback) {
    console.log("Loading Data...");

    setTimeout(() => {
        console.log("Data Loaded");
        callback();
    }, 2000);
}

loadData(() => {
    console.log("Processing Data...");
});

function login(callback) {
    console.log("Logging in...");

    setTimeout(() => {
        console.log("Login Successful");
        callback();
    }, 2000);
}

function dashboard() {
    console.log("Welcome to Dashboard");
}

login(dashboard);