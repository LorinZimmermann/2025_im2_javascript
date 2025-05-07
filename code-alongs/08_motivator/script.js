const nameField = document.querySelector("#firstname");
const skillField = document.querySelector("#skills");
const skillInput = document.querySelector("#add");
let skills = [];

function getAndSetName() {
    let nameLocalStorage = localStorage.getItem("name");
    if (nameLocalStorage) {
        nameField.innerText = nameLocalStorage;
    } else {
        let nameInput = prompt("gib Namen an:");
        nameField.innerText = nameInput;
        localStorage.setItem("name", nameInput);
    }
}

function getSkills() {
    skillInput.addEventListener("change", function () {
        skills.push(skillInput.value);
        skillInput.value = "";
    });
}

function setSkills() {
    skillField.innerHTML = "";
    skills.forEach(skill => {
        let span = document.createElement("span");
        span.innerText = skill;
        skillField.append(span);
    });
}

getAndSetName();
getSkills();