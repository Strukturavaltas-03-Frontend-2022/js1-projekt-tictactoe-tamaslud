"use strict";
let cells = document.querySelectorAll(".cell");
let gameEnded = false;
const marksDefault = "-xoxoxoxox";
let marks = marksDefault.split("");
let boardArray = Array(9);
const clusters = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function initBoard() {
  gameEnded = false;
  marks = marksDefault.split("");
  document.querySelector(".nextPlayer").innerHTML = `${marks.slice(-1)} player's turn`;
  boardArray = Array(9);

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].innerHTML = "";
  };

  activateBoard();
  
}

function activateBoard(){
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener("click", function () {
      if (cells[i].innerHTML.length < 1 && !gameEnded) {
        let nextMark = marks.pop();
        cells[i].innerHTML = nextMark;
        boardArray[i] = nextMark;
        document.querySelector(".nextPlayer").innerHTML = `${marks.slice(-1)} player's turn`;
        checkWinner()
      }
    }
    );
  }
}


document.querySelector(".newgameBtn").addEventListener("click", function () {
  initBoard();
});


function checkWinner() {
  let result = "";
  if (marks.length == 1) {
    result = "Drawn game!";
    document.querySelector(".nextPlayer").innerHTML = `${result}`;
  }
  for (const cluster of clusters) {
    let triplet = [];
    for (const i of cluster) {
      triplet.push(boardArray[i]);
    }
    
    if (triplet.every((i) => i === "o")) {
      result = "Player 'o' won the game!";
      document.querySelector(".nextPlayer").innerHTML = `${result}`;
      gameEnded = true;
      
    }
    if (triplet.every((i) => i === "x")) {
      result = "Player 'x' won the game!";
      document.querySelector(".nextPlayer").innerHTML = `${result}`;
      gameEnded = true;
    }
   
  }

  return result;
}

initBoard();
