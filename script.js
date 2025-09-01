const cellBtn = document.querySelectorAll(".cell");
const restart = document.getElementById("restart");
const winLose = document.getElementById("win-lose");

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
            cellBtn.forEach((btn) =>
                btn.removeEventListener("click", handleClick)
            );
        }

        if (!turns.includes("")) {
            winLose.textContent = "It's a Draw!";
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

cellBtn.forEach((btn) => btn.addEventListener("click", handleClick));

restart.addEventListener("click", () => {
    cellBtn.forEach((btn) => {
        btn.textContent = "";
    });
    turnX = true;
    winLose.textContent = "Player 'X' Turn";
    cellBtn.forEach((btn) => btn.addEventListener("click", handleClick));
    turns = ["", "", "", "", "", "", "", "", ""];
});
