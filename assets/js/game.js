// Player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Enemy variables
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// Fight function
var fight = function() {

    // Ask player if he wants to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Player accepts the fight
    if(promptFight === "FIGHT" || promptFight === "fight") {

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
    }

    // User skips fight
    else if(promptFight === "SKIP" || promptFight === "skip") {

        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney -= 2;
        }

        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }

    // User provides bad input to option to fight or skip
    else {
        window.alert("You need to pick a valid option. Try again!");
    }
};

// Game execution
window.alert("Welcome to Robot Gladiators!");
fight();
    