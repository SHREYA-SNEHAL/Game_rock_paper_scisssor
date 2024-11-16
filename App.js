let wonCount=0;
let drawCount=0;
let lostCount=0;

const choice=document.querySelectorAll(".clickable");
const msg=document.querySelector("#msg");
let resetbtn=document.querySelector("#reset-btn");

const winScorePara=document.querySelector("#Won");
const lostScorePara=document.querySelector("#Lost");
const drawScorePara=document.querySelector("#Draw");

const genCompChoice=()=>{
    const options=["rock","Scissor","paper"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
}

const drawgame=()=>{
    drawCount++;
    drawScorePara.innerText=drawCount;
    msg.innerText="Game Was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showwinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        wonCount++;
        winScorePara.innerText=wonCount;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        lostCount++;
        lostScorePara.innerText=lostCount;
        msg.innerText=`You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playerGame=(userChoice)=>{

    const compChoice=genCompChoice();

    if(userChoice==compChoice){
        drawgame();
    }

    else{

        let userWin=true;

        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        
        else if(userChoice==="paper"){
            userWin = compChoice === "Scissor" ? false : true;
        }

        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showwinner(userWin,userChoice,compChoice);
    }
    
}

choice.forEach((clickable)=>{
    clickable.addEventListener("click",()=>{
        const userChoice=clickable.getAttribute("id");
        playerGame(userChoice);
    })
})

const resetGame= () => {
    wonCount=0;
    drawCount=0;
    lostCount=0;
    winScorePara.innerText = wonCount;
    drawScorePara.innerText = drawCount;
    lostScorePara.innerText = lostCount;
    msg.innerText = "Game reset. Start playing!";
    msg.style.backgroundColor = "#0d1825";
};

resetbtn.addEventListener("click",resetGame);
