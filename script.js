const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const stone = document.getElementById('stone');
const playerChoiceImg = document.getElementById('playerChoiceImg');
const aiChoiceImg = document.getElementById('aiChoiceImg');
const resultElement = document.getElementById('result');

let array = ["Paper", "Scissor", "Stone"];
let score1 = 0;
let score2 = 0;
let lastChoice = null;
resultElement.style.backgroundColor = "#5B8FB9";
function getUniqueChoice() {
    let choise;
    do {
        choise = array[Math.floor(Math.random() * array.length)];
    } while (choise === lastChoice);
    lastChoice = choise;
    return choise;
}

function handleClick(playerChoice) {
    const choise = getUniqueChoice();
    console.log(choise);

    playerChoiceImg.src = `Assests/${playerChoice.toLowerCase()}.png`;

    aiChoiceImg.src = `Assests/${choise.toLowerCase()}.png`;

    if (playerChoice === choise) {
        resultElement.innerHTML = "It's Draw";
        resultElement.style.backgroundColor = "#FFD93D";
    } else if ((playerChoice === "Paper" && choise === "Stone") ||
               (playerChoice === "Stone" && choise === "Scissor") ||
               (playerChoice === "Scissor" && choise === "Paper")) {
                resultElement.innerHTML = "You won";
                resultElement.style.backgroundColor = "#06D001";
        score1 += 1;
        score2 -= 1;
    } else {
        resultElement.innerHTML = "You Lose";
        resultElement.style.backgroundColor = "#FF204E";
        score1 -= 1;
        score2 += 1;
    }

    document.getElementById("Score1").innerHTML = "Your Score: " + score1;
    document.getElementById("Score2").innerHTML = "AI's Score: " + score2;

    if (score1 >= 10) {
        alert("You Won The Game!");
        window.location.reload();
    } else if (score2 >= 10) {
        alert("AI Won The Game!");
        window.location.reload();
    }
}

paper.addEventListener("click", () => handleClick("Paper"));
scissor.addEventListener("click", () => handleClick("Scissor"));
stone.addEventListener("click", () => handleClick("Stone"));
