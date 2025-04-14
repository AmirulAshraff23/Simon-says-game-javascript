let playerSequence = [];



//Declaring and setting up start and reset buttons

const gameStartButton = document.getElementById("GameStart");
const gameResetButton = document.getElementById("GameReset");

gameStartButton.addEventListener("click", function () {

    gameStartFunction(); // gameStart function called from below
})

gameResetButton.addEventListener("click", function () {

    resetPlayerInput(); // resetPlayerInput() function called from below
})



//Declaring and setting up player buttons

const buttonUp = document.getElementById("ButtonUp");
const buttonDown = document.getElementById("ButtonDown");
const buttonRight = document.getElementById("ButtonRight");
const buttonLeft = document.getElementById("ButtonLeft");

const playerInputDiv = document.getElementById("playerInput");

buttonUp.addEventListener("click", function () {
    playerSequence.push("Up"); //My guess is that .push basically means display?
    displayPlayerInput(); // displayPlayerInput function called from below
})

buttonDown.addEventListener("click", function () {
    playerSequence.push("Down");
    displayPlayerInput(); // displayPlayerInput function called from below
})

buttonRight.addEventListener("click", function () {
    playerSequence.push("Right");
    displayPlayerInput(); // displayPlayerInput function called from below
})

buttonLeft.addEventListener("click", function () {
    playerSequence.push("Left");
    displayPlayerInput(); // displayPlayerInput function called from below
})

//functions//

function gameStartFunction() {
    //this function will start the game
    // I will add functions such starting Simon's sequence

}

function displayPlayerInput() {
    //this function will show what the user has input so far
    playerInputDiv.innerHTML = "<p>Your input: " + playerSequence.join(" ") + "</p>";

    //playerInputDiv.innetHTML basically means that this function is able to access html divs
    //playerSequence.join(" ") is for displaying the player sequence along with a space in the middle
}

function resetPlayerInput() {
    //this function will reset the player input
    // it empties the array back to playerSequence = [];
    playerSequence = [];

}