const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const stone = document.getElementById('stone');

let array = ["Paper", "Scissor", "Stone"];

function handlePaperClick() {
    const choise = array[Math.floor(Math.random() * array.length)];
    console.log(choise);

    if (choise === "Paper") {
        document.getElementById("result").innerHTML="It's Draw";
    } else if (choise === "Stone") {
        document.getElementById("result").innerHTML="You Win";
    } else if (choise === "Scissor") {
        document.getElementById("result").innerHTML="You Lose";
    }
    paper.addEventListener("click", handlePaperClick);
    document.getElementById("myresult").innerHTML = "Paper";
    document.getElementById("aichoice").innerHTML=choise;
}
paper.addEventListener("click", handlePaperClick);


function handleStoneClick() {
    const choise = array[Math.floor(Math.random() * array.length)];
    console.log(choise);
    
    if (choise === "Stone") {
        document.getElementById("result").innerHTML="It's Draw";
    } else if (choise === "Scissor") {
        document.getElementById("result").innerHTML="You Win";
    } else if (choise === "Paper") {
        document.getElementById("result").innerHTML="You Lose";
    }
    stone.addEventListener("click", handleStoneClick);
    document.getElementById("myresult").innerHTML = "Stone";
    document.getElementById("aichoice").innerHTML=choise;
}
    stone.addEventListener("click", handleStoneClick);

    function handleScissorClick() {
        const choise = array[Math.floor(Math.random() * array.length)];
        console.log(choise)    
        
        if (choise === "Scissor") {
            document.getElementById("result").innerHTML="It's Draw";
        } else if (choise === "Paper") {
            document.getElementById("result").innerHTML="You Win";
        } else if (choise === "Stone") {
            document.getElementById("result").innerHTML="You Lose";
        }
        scissor.addEventListener("click", handleScissorClick);
        document.getElementById("myresult").innerHTML = "Scissor";
        document.getElementById("aichoice").innerHTML=choise;
    }
        scissor.addEventListener("click", handleScissorClick);
    