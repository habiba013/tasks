const products = {
    1: "Laptop",
    2: "Phone",
    3: "Tablet"
};

function getProduct(id) {
    return new Promise((resolve, reject) => {
        if (products[id]) {
            resolve(products[id]);
        } else {
            reject("Product not found");
        }
    });
}

getProduct(2)
    .then(product => console.log(product))
    .catch(error => console.log(error));

function calculateShipping(weight) {
    return new Promise((resolve, reject) => {
        if (weight > 0) {
            resolve(`Shipping cost: ${weight * 5}`);
        } else {
            reject("Invalid weight");
        }
    });
}

calculateShipping(10)
    .then(cost => console.log(cost))
    .catch(error => console.log(error));

function sendVerificationEmail(email) {
    return new Promise((resolve) => {
        console.log("Sending verification email...");
        setTimeout(() => {
            console.log("Email sent successfully");
            resolve();
        }, 2000);
    });
}

async function registerUser(name, email) {
    try {
        if (!name || !email) {
            throw "Invalid user data";
        }

        await sendVerificationEmail(email);
        console.log("User registered successfully");
    } catch (error) {
        console.log(error);
    }
}

registerUser("Esraa", "esraa@gmail.com");

async function getUserProfile(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw "User not found";
        }

        const user = await response.json();

        console.log("Name:", user.name);
        console.log("Email:", user.email);
    } catch (error) {
        console.log(error);
    }
}

getUserProfile(1);