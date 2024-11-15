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

  const getBoard = (function() {
    return gameArrayVar;
  })

  const resetBoard = (function () {
    gameArrayVar = ["","","","","","","","",""];
    for (let i=0;i<9;i++) {
      game.updateBoard(i,"");

    } 
    playerTurn.resetTurn();
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
    board=game.getBoard();
    if(whoseTurn===1 && board[boxNumber]==="") {

      game.updateBoard(boxNumber,"X");
      announceText.innerText=`${changePlayerNames.playerMakingMove()}'s turn`
      testWinner();
      if(whoseTurn!==3){
      whoseTurn=2;
      }
    }else if(whoseTurn===2 && board[boxNumber]==="") {
      game.updateBoard(boxNumber,"O"); 
      announceText.innerText=`${changePlayerNames.playerMakingMove()}'s turn`
      testWinner();
      if(whoseTurn!==3){
      whoseTurn=1;
      }
    }else if(whoseTurn===3){
      announceText.innerText="Reset the board to begin a new game." 
    }
  }

  const winnerAnounced = (function () {
    whoseTurn=3
  })

  const resetTurn = (function () {
    whoseTurn=1
  })

  const getTurn = ()=> whoseTurn;

  return {
    winnerAnounced,
    updateTurn,
    getTurn,
    resetTurn
  }

})();

// Allow clicks to board

const activateBoard = (function () {

  let boxNumber = 0;

  function clicked (e) {
    boxNumber = parseInt(e.target.id);
    makeMove(boxNumber);
  }

  const makeMove = (function (boxNumber) {

  playerTurn.updateTurn(boxNumber);
  });

  const resetboxNumber = (function() {
    boxnumber = 0;
  })

  return {
    makeMove,
    clicked,
  }})();

  // begin game with button

const beginGame = (function () {
    const startButton = document.getElementById("startBut");
    let announceText = document.getElementById("announcer");
    let board=game.getBoard();

    const beginNewGame = (function () {

      if (playerTurn.getTurn!==3 && !board.includes("X") && !board.includes("O")) {
          for (let i=0;i<9;i++) {
            let targetBox = document.getElementById(i);
            targetBox.addEventListener("click", activateBoard.clicked);
          }
      announceText.innerText="Play begins with Player One"
      }});

      startButton.addEventListener("click", beginNewGame)

    })();


// a function to build the board grid

// a function factory for the game menu */

const resetGameBut = (function () {
  const resetButton = document.getElementById("resetBut");
  let announceText = document.getElementById("announcer");


  const resetGame = (function () {
    game.resetBoard();
    announceText.innerText="The game is reset.\nPlay starts with player 1." 
    })

    resetButton.addEventListener("click", resetGame)

  })();

function testWinner () {
  let announceText = document.getElementById("announcer");
  let boxes=game.getBoard();
  let gameEnd=playerTurn.getTurn();

  if (gameEnd!==3) {
  if (boxes[0]==="X" && boxes[1]==="X" && boxes[2]==="X" || boxes[3]==="X" && boxes[4]==="X" && boxes[5]==="X" || boxes[6]==="X" && boxes[7]==="X" && boxes[8]==="X" || boxes[0]==="O" && boxes[1]==="O" && boxes[2]==="O" || boxes[3]==="O" && boxes[4]==="O" && boxes[5]==="O" || boxes[6]==="O" && boxes[7]==="O" && boxes [8]==="O") {
  announceText.innerText=`That's three in a row.\n${changePlayerNames.playerMakingMove()} is Champion!`
  playerTurn.winnerAnounced();
  } else if (boxes[0]==="X" && boxes[3]==="X" && boxes[6]==="X" || boxes[1]==="X" && boxes[4]==="X" && boxes[7]==="X" || boxes[2]==="X" && boxes[5]==="X" && boxes [8]==="X" || boxes[0]==="O" && boxes[3]==="O" && boxes[6]==="O" || boxes[1]==="O" && boxes[4]==="O" && boxes[7]==="O" || boxes[2]==="O" && boxes[5]==="O" && boxes [8]==="O") {
  announceText.innerText=`That's a column of three.\n${changePlayerNames.playerMakingMove()} is Champion!`
  playerTurn.winnerAnounced();
  } else if (boxes[0]==="X" && boxes[4]==="X" && boxes[8]==="X" || boxes[2]==="X" && boxes[4]==="X" && boxes[6]==="X" || boxes[0]==="O" && boxes[4]==="O" && boxes[8]==="O" || boxes[2]==="O" && boxes[4]==="O" && boxes[6]==="O") {
  announceText.innerText=`That's three diagnoally.\n${changePlayerNames.playerMakingMove()} is Champion!`
  playerTurn.winnerAnounced();

  }}

};

const changePlayerNames = (function() {
  let announceText = document.getElementById("announcer");
  let playerOneButton = document.getElementById("buttonPlayer1");
  let playerTwoButton = document.getElementById("buttonPlayer2");
  let player1Text=document.getElementById("player1");
  let player2Text=document.getElementById("player2");
  let playerOneName = "Player One";
  let playerTwoName = "Player Two"
  let turn = playerTurn.getTurn();

  const playerMakingMove = (function () {
    if (turn===1){
      return playerOneName;
    } else if (turn===2) {
      return playerTwoName;
    }
  })

  const changePl1Name = (function() {
    playerOneName = window.prompt("Please enter your desired name for player 1", "Player One");
    if (playerOneName.length<15) {
      player1Text.innerText=playerOneName;
      announceText.innerText=`Player One has chosen the name "${playerOneName}".`
    }else{
      announceText.innerText="Player One chose a name that is too long."
    }
  })

  const changePl2Name = (function() {
    playerTwoName = window.prompt("Please enter your desired name for player 1", "Player Two");
    if (playerTwoName.length<15) {
      player2Text.innerText=playerTwoName;
      announceText.innerText=`Player Two has chosen the name "${playerTwoName}".`
    }else{
      announceText.innerText="Player Two chose a name that is too long."
    }
  })

  playerOneButton.addEventListener("click", changePl1Name);
  playerTwoButton.addEventListener("click", changePl2Name);

  return {
    playerMakingMove
  }
})();
