document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.gridBox');
    const playerXScoreElement = document.getElementById('playerX');
    const playerOScoreElement = document.getElementById('playerO');

    let playerXScore = 0;
    let playerOScore = 0;
    let initialTurn = 'X';
    let turnsCount = 0;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    cells.forEach(gridBox => gridBox.addEventListener('click', handleCellClick));

    function handleCellClick(e) {
        const gridBox = e.target;
        if (gridBox.textContent) return;

        gridBox.textContent = initialTurn;
        turnsCount++;

        setTimeout(() => {
            if (checkWin(initialTurn)) {
                alert(`${initialTurn} wins!`);
                updateScore();
                resetGame();
            } else if (isDraw()) {
                alert('Draw!');
                resetGame();
            } else {
                initialTurn = initialTurn=== 'X' ? 'O' : 'X';
            }
        }, 100);
    }

    function checkWin(player) {
        return winningCombinations.some(combination =>
            combination.every(index => cells[index].textContent === player)
        );
    }

    function isDraw() {
        return turnsCount === 9;
    }

    function updateScore() {
        if (initialTurn === 'X') {
            playerXScore++;
            playerXScoreElement.textContent = `Player X: ${playerXScore}`;
        } else {
            playerOScore++;
            playerOScoreElement.textContent = `Player O: ${playerOScore}`;
        }
    }

    function resetGame() {
        cells.forEach(gridBox => gridBox.textContent = '');
        initialTurn = 'X';
        turnsCount = 0;
    }

    restartButton.addEventListener('click', restartGame);

    function restartGame() {
        resetGame();
        playerXScore = 0;
        playerOScore = 0;
        playerXScoreElement.textContent = `Player X: ${playerXScore}`;
        playerOScoreElement.textContent = `Player O: ${playerOScore}`;
    }
});




