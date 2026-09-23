/* Uppgift 5 - Arrayer. Av Mikael Emanuelsson, 2026 */

"use strict";

const foods = ["Tacos", "Lasagne", "Köttbullar", "Pizza", "Kycklinggryta"];

console.log(foods);
console.log(foods[0]);
console.log(foods[foods.length - 1]);

foods.push("Korvstroganoff");
foods.shift();

console.log(foods);