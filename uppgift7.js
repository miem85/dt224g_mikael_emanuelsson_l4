/* Uppgift 7 - Arrayer och funktioner. Av Mikael Emanuelsson, 2026 */

"use strict";

const numbers = [17, 6, 31, 9, 24, 13, 42];

function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

console.log("Summan är " + calculateSum(numbers));