// an array for the gameboard. Build a board.

const game = (function () {
  let gameArrayVar = ["","","","","","","","",""];

  const ticGameboard=document.getElementById("gameboard");

  const renderBoard = (function () {
    for (let i=0;i<9;i++) {     
    const newDiv=document.createElement("div");
    newDiv.id=i
    newDiv.classList="boardBoxes";
    newDiv.innerText=gameArrayVar[i];
    ticGameboard.appendChild(newDiv);
    };
    });

  const updateBoard = (arrayIndex, number) => {
    gameArrayVar[arrayIndex] = number;
    for (let i=0;i<9;i++) {
    let boardBoxes = document.getElementById(i);
    boardBoxes.innerText=gameArrayVar[i]; 
  };
  }

  const getBoard = () => gameArrayVar;

  const resetBoard = (function () {
    gameArrayVar = ["","","","","","","","",""];

  })
  return {
    updateBoard,
    getBoard,
  renderBoard,
  resetBoard}
})();

game.renderBoard();

// activate player turns


const playerTurn = (function () {
  let announceText = document.getElementById("announcer");
  let boxNumber=1;  
  let whoseTurn=1;
  let board=game.getBoard();

  const updateTurn = (boxNumber) => {
    if(whoseTurn===1 && board[boxNumber]==="") {
      game.updateBoard(boxNumber,"X");
      announceText.innerText="Player Two's turn"
      testWinner();
      whoseTurn=2;

      console.log(whoseTurn);
    }else if(whoseTurn===2 && board[boxNumber]==="") {
      game.updateBoard(boxNumber,"O"); 
      announceText.innerText="Player One's turn"
      testWinner();
      whoseTurn=1;

  }}

  const resetTurn = ()=>{
    whoseTurn=1
  }

  const getTurn = ()=> whoseTurn;

  return {
    updateTurn,
    getTurn,
    resetTurn
  }

})();

// Allow clicks to board

const activateBoard = (function () {

  let turn=playerTurn.getTurn();
  let boxNumber = 0;

  function clicked (e) {
    boxNumber = parseInt(e.target.id);
    makeMove(boxNumber);
  }

  const makeMove = (function (boxNumber) {

  playerTurn.updateTurn(boxNumber);
  game.updateBoard();
  });

  return {
    makeMove,
    clicked
  }})();

  // begin game with button

const beginGame = (function () {
    const startButton = document.getElementById("startBut");
//    let beginGameVar=false;

    const beginNewGame = (function () {
//        if (beginGameVar===false) {
//        beginGameVar=true;
//        console.log("hello")
          for (let i=0;i<9;i++) {
            let targetBox = document.getElementById(i);
            targetBox.addEventListener("click", activateBoard.clicked);
          }
      });

      startButton.addEventListener("click", beginNewGame)

    })();


// a function to build the board grid

// a function factory for the game menu */

const resetGameBut = (function () {
  const resetButton = document.getElementById("resetBut");


  const resetGame = (function () {
    game.resetBoard()
    console.log (game.getBoard())
    game.updateBoard();
    playerTurn.resetTurn();
    })

    resetButton.addEventListener("click", resetGame)

  })();

const testWinner = (function () {
  let announceText = document.getElementById("announcer");
  let boxes=game.getBoard();
  if (boxes[0]==="X" && boxes[1]==="X" && boxes[2]==="X" || boxes[3]==="X" && boxes[4]==="X" && boxes[5]==="X" || boxes[6]==="X" && boxes[7]==="X" && boxes[8]==="X" || boxes[0]==="O" && boxes[1]==="O" && boxes[2]==="O" || boxes[3]==="O" && boxes[4]==="O" && boxes[5]==="O" || boxes[6]==="O" && boxes[7]==="O" && boxes [8]==="O") {
    announceText.innerText=`That's three in a row.\nPlayer ${playerTurn.getTurn()} is Champion!`
  } else if (boxes[0]==="X" && boxes[3]==="X" && boxes[6]==="X" || boxes[1]==="X" && boxes[4]==="X" && boxes[7]==="X" || boxes[2]==="X" && boxes[5]==="X" && boxes [8]==="X" || boxes[0]==="O" && boxes[3]==="O" && boxes[6]==="O" || boxes[1]==="O" && boxes[4]==="O" && boxes[7]==="O" || boxes[2]==="O" && boxes[5]==="O" && boxes [8]==="O") {
  announceText.innerText=`That's a column of three.\nPlayer ${playerTurn.getTurn()} is Champion!`
  } else if (boxes[0]==="X" && boxes[4]==="X" && boxes[8]==="X" || boxes[2]==="X" && boxes[4]==="X" && boxes[6]==="X" || boxes[0]==="O" && boxes[4]==="O" && boxes[8]==="O" || boxes[2]==="O" && boxes[4]==="O" && boxes[6]==="O") {
  announceText.innerText=`That's three diagnoally.\nPlayer ${playerTurn.getTurn()} is Champion!`
  }
})
