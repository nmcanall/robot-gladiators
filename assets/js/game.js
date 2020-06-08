// Helper function to allow fight/skip functionality
var fightOrSkip = function() {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // Check for valid input
    if(!promptFight) {
        debugger;
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    return false;
}

// Fight function
var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        // Fight or skip this round?
        if(fightOrSkip()) {
            break;
        }
  
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );
  
        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');
  
            // award player money for winning
            playerInfo.money = playerInfo.money + 20;
  
            // leave while() loop since enemy is dead
            break;
        } 
        else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }
  
        // remove players's health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );
  
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
        } 
        else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};

// function to start a new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    // Cycle through all enemies in the array
    for (var i = 0; i < enemyInfo.length; i++) {

        // While the player is allive, fight
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            // Enter shop if we're not at the last enemy
            if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if(storeConfirm) {
                    shop();
                }
            }
        }

        // If the player is dead, quit the game
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // End the game (for now...)
    endGame();
};

// Logic to end the full game (does not allow repeat)
var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // restart the game
        startGame();
    } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

// Shop function
var shop = function() {
    var shopOptionPrompt = window.prompt("Press 1 to REFILL your health.  Press 2 to UPGRADE your attack.  Press 3 to LEAVE the store.");
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch(shopOptionPrompt) {

        // Refill health
        case 1:
            playerInfo.refillHealth();
            break;

        // Upgrade attack points
        case 2:
            playerInfo.upgradeAttack();
            break;

        // Leave the shop
        case 3:
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;

        // Invalid input
        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
}

// Helper function to generate random number between 40 and 60
var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Helper function to set the name 
var getPlayerName = function() {
    var name = "";
    while(name === "" || name === null) {
        name = window.prompt("What is your robot's name?");
    }
    return name;
}

// Player object
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    }, 
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } 
        else {
            window.alert("You don't have enough money!");
        }
    }, 
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } 
        else {
            window.alert("You don't have enough money!");
        }
    }
}

// Enemy variables
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// Start the game
startGame();