/* Uppgift 2 - Operatorer och beräkningar. Av Mikael Emanuelsson, 2026 */

"use strict";

const price = 149;
const quantity = 4;

const totalPrice = price * quantity;
const totalWithVat = totalPrice * 1.25;

console.log("Pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + totalPrice + " kr");
console.log("Totalt inklusive moms: " + totalWithVat + " kr");