//tictac_connect.js

console.log("Let's play Connect Four!\nUse play(r,c) First argument is Row, Second argument is Column");
const player = "🔴";
const computer = "🟡";
const noplayer = "➖";

let maxMoves = 42;
let currentMove = 0;

// initializing board
let boardobject = {
    // 7 columns
    "0_0": "0", "0_1": "1", "0_2": " 2", "0_3": " 3", "0_4": " 4", "0_5": " 5", "0_6": "6", "0_7": "7",

    // 6 rows
    "1_0": "1", "1_1": noplayer, "1_2": noplayer, "1_3": noplayer, "1_4": noplayer, "1_5": noplayer, "1_6": noplayer, "1_7": noplayer,

    "2_0": "2", "2_1": noplayer, "2_2": noplayer, "2_3": noplayer, "2_4": noplayer, "2_5": noplayer, "2_6": noplayer, "2_7": noplayer,

    "3_0": "3", "3_1": noplayer, "3_2": noplayer, "3_3": noplayer, "3_4": noplayer, "3_5": noplayer, "3_6": noplayer, "3_7": noplayer,

    "4_0": "4", "4_1": noplayer, "4_2": noplayer, "4_3": noplayer, "4_4": noplayer, "4_5": noplayer, "4_6": noplayer, "4_7": noplayer,

    "5_0": "5", "5_1": noplayer, "5_2": noplayer, "5_3": noplayer, "5_4": noplayer, "5_5": noplayer, "5_6": noplayer, "5_7": noplayer,

    "6_0": "6", "6_1": noplayer, "6_2": noplayer, "6_3": noplayer, "6_4": noplayer, "6_5": noplayer, "6_6": noplayer, "6_7": noplayer

}
// checks if the player or computer has won
function victory(x, y, p) {

    // winning cases
    if (
        // checking horizontal forward
        (boardobject[`${x}_${y}`] == p && boardobject[`${x}_${y + 1}`] == p && boardobject[`${x}_${y + 2}`] == p && boardobject[`${x}_${y + 3}`] == p) ||

        // checking horizontal backwards
        (boardobject[`${x}_${y}`] == p && boardobject[`${x}_${y - 1}`] == p && boardobject[`${x}_${y - 2}`] == p && boardobject[`${x}_${y - 3}`] == p) ||

        // checking vertical forwards
        (boardobject[`${x}_${y}`] == p && boardobject[`${x + 1}_${y}`] == p && boardobject[`${x + 2}_${y}`] == p && boardobject[`${x + 3}_${y}`] == p) ||

        // checking vertical backwards
        (boardobject[`${x}_${y}`] == p && boardobject[`${x - 1}_${y}`] == p && boardobject[`${x - 2}_${y}`] == p && boardobject[`${x - 3}_${y}`] == p) ||

        // checking forward diagonal upwards /
        (boardobject[`${x}_${y}`] == p && boardobject[`${x - 1}_${y + 1}`] == p && boardobject[`${x - 2}_${y + 2}`] == p && boardobject[`${x - 3}_${y + 3}`] == p) ||

        // checking forward diagonal backwards /
        (boardobject[`${x}_${y}`] == p && boardobject[`${x + 1}_${y - 1}`] == p && boardobject[`${x + 2}_${y - 2}`] == p && boardobject[`${x + 3}_${y - 3}`] == p) ||

        // checking downward diagonal fowards \
        (boardobject[`${x}_${y}`] == p && boardobject[`${x + 1}_${y + 1}`] == p && boardobject[`${x + 2}_${y + 2}`] == p && boardobject[`${x + 3}_${y + 3}`] == p) ||

        // checking downward diagonal backwards \
        (boardobject[`${x}_${y}`] == p && boardobject[`${x - 1}_${y - 1}`] == p && boardobject[`${x - 2}_${y - 2}`] == p && boardobject[`${x - 3}_${y - 3}`] == p)

    ) {
        // the computer wins
        if (p == computer) {
            console.log(`%cOh no! The computer won :(`, 'color:fuchsia;')
            console.log(`%cuse newGame() to reset`, 'color:fuchsia;')
        } else {
            // the user wins
            console.log(`%c${p} has won!`, 'font-size:30px;color:crimson;')
            console.log(`%cuse newGame() to reset`, 'color:fuchsia;')
        }
        return 1;
    } else {
        console.log("No one has won")
    }
}

