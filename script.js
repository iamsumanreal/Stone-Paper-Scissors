const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const stone = document.getElementById('stone');

let array = ["Paper", "Scissor", "Stone"];
let score1 = 0;
let score2 = 0;
let lastChoice = null;

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

    if (playerChoice === choise) {
        document.getElementById("result").innerHTML = "It's Draw";
    } else if ((playerChoice === "Paper" && choise === "Stone") ||
               (playerChoice === "Stone" && choise === "Scissor") ||
               (playerChoice === "Scissor" && choise === "Paper")) {
        document.getElementById("result").innerHTML = "You Win";
        score1 += 2;
        score2 -=1;
    } else {
        document.getElementById("result").innerHTML = "You Lose";
        score1 -= 1;
        score2 +=2;
    }

    document.getElementById("myresult").innerHTML = playerChoice;
    document.getElementById("aichoice").innerHTML = choise;
    document.getElementById("Score1").innerHTML = "Your Score:" + score1;
    document.getElementById("Score2").innerHTML = "AI's Score:" + score2;

    if(score1==10)
        {
            alert("You Won The Game!");
            window.location.reload();
        }

    else if(score2==10){
        alert("AI Won The Game!");
        window.location.reload();
    }
}

paper.addEventListener("click", () => handleClick("Paper"));
scissor.addEventListener("click", () => handleClick("Scissor"));
stone.addEventListener("click", () => handleClick("Stone"));
