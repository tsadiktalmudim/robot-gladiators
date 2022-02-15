var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    if (promptFight === "fight" || promptFight === "FIGHT")
        enemyHealth = enemyHealth - playerAttack;

    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")

    } else {
        window.alert(enemyName + " stil has " + enemyHealth + " health left.");
    }
    playerHealth = playerHealth - enemyAttack
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaning."
    )
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
            else {
                fight();
            }
        }
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }

};
if (playerHealth > 0) {
    console.log("Your player is still alive!")
};

fight();