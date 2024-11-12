// an array for the gameboard. Build a board.

const game = (function () {
  const gameArrayVar = ["","","","","","","","",""];

  const ticGameboard=document.getElementById("gameboard");

  const renderBoard = (function () {
    for (let i=0;i<9;i++) {     
    const newDiv=document.createElement("div");
    newDiv.id=i
    newDiv.classList="boardBoxes";
    newDiv.innerText=gameArrayVar[i];
    ticGameboard.appendChild(newDiv);
    }
  })

  const updateBoard = (arrayIndex, number) => {
    for (let i=0;i<9;i++) {
      const boxToRemove = document.getElementById(i);
      const garbage = ticGameboard.removeChild(boxToRemove);
    };
    gameArrayVar[arrayIndex] = number;
    game.renderBoard();
  }

  const getBoard = () => gameArrayVar;

  const ResetBoard = (function () {
    gameArrayVar = ["","","","","","","","",""];

  })
  return {
    updateBoard,
    getBoard,
  renderBoard,
  ResetBoard}
})();

game.renderBoard();

// begin game with button



// activate player turns

// Allow clicks to board

const activateBoard = (function () {

  let whoseTurn=1;

  const boxes = document.querySelectorAll(".boardBoxes");

  function clicked (e) {
  const boxNumber = parseInt(e.target.id);
  if(whoseTurn===1) {
    game.updateBoard(boxNumber,"X");
  }else{
    game.updateBoard(boxNumber,"O");    
  }
  game.renderBoard;
  switchPlayer();
  }

  function switchPlayer () {
    console.log(game.getBoard())
    if (whoseTurn===1) {
      whoseTurn=2;
    }else {
      whoseTurn=1;
    }};

  boxes.forEach((box) => {box.addEventListener("click", clicked);})

  })();



  const beginGame = (function () {
    const startButton = document.getElementById("startBut");
    let beginGameVar=false;
    startButton.addEventListener("click", beginNewGame)
  
    function beginNewGame () {
        if (beginGameVar===false) {
        beginGameVar=true;
        console.log("hello")
        activateBoard.switchPlayer;
      }
    }})();


// a function to build the board grid

// a function factory for the game menu
