/*
* 06.b - Dimmer
* Du hast keine Lust mehr auf MMP und gehst mit einer
* Freundin in Ihr Geschäft mit und schnupperst bei Ihr
* als Elektro-Installateurin. Als Tages-Auftrag musst du
* einen Dimmer bauen.
*
* Du hast einen Dimmer (#dimmer), der Werte von 0 - 50 annehmen kann.
* Ausserdem hast du eine Lampenhalterung (#light).
* Bei 0 soll darin keine Glühbirne angezeigt werden.
* Zwischen 1 und 10 soll 1 Lampe angezeigt werden: 💡
* Zwischen 11 und 20 sollen 2 Lampen angezeigt werden: 💡💡
* Zwischen 21 und 30 sollen 3 Lampen angezeigt werden: 💡💡💡
* Zwischen 31 und 40 sollen 4 Lampen angezeigt werden: 💡💡💡💡
* Zwischen 41 und 50 sollen 5 Lampen angezeigt werden: 💡💡💡💡💡
* */

const dimmer = document.querySelector ('#dimmer');
const light = document.querySelector ('#light')

dimmer.addEventListener('input', () => {
    const dimmerValue = parseInt(dimmer.value);
    console.log('Dimmer-Wert:', dimmerValue);

    if (dimmerValue === 0) {
        light.innerText = '';
    } else if (dimmerValue > 0 && dimmerValue <= 10) {
        light.innerText = '💡';
    } else if (dimmerValue > 10 && dimmerValue <= 20) {
        light.innerText = '💡💡';
    } else if (dimmerValue > 20 && dimmerValue <= 30) {
        light.innerText = '💡💡💡';
    } else if (dimmerValue > 30 && dimmerValue <= 40) {
        light.innerText = '💡💡💡💡';
    } else if (dimmerValue > 40 && dimmerValue <= 50) {
        light.innerText = '💡💡💡💡💡';
    }
});