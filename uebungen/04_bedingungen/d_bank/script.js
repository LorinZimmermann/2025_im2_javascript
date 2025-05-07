/*
* 04.d - Bank
* Du besitzt eine Bank (also eine Geld-Bank, keine Sitz-Bank).
* Als einzige Währungen arbeitest du mit dem Euro, dem Schweizer
* Franken und der schwedischen Krone. Da die drei Währungen
* unterschiedlich formatiert werden müssen, brauchst du eine
* Funktion, die dir das erledigt. Und zwar egal, welcher Wert
* eingegeben wird.
*
* Hier die Formatierungs-Regeln pro Währung.
* (CHF) Schweizer Franken: CHF xx.xx -> Beträge auf zwei Stellen und .05 gerundet
* (EUR) Euro: xx.xx EUR -> Beträge auf 2 Stellen gerundet
* (SEK) Schwedische Krone: xx SEK -> Ohne Nachkomma-Stellen
* */

let amountInput = prompt ("Wie viel Geld hast du? (z.B. 100.50)");

let amount = parseFloat(amountInput);

let currency = prompt("Welche Währung verwendest du? (CHF, EUR, SEK)");


formatMoney(amount, currency);

function formatMoney(amount, currency) {
    if (currency === "CHF") {
        console.log("CHF " + amount.toFixed(2));
        return amount.toFixed(2) + " CHF";
    } else if (currency === "EUR") {
        console.log("EUR " + amount.toFixed(2));
        return amount.toFixed(2) + " EUR";
    } else if (currency === "SEK") {
        console.log("SEK " + Math.round(amount));
        return Math.round(amount) + " SEK";
    } else {
        console.log("Unsupported currency");
        return "Unsupported currency";
    }
}