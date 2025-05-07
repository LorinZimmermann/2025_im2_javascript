/*
* 01.a - Heat
* Du liest eine amerikanische Zeitung und siehst dort, dass
* es letzten Sommer in LA 104 Fahrenheit warm war. Damit kannst
* du nichts anfangen. Schreibe eine Berechnung, die dir das umrechnet.
* Schreibe auch noch eine Berechnung, die dir das umgekehrte macht, also die
* 33 Grad die es hier in St. Gallen war, in Fahrenheit umrechnet.
*
* Quelle: https://www.fahrenheit-umrechnen.de/
* */

// Berechnung LA
const fahrenheit_in_la = 104;

// Berechnung St. Gallen
const degrees_in_stgallen = 33;

const fahrenheit_to_celsius = fahrenheit_in_la - 32;
const celsius_to_fahrenheit = degrees_in_stgallen + 32;

console.log("In LA waren es " + fahrenheit_in_la + "°F, was " + fahrenheit_to_celsius + "°C entspricht.");
console.log("In St. Gallen waren es " + degrees_in_stgallen + "°C, was " + celsius_to_fahrenheit + "°F entspricht.");