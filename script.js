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
    paper.addEventListener("click", handlePaperClick);
    document.getElementById("myresult").innerHTML = "Paper";
}
paper.addEventListener("click", handlePaperClick);


function handleStoneClick() {
    const choise = array[Math.floor(Math.random() * array.length)];
    console.log(choise);
    if (choise === "Stone") {
        alert("draw");
    } else if (choise === "Scissor") {
        alert("Win");
    } else if (choise === "Paper") {
        alert("Loss");
    }
    stone.addEventListener("click", handleStoneClick);
    document.getElementById("myresult").innerHTML = "Stone";
}
    stone.addEventListener("click", handleStoneClick);

    function handleScissorClick() {
        const choise = array[Math.floor(Math.random() * array.length)];
        console.log(choise);
        if (choise === "Scissor") {
            alert("draw");
        } else if (choise === "Paper") {
            alert("Win");
        } else if (choise === "Stone") {
            alert("Loss");
        }
        scissor.addEventListener("click", handleScissorClick);
        document.getElementById("myresult").innerHTML = "Scissor";
    }
        scissor.addEventListener("click", handleScissorClick);
    