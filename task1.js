// Challenge 1
let userPIN = "1234";
let currentBalance = 1000;
let attempts = 0;
let isLocked = false;

function runATM(enteredPIN, operation, amount, newPIN = "") {
    if (isLocked) {
        console.log("❌ Account is locked due to 3 incorrect PIN attempts.");
        return;
    }
    if (enteredPIN !== userPIN) {
        attempts++;
        console.log(`❌ Incorrect PIN! Attempts left: ${3 - attempts}`);
        if (attempts >= 3) {
            isLocked = true;
            console.log("🔒 Your account has been locked!");
        }
        return;
    }
    attempts = 0;
    console.log("🔑 Access Granted!");
    switch (operation.toLowerCase()) {
        case "check balance":
            console.log(`💰 Current Balance: $${currentBalance}`);
            break;
        case "withdraw":
            if (amount <= 0) {
                console.log("❌ Error: Withdrawal amount must be greater than zero.");
            } else if (amount > currentBalance) {
                console.log("❌ Error: Insufficient balance!");
            } else {
                currentBalance -= amount;
                console.log(`✅ Success: Withdrew $${amount}. New Balance: $${currentBalance}`);
            }
            break;
        case "deposit":
            if (amount > 0) {
                currentBalance += amount;
                console.log(`✅ Success: Deposited $${amount}. New Balance: $${currentBalance}`);
            } else {
                console.log("❌ Error: Deposit amount must be greater than zero.");
            }
            break;
        case "change pin":
            if (newPIN.length === 4 && !isNaN(newPIN)) {
                userPIN = newPIN;
                console.log("✅ Success: PIN changed successfully!");
            } else {
                console.log("❌ Error: New PIN must be exactly 4 digits.");
            }
            break;
        default:
            console.log("❌ Error: Invalid operation selected.");
    }
}

console.log("--- Challenge 1: ATM System Test ---");
runATM("1111", "check balance");
runATM("1234", "check balance");
runATM("1234", "withdraw", 1200);
runATM("1234", "withdraw", 200);
runATM("1234", "deposit", 500);
runATM("1234", "change pin", 0, "5678");
console.log("\n");


// Challenge 2
function checkout(customerName, category, price, quantity, couponCode, paymentMethod) {
    console.log(`--- Invoice for ${customerName} ---`);
    let subtotal = price * quantity;
    let discount = 0;
    if (category.toLowerCase() === "electronics") {
        discount += subtotal * 0.10;
    } else if (category.toLowerCase() === "clothes") {
        discount += subtotal * 0.20;
    }
    if (couponCode === "SAVE15") {
        discount += subtotal * 0.15;
    }
    if (paymentMethod.toLowerCase() === "credit") {
        discount += subtotal * 0.05;
    }
    let afterDiscount = subtotal - discount;
    if (afterDiscount < 0) {
        afterDiscount = 0;
    }
    let vat = afterDiscount * 0.14;
    let finalBill = afterDiscount + vat;
    console.log(`Subtotal: $${subtotal}`);
    console.log(`Total Discounts Applied: -$${discount}`);
    console.log(`VAT (14%): $${vat}`);
    console.log(`Total Final Bill: $${finalBill.toFixed(2)}`);
}

console.log("--- Challenge 2: Checkout System Test ---");
checkout("Habiba", "Electronics", 500, 2, "SAVE15", "credit");
console.log("\n");


// Challenge 3
function getStudentStatus(name, attendance, midterm, finalExam, assignment, isTuitionPaid) {
    console.log(`--- Portal Report for ${name} ---`);
    if (!isTuitionPaid) {
        console.log("❌ Access Denied: Please pay your tuition fees to view results.");
        return;
    }
    if (attendance < 75) {
        console.log("❌ Status: FAILED (Attendance below 75%)");
        return;
    }
    let totalScore = midterm + assignment + finalExam;
    let letterGrade = "";
    let status = "PASS";
    if (totalScore >= 90) {
        letterGrade = "A";
    } else if (totalScore >= 80) {
        letterGrade = "B";
    } else if (totalScore >= 70) {
        letterGrade = "C";
    } else if (totalScore >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
        status = "FAIL";
    }
    console.log(`Total Score: ${totalScore}/100`);
    console.log(`Grade: ${letterGrade}`);
    console.log(`Status: ${status}`);
    if (totalScore >= 95 && attendance >= 90) {
        console.log("🎉 Outstanding! You are eligible for the Academic Scholarship next semester!");
    }
}

console.log("--- Challenge 3: Student Portal Test ---");
getStudentStatus("Ali", 80, 20, 50, 25, true);
getStudentStatus("Omar", 70, 20, 50, 25, true);
getStudentStatus("Sara", 95, 20, 50, 28, false);
getStudentStatus("Habiba", 95, 20, 50, 28, true);
console.log("\n");


function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function strStr(haystack, needle) {
    return haystack.indexOf(needle);
}