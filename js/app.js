/*-------------------------------- Constants --------------------------------*/
const choices = ['X', 'O']

winningCombos = [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.querySelector('#message')
console.log(messageEl);

const boardEl = document.querySelector('.board')
console.log(boardEl);

const resetBtnEl = document.querySelector('.resetBtn')

/*----------------------------- Event Listeners -----------------------------*/

resetBtnEl.addEventListener("click", init)
console.log(resetBtnEl);

boardEl.addEventListener("click", handleClick)


/*-------------------------------- Functions --------------------------------*/



function init() {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = false
    tie = false
    render()
}


function render(){
    updateBoard()
    updateMessage()
}

init()

function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === -1) {
            squareEls[i].innerHTML = "O" 
            console.log(squareEls[i]);
        } else if (board[i] === 1) {
            squareEls[i].innerHTML = "X"
        } else {    
        console.log(board);
            squareEls[i].innerHTML = ""
        }
    }     
}


function updateMessage() {
  if (winner === false && tie === false)  {
    messageEl.innerHTML = "Player turn"
} else if (winner === false && tie === true) {
    messageEl.innerHTML = "It's a tie"
} else {
    messageEl.innerHTML = "Congrats!"
}
} 


function handleClick(evt) {
    const sqIdx = Number(evt.target.id.slice(2))
    console.log(sqIdx);
if (board[sqIdx] !== null) {
    return 
} else if (winner === true) {
    return
}
    placePiece(sqIdx)
    checkForTie()
    checkForWinner()
    switchPlayerTurn()
    render()
}


function placePiece(idx) {
    board[idx] = turn
}


function checkForTie() {
    if (!board.includes(null)) {
    return tie = true
} 
}


function checkForWinner() {
          if(board[0] + board[1] + board[2] === 3 || board[0] + board[1] + board[2] === -3) {
            winner = true
          } 
          if (board[3] + board[4] + board[5] === 3 || board[0] + board[1] + board[2] === -3) {
            winner = true
          }
          if(board[6] + board[7] + board[8] === 3 || board[6] + board[7] + board[8] === -3) {
            winner = true
          }
          if(board[0] + board[3] + board[6] === 3 || board[0] + board[3] + board[6] === -3) {
            winner = true
          }
          if(board[1] + board[4] + board[7] === 3 || board[1] + board[4] + board[7] === -3) {
            winner = true
          }
          if(board[2] + board[5] + board[8] === 3 || board[2] + board[5] + board[8] === -3) {
            winner = true
          }
          if(board[0] + board[4] + board[8] === 3 || board[0] + board[4] + board[8] === -3) {
            winner = true
          }   
            if(board[6] + board[4] + board[2] === 3 || board[6] + board[4] + board[2] === -3) {
            winner = true
          }
    }
         

    function switchPlayerTurn() {
        if(winner === true){
        return
    }
        else {
            turn *= -1
        }
    }

