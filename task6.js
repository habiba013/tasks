const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];

const cart = [];

function addToCart(id) {
    const product = products.find(product => product.id === id);

    if (product) {
        cart.push(product);
        console.log(product.name + " added to cart.");
    } else {
        console.log("Product not found.");
    }
}

function removeFromCart(id) {
    const index = cart.findIndex(product => product.id === id);

    if (index !== -1) {
        console.log(cart[index].name + " removed from cart.");
        cart.splice(index, 1);
    } else {
        console.log("Product not found in cart.");
    }
}

function listCart() {
    console.log("Cart Items:");
    cart.forEach(product => {
        console.log(product.name + " - $" + product.price);
    });
}

function calculateTotal() {
    let total = 0;

    cart.forEach(product => {
        total += product.price;
    });

    console.log("Total: $" + total);
}

addToCart(1);
addToCart(2);
listCart();
calculateTotal();
removeFromCart(1);
listCart();
calculateTotal();

const students = [];

function addStudent(name, grades) {
    students.push({
        name,
        grades
    });
}

function calculateAverage(grades) {
    let sum = 0;

    grades.forEach(grade => {
        sum += grade;
    });

    return sum / grades.length;
}

function listStudents() {
    students.forEach(student => {
        console.log(
            student.name,
            student.grades,
            "Average:",
            calculateAverage(student.grades)
        );
    });
}

function filterPassed() {
    console.log("Passed Students:");

    students.forEach(student => {
        if (calculateAverage(student.grades) >= 60) {
            console.log(student.name);
        }
    });
}

addStudent("Ali", [90, 80, 85]);
addStudent("Sara", [70, 60, 75]);
addStudent("Omar", [40, 50, 55]);

listStudents();
filterPassed();