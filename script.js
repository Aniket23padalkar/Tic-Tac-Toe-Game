const cellBtn = document.querySelectorAll(".cell");
const restart = document.getElementById("restart");
const winLose = document.getElementById("win-lose");

let turnX = true;

cellBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const index = btn.dataset.index;

        if (btn.textContent === "") {
            if (turnX) {
                btn.textContent = "X";
                turnX = false;
                winLose.textContent = "Player 'O' Turn";
            } else {
                btn.textContent = "O";
                turnX = true;
                winLose.textContent = "Player 'X' Turn";
            }
        }
    });
});

restart.addEventListener("click", () => {
    cellBtn.forEach((btn) => {
        btn.textContent = "";
    });
    turnX = true;
    winLose.textContent = "Player 'X' Turn";
});
