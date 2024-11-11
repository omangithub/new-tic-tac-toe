// an array for the gameboard

const game = (function () {
  const gameArrayVar = ["","","","","","","","",""];

  const ticGameboard=document.getElementById("gameboard");

  const renderBoard = (function () {
    for (let i=0;i<9;i++) {
      if(ticGameboard.hasChildNodes===true){
        ticGameboard.removeChild("box"+i)
      }
    const newDiv=document.createElement("div");
    newDiv.id="box"+i
    newDiv.classList="boardBoxes"
    newDiv.innerText=gameArrayVar[i];
    ticGameboard.appendChild(newDiv);
    }
    })

  const getBoard = () => gameArrayVar;

  const ResetBoard = (function () {
    gameArrayVar = ["","","","","","","","",""];

  })
  return {
    getBoard,
  renderBoard,
  ResetBoard}
})();

game.renderBoard();

const activateBoard = (function () {
  boxes = document.querySelectorAll(".boardBoxes");

  function clicked (e) {
    console.log(e);
  const clickedBox = document.getElementById(e.target.id);
  clickedBox.innerText="X";
  }

  boxes.forEach((box) => {box.addEventListener("click", clicked);

  });

})();






// a function to build the board grid

// a function factory for the game menu
