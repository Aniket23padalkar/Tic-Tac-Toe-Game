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

cellBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const index = Number(btn.dataset.index);

        if (btn.textContent === "") {
            if (turnX) {
                btn.textContent = "X";
                turnX = false;
                turns[index] = "X";
                winLose.textContent = "Player 'O' Turn";
            } else {
                btn.textContent = "O";
                turnX = true;
                turns[index] = "O";
                winLose.textContent = "Player 'X' Turn";
            }
            console.log(turns);
        }
    });
});

restart.addEventListener("click", () => {
    cellBtn.forEach((btn) => {
        btn.textContent = "";
    });
    turnX = true;
    winLose.textContent = "Player 'X' Turn";
    turns = ["", "", "", "", "", "", "", "", ""];
});
