/*-------------------------------- Constants --------------------------------*/
const choices = ['X', 'O']


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
// console.log(sqr);
const messageEl = document.querySelector('.message')
// console.log(message);
/*----------------------------- Event Listeners -----------------------------*/


// document.getElementById("rock").addEventListener("click", play)
// document.getElementById("paper").addEventListener("click", play)
// document.getElementById("scissors").addEventListener("click", play)


/*-------------------------------- Functions --------------------------------*/

// function init() 

// render()

 board = [null, null, null, null, null, null, null, null, null]

 turn = 1

 winner = false

 tie = false

function updateBoard() {
    for (i = 0; i < board.length; i++) {
        let currentSqr = squareEls[i]
        console.log(currentSqr);
        currentSqr.textContent = ""
       if (board[i] === -1){
            currentSqr.textContent = "O" 
        } else if (board[i] === 1) {
            currentSqr.textContent = "X"
        }
    }     
}

updateBoard()


// function updateMesaqge() {
//     return `${winner} && ${tie} === false ? ${turn} :
      
// }