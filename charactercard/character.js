const healthValue = document.getElementById("health");
const levelValue = document.getElementById("level");

let currentHealth = 100;
let currentLevel = 5;

const attackedButton = document.getElementById("Attacked");
const levelUpButton = document.getElementById("level-up");

attackedButton.addEventListener("click", () => {
    currentHealth -= 10;
    healthValue.textContent = currentHealth;
    if (currentHealth <= 0) {
        alert("Character died!");
    }
});

levelUpButton.addEventListener("click", () => {
    currentLevel += 1;
    levelValue.textContent = currentLevel;
});