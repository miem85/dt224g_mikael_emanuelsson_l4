/* Uppgift 9 - Sammanhängande program. Av Mikael Emanuelsson, 2026 */

"use strict";

const people = [
    {
        name: "Emelie",
        age: 34,
        city: "Hagfors"
    },
    {
        name: "Anton",
        age: 11,
        city: "Kil"
    },
    {
        name: "Linnea",
        age: 17,
        city: "Arvika"
    }
];

function printPerson(person) {
    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig.");
    }
}

for (let i = 0; i < people.length; i++) {
    printPerson(people[i]);
}