/*
* 01.b - Taktfahrplan
* Bis im Jahr 2070 möchte die Deutsche Bahn auf einen Taktfahrplan,
* also einem System wie in der Schweiz, umstellen, wo alle Züge stündlich
* Fahren. Darauf freust du dich sehr! Jetzt möchtest du aber wissen,
* wie alt du dann überhaupt schon bist. Schreibe dir eine Berechnung dazu.
*
* Merke: Pro Kalenderjahr kannst du zwei verschiedene Alter haben (z.B. 26 und 27).
* Gebe in einem String beide Möglichkeiten in der Konsole aus.
* */

const taktfahrplan_done_year = 2070;
let birth_year = prompt("In welchem Jahr bist du geboren?");

const age1 = taktfahrplan_done_year - birth_year;
const age2 = age1 - 1;

console.log("Zum Zeitpunkt der Einführung des Taktfahrplans bist du " + age1 + " oder " + age2 + " Jahre alt.");
