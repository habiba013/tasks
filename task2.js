function processOrders(orders) {
    let totalRevenue = 0;
    let successfulOrders = 0;
    let processedOrdersCount = 0;
    let skippedInARow = 0;
    let stockFailures = 0;
    let stopMessage = "";

    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        processedOrdersCount++;

        let isCancelledOrInvalid = order.status === "cancelled" || order.status === "invalid";
        let isStockMissing = !order.stockAvailable;

        if (isCancelledOrInvalid || isStockMissing) {
            skippedInARow++;
            if (isStockMissing) {
                stockFailures++;
            }

            if (skippedInARow === 3 || stockFailures === 3) {
                stopMessage = "System stopped due to critical failure";
                break;
            }
            continue;
        }

        if (order.status === "valid" && order.stockAvailable) {
            totalRevenue += order.amount;
            successfulOrders++;
            skippedInARow = 0;
        }
    }

    let result = {
        totalRevenue: totalRevenue,
        successfulOrders: successfulOrders,
        processedOrdersCount: processedOrdersCount
    };

    if (stopMessage !== "") {
        result.stopMessage = stopMessage;
    }

    return result;
}

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function getNumbersGreaterThan(arr, value) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log("--- Project 1: Order Processing Test ---");
let testOrders = [
    { id: 1, status: "valid", stockAvailable: true, amount: 100 },
    { id: 2, status: "valid", stockAvailable: true, amount: 200 },
    { id: 3, status: "cancelled", stockAvailable: true, amount: 50 },
    { id: 4, status: "valid", stockAvailable: false, amount: 150 },
    { id: 5, status: "invalid", stockAvailable: true, amount: 300 }
];
console.log(processOrders(testOrders));
console.log("\n");

console.log("--- Section 2: Coding Problems Test ---");
console.log("Is [1, 2, 3, 5] sorted?", isSorted([1, 2, 3, 5]));
console.log("Is [1, 5, 3, 4] sorted?", isSorted([1, 5, 3, 4]));
console.log("Numbers greater than 5 in [2, 8, 4, 12, 5, 7]:", getNumbersGreaterThan([2, 8, 4, 12, 5, 7], 5));