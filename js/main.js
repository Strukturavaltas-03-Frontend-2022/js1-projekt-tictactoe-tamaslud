"use strict";
let cells = document.querySelectorAll(".cell");

const marksDefault = ['-','x','o','x','o','x','o','x','o','x']

let marks = ['-','x','o','x','o','x','o','x','o','x']

for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener("click", function () {
        if (cells[i].innerHTML.length < 1 ) {
            let nextMark = marks.pop()
            cells[i].innerHTML = nextMark
            document.querySelector('.nextPlayer').innerHTML = marks.slice(-1)
        }
     
    });
  }

/*
for (let i = 0; i < cells.length; i += 1) {
  cells[i].addEventListener("click", function () {
    console.log("cella: " + i + ", tartalma: " + cells[i].innerHTML);
  });
}
*/
