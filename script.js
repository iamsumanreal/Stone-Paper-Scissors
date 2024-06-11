const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const stone = document.getElementById('stone');

let array = ["Paper", "Scissor", "Stone"];

function handlePaperClick() {
    const choise = array[Math.floor(Math.random() * array.length)];
    console.log(choise);

    if (choise === "Paper") {
        alert("draw");
    } else if (choise === "Stone") {
        alert("Win");
    } else if (choise === "Scissor") {
        alert("Loss");
    }

    // Reattach the event listener
    paper.addEventListener("click", handlePaperClick);
}

paper.addEventListener("click", handlePaperClick);

stone.addEventListener("click", () => {
    alert("stone");
});

scissor.addEventListener("click", () => {
    alert("scissors");
});
