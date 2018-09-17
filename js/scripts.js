// User score
var globalCounter = 0;

// Increment the user score
function incrementScore() {
    globalCounter++;
    updateCount();
}

// Decrement the user score
function decrementScore() {
    globalCounter--;
    updateCount();
}

// Timer to update the position of the buttons every x milliseconds
setInterval(function moveButton() {
    changePosition('red');
    changePosition('blue');
}, 1000);

// Updates the displayed score
function updateCount() {
    document.getElementById("score").innerHTML = globalCounter;
}

// Change the position of the specified button
function changePosition(color) {
    var buttonWidth  = 200;
    var buttonHeight = 68;

    // Get the new positions
    var left = getRandomPosition('x', buttonWidth);
    var top  = getRandomPosition('y', buttonHeight);

    // Change the positions
    var div = document.getElementById(color);
    div.style.left = `${left}px`;
    div.style.top  = `${top}px`;
}

// Get new X position
function getRandomPosition(plane, buttonWidth){
    if (plane === 'x') {
        var windowSize = window.innerWidth;
    } else {
        var windowSize = window.innerHeight;
    }

    var newPosition = getRandomInt(windowSize);
    var endOfButton = newPosition + buttonWidth;

    if (windowSize < endOfButton) {
        var difference = endOfButton - newPosition;
        return newPosition - difference;
    }
    return newPosition;
}

// Get a random int under a max value.
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}