// clears board and starts a new game
function newGame() {
    console.clear()
    boardobject = {
        //  7 columns
        "0_0": "0", "0_1": "1", "0_2": " 2", "0_3": " 3", "0_4": " 4", "0_5": " 5", "0_6": "6", "0_7": "7",

        // 6 rows
        "1_0": "1", "1_1": noplayer, "1_2": noplayer, "1_3": noplayer, "1_4": noplayer, "1_5": noplayer, "1_6": noplayer, "1_7": noplayer,

        "2_0": "2", "2_1": noplayer, "2_2": noplayer, "2_3": noplayer, "2_4": noplayer, "2_5": noplayer, "2_6": noplayer, "2_7": noplayer,

        "3_0": "3", "3_1": noplayer, "3_2": noplayer, "3_3": noplayer, "3_4": noplayer, "3_5": noplayer, "3_6": noplayer, "3_7": noplayer,

        "4_0": "4", "4_1": noplayer, "4_2": noplayer, "4_3": noplayer, "4_4": noplayer, "4_5": noplayer, "4_6": noplayer, "4_7": noplayer,

        "5_0": "5", "5_1": noplayer, "5_2": noplayer, "5_3": noplayer, "5_4": noplayer, "5_5": noplayer, "5_6": noplayer, "5_7": noplayer,

        "6_0": "6", "6_1": noplayer, "6_2": noplayer, "6_3": noplayer, "6_4": noplayer, "6_5": noplayer, "6_6": noplayer, "6_7": noplayer

    }
}

// generates the computer's move
function computerTurn() {
    // no more moves
    if (currentMove === 42) {
        console.log("%c Game Tie!", `font-size:40px;color:crimson`)
        return 2;
    }

    // creates an array of available spaces
    let nextMove = []
    for (let key in boardobject) {
        if (boardobject[key] == noplayer) {
            let index = key.split("_");
            let pos = [index[0], index[1]];
            nextMove.push(pos);
        }
    }

    // picks a random space
    let computerMove = nextMove[Math.floor(Math.random() * nextMove.length)];

    // checks if computer move is valid/fills empty space with generated move
    let c = validateMove(computerMove[0], computerMove[1], computer);

    // if there's an invalid move, run the function again
    if (c === 0) {
        computerTurn();
    }

}

// checks if the space the player wants to move is open 
function validateMove(x, y, z) {

    let currentPlayer = z;
    let check = boardobject[`${x}_${y}`]

    // if a space is empty
    if (check == noplayer) {
        currentMove += 1;

        // fill empty space at the given x,y value with the current player's symbol
        boardobject[`${x}_${y}`] = currentPlayer;

        // checks if the current player has won, if not, clear the board and continue
        if (victory(x, y, z)) {
            console.log("%c You Won!", `font-size:30px`)
            return 2;
        } else {
            console.clear();
            return 1;
        }
    } else {
        // else the space at the given x,y value is taken

        // if there are still moves available and the space is taken, the move must have been invalid
        if (currentMove < maxMoves) {
            console.log("%c INVALID MOVE!", `font-size:40px;color:crimson`)
            return 0;
        }

        // if there are no more available spaces, the game is over
        else {
            console.log("%c Game over!", `font-size:40px;color:crimson`)
        }
    }

}

// displays the board and takes in user's x,y value
function play(x, y) {
    // validates x,y input
    let c = validateMove(x, y, player);

    // if validateMove() returns 1 (meaning the player hasn't won) it's now the computers turn
    if (c === 1) {
        computerTurn();
    }
    console.log(x, y);

    // displays current board
    console.log(`%c ${boardobject["0_0"]} ${boardobject["0_1"]} ${boardobject["0_2"]} ${boardobject["0_3"]} ${boardobject["0_4"]} ${boardobject["0_5"]} ${boardobject["0_6"]} ${boardobject["0_7"]}`, 'font-size:30px')

    console.log(`%c ${boardobject["1_0"]} ${boardobject["1_1"]} ${boardobject["1_2"]} ${boardobject["1_3"]} ${boardobject["1_4"]} ${boardobject["1_5"]} ${boardobject["1_6"]} ${boardobject["1_7"]}`, 'font-size:30px')

    console.log(`%c ${boardobject["2_0"]} ${boardobject["2_1"]} ${boardobject["2_2"]} ${boardobject["2_3"]} ${boardobject["2_4"]} ${boardobject["2_5"]} ${boardobject["2_6"]} ${boardobject["2_7"]}`, 'font-size:30px')

    console.log(`%c ${boardobject["3_0"]} ${boardobject["3_1"]} ${boardobject["3_2"]} ${boardobject["3_3"]} ${boardobject["3_4"]} ${boardobject["3_5"]} ${boardobject["3_6"]} ${boardobject["3_7"]}`, 'font-size:30px')

    console.log(`%c ${boardobject["4_0"]} ${boardobject["4_1"]} ${boardobject["4_2"]} ${boardobject["4_3"]} ${boardobject["4_4"]} ${boardobject["4_5"]} ${boardobject["4_6"]} ${boardobject["4_7"]}`, 'font-size:30px')

    console.log(`%c ${boardobject["5_0"]} ${boardobject["5_1"]} ${boardobject["5_2"]} ${boardobject["5_3"]} ${boardobject["5_4"]} ${boardobject["5_5"]} ${boardobject["5_6"]} ${boardobject["5_7"]}`, 'font-size:30px')

    console.log(`%c ${boardobject["6_0"]} ${boardobject["6_1"]} ${boardobject["6_2"]} ${boardobject["6_3"]} ${boardobject["6_4"]} ${boardobject["6_5"]} ${boardobject["6_6"]} ${boardobject["6_7"]}`, 'font-size:30px')

}
