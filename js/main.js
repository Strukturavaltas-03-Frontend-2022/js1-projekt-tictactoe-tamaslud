"use strict";
let cells = document.querySelectorAll(".cell");

const marksDefault = "-xoxoxoxox";
let marks = marksDefault.split('');


for (let i = 0; i < cells.length; i += 1) {
  cells[i].addEventListener("click", function () {
    if (cells[i].innerHTML.length < 1) {
      let nextMark = marks.pop();
      cells[i].innerHTML = nextMark;
      document.querySelector(".nextPlayer").innerHTML = marks.slice(-1);
      checkWinner();
      checkDrawn();
    }
  });
}

document.querySelector(".newgameBtn").addEventListener("click", function () {
  initBoard();
});

function initBoard() {
  console.log("board initialization");
  marks = marksDefault.split('');
  document.querySelector(".nextPlayer").innerHTML = marks.slice(-1);
  for (let i = 0; i < cells.length; i += 1) {
    (cells[i].innerHTML = '');
    };

}

function checkWinner() {
  console.log("checking win situation");
}

function checkDrawn() {
  console.log("checking drawn situation");
}

/*
for (let i = 0; i < cells.length; i += 1) {
  cells[i].addEventListener("click", function () {
    console.log("cella: " + i + ", tartalma: " + cells[i].innerHTML);
  });
}
*/
