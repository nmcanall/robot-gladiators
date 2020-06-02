// Player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

// Enemy variables
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// Fight function
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    // Player attacks enemy
    enemyHealth -= playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health points.");

    // Enemy attacks player
    playerHealth -= enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health points.");

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } 
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

// Game execution
fight();
    