function startQuiz() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        localStorage.setItem('playerName', playerName);
        document.getElementById('quizQuestions').style.display = 'block';
    } else {
        alert('Please enter your name.');
    }
}

function savePlayerData(score) {
    const playerName = localStorage.getItem('playerName');

    if (playerName && score !== undefined) {
        const playerData = {
            name: playerName,
            score: parseInt(score)
        };

        let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

        leaderboard.push(playerData);

        leaderboard.sort((a, b) => b.score - a.score);
        leaderboard = leaderboard.slice(0, 10);

        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

        alert('Quiz submitted! You can now check the leaderboard.');
    }
}

function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    leaderboard.forEach((player, index) => {
        document.getElementById(`player${index + 1}Name`).innerText = player.name;
        document.getElementById(`player${index + 1}Score`).innerText = player.score;
    });
}

function submitQuiz() {
    const form = document.getElementById('quizForm');
    let score = 0;

    const correctAnswers = {
        q1: 'c',
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'd',
        q6: 'c',
        q7: 'c',
        q8: 'c',
        q9: 'a',
        q10: 'c'
    };

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const selectedAnswer = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswer) {
            score += 10;
        }
    }

    savePlayerData(score);
}

window.onload = displayLeaderboard;
