console.log('hi script.js')

let password = prompt("Bitte geben Sie Ihr Passwort ein:");
let username = prompt("Bitte geben Sie Ihren Benutzernamen ein:");

checkPassword(password, 12);
checkPassword(username, 8)

function checkPassword(pw, pwLength) {
    if (pw.length > pwLength) {
        console.log("Das Wort ist lang genug.");
        } else {
            console.log("Das Wort ist zu kurz.");
        }
}