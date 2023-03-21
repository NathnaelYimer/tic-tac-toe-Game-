const boxes = Array.from(document.getElementsByClassName("box"));
const board = document.getElementById("board");
const playAgainBtn = document.getElementById("playAgainBtn");
const Word = document.getElementById("Word");
const empty = [null, null, null, null, null, null, null, null, null];
const forO = "O";
const forX = "X";
let nowPlayed = forO;

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let stylebox = "";
    if (index < 3) {
      stylebox += `border-bottom: 3px solid #290719 ;`;
    }
    if (index % 3 === 0) {
      stylebox += `border-right: 3px solid #290719 ;`;
    }
    if (index % 3 === 2) {
      stylebox += `border-left: 3px solid #290719 ;`;
    }
    if (index > 5) {
      stylebox += `border-top: 3px solid #290719 ;`;
    }
    box.style = stylebox;

    box.addEventListener("click", press);
  });
};

function press(e) {
  const id = e.target.id;
  if (!empty[id]) {
    empty[id] = nowPlayed;
    e.target.innerText = nowPlayed;
    if (iswon(nowPlayed)) {
      Word.innerHTML = `${nowPlayed} is the winner`;
      return;
    }
    nowPlayed = nowPlayed === forO ? forX : forO;
  }
}
const iswon = (player1or2) => {
  if (empty[0] === player1or2) {
    if (empty[1] === player1or2 && empty[2] === player1or2) {
      console.log(`${player1or2} wins up top`);
      return true;
    }
    if (empty[3] === player1or2 && empty[6] === player1or2) {
      console.log(`${player1or2} wins on the left`);
      return true;
    }
    if (empty[4] === player1or2 && empty[8] === player1or2) {
      console.log(`${player1or2} wins on the diagonal`);
      return true;
    }
  }
  if (empty[8] === player1or2) {
    if (empty[2] === player1or2 && empty[5] === player1or2) {
      console.log(`${player1or2} wins on the right`);
      return true;
    }
    if (empty[7] === player1or2 && empty[6] === player1or2) {
      console.log(`${player1or2} wins on the bottom`);
      return true;
    }
  }
  if (empty[4] === player1or2) {
    if (empty[3] === player1or2 && empty[5] === player1or2) {
      console.log(`${player1or2} wins on the middle horizontal`);
      return true;
    }
    if (empty[1] === player1or2 && empty[7] === player1or2) {
      console.log(`${player1or2} wins on the middle vertical`);
      return true;
    }
  }
};
function checkfortie() {
  for (var index = 0; index < 9; index++) {
    if (empty[id] !== '')
      Word.innerHTML = 'it is a tie play again'
  }
};
playAgainBtn.addEventListener("click", () => {
  empty.forEach((space, index) => {
    empty[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  Word.innerHTML = `play again`;

  nowPlayed = forO;
});

drawBoard();
