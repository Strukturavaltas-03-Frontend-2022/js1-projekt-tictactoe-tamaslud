"use strict";
let cells = document.querySelectorAll(".cell");

for (let i = 0; i < cells.length; i += 1) {
  cells[i].addEventListener("click", function () {
    console.log("cella: " + i + ", tartalma: " + cells[i].innerHTML);
  });
}

