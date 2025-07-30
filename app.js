// Exercise 1 Section
function printOdds(count) {
    if (count < 0) {
        for (let i = -1; i >= count; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    } else {
        for (let i = 1; i <= count; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
}


printOdds(-10); 
printOdds(10); 

// Exercise 2 Section
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name} you can drive!`;
    let tooYoundMsg = `Sorry ${name}, you need to wait ${16 - age} year(s) until you can drive.`;

    if (age < 16) {
        console.log(tooYoundMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

checkAge("Noah", 27);

// Exercise 3 Section
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant(11, 1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(-1, -11));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -11));
console.log(checkQuadrant(-11, 0));
console.log(checkQuadrant(0, 0));

// Exercise 4 Section
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b  && c + b > a;
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle`;
    }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

// Exercise 5 Section
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = currentAvg * periodLength;
    let statusMsg;
    let suggestedAvg;
    if (remainingDays <= 0) {
        suggestedAvg = `0 GB - you are out of data!`
    } else {
        suggestedAvg = `${remainingData.toFixed(2)} GB`
    }
    

    console.log(`${day} days(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day`);

    let overUnderAmount = projectedUsage - planLimit;
    let projectedStatus = overUnderAmount > 0 ? 
        `you will exceed your data plan by ${overUnderAmount.toFixed(2)} GB.` :
        `you will be under your data plan by ${Math.abs(overUnderAmount).toFixed(2)} GB.`;


    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use 
        (${currentAvg.toFixed(2)} GB/day), 
        continuing this  usage, ${projectedStatus} from your data limit.
        To stay below your data plan, use no more than 
        ${suggestedAvg}`);
}

dataUsageFeedback(100, 15, 58);
