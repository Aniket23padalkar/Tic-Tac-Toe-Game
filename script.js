const cellBtn = document.querySelectorAll(".cell");
const restart = document.getElementById("restart");
const winLose = document.getElementById("win-lose");
const line = document.getElementById("line");

let turnX = true;

let turns = ["", "", "", "", "", "", "", "", ""];

let winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (let combo of winningCombo) {
        const [a, b, c] = combo;

        if (turns[a] && turns[a] === turns[b] && turns[a] === turns[c]) {
            winLose.textContent = `Player '${turns[a]}' Wins!`;
            winLose.style.color = "Green";
            winLose.style.background = "Black";
            lineThrough(a, b, c);
            cellBtn.forEach((btn) =>
                btn.removeEventListener("click", handleClick)
            );
        }

        if (!turns.includes("")) {
            winLose.textContent = "It's a Draw!";
            winLose.style.background = "white";
        }
    }
}

function handleClick() {
    const index = Number(this.dataset.index);

    if (this.textContent === "") {
        if (turnX) {
            this.textContent = "X";
            turnX = false;
            turns[index] = "X";
            winLose.textContent = "Player 'O' Turn";
        } else {
            this.textContent = "O";
            turnX = true;
            turns[index] = "O";
            winLose.textContent = "Player 'X' Turn";
        }
        checkWinner();
    }
}

function lineThrough(a, b, c) {
    line.style.display = "block";
    line.style.width = "0";

    setTimeout(() => {
        if (a === 0 && b === 1 && c === 2) {
            line.style.width = "80%";
            line.style.top = "3.5rem";
            line.style.left = "10%";
            line.style.transform = "rotate(0deg)";
        }
    }, 50);

    setTimeout(() => {
        if (a === 3 && b === 4 && c === 5) {
            line.style.width = "80%";
            line.style.top = "9.7rem";
            line.style.left = "10%";
            line.style.transform = "rotate(0deg)";
        }
    }, 50);

    setTimeout(() => {
        if (a === 6 && b === 7 && c === 8) {
            line.style.width = "80%";
            line.style.top = "15.8rem";
            line.style.left = "10%";
            line.style.transform = "rotate(0deg)";
        }
    }, 50);

    setTimeout(() => {
        if (a === 0 && b === 3 && c === 6) {
            line.style.width = "62%";
            line.style.top = "10%";
            line.style.left = "5rem";
            line.style.transform = "rotate(90deg)";
        }
    }, 50);

    setTimeout(() => {
        if (a === 1 && b === 4 && c === 7) {
            line.style.width = "62%";
            line.style.top = "10%";
            line.style.left = "12.5rem";
            line.style.transform = "rotate(90deg)";
        }
    }, 50);

    setTimeout(() => {
        if (a === 2 && b === 5 && c === 8) {
            line.style.width = "62%";
            line.style.top = "10%";
            line.style.left = "20rem";
            line.style.transform = "rotate(90deg)";
        }
    }, 50);

    setTimeout(() => {
        if (a === 0 && b === 4 && c === 8) {
            line.style.width = "95%";
            line.style.top = "2.3rem";
            line.style.left = "13%";
            line.style.transform = "rotate(40deg)";
        }
    }, 50);

    setTimeout(() => {
        if (a === 2 && b === 4 && c === 6) {
            line.style.width = "95%";
            line.style.top = "2.3rem";
            line.style.left = "87%";
            line.style.transform = "rotate(140deg)";
        }
    }, 50);
}

cellBtn.forEach((btn) => btn.addEventListener("click", handleClick));

restart.addEventListener("click", () => {
    cellBtn.forEach((btn) => {
        btn.textContent = "";
    });
    turnX = true;
    winLose.textContent = "Player 'X' Turn";
    cellBtn.forEach((btn) => btn.addEventListener("click", handleClick));
    turns = ["", "", "", "", "", "", "", "", ""];
    winLose.style.color = "";
    winLose.style.background = "";
    line.style.display = "none";
});
