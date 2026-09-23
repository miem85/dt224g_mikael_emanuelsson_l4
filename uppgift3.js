/* Uppgift 3 - Villkor. Av Mikael Emanuelsson, 2026 */

"use strict";

const age = 40;

if (age < 18) {
    console.log("Barn");
} else if (age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}