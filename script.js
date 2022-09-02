

const types = ['ROCK','PAPER','SCISSOR'];


const btns  = document.querySelectorAll('.btn');
const playerPointEl = document.querySelector('.playerPoint');
const computerPointEl = document.querySelector('.computerPoint');
const updateRoundEl = document.querySelector('.updateRound');
const mainResultEl = document.querySelector('.mainResult');





let playerScore = 0;
let computerScore = 0;
const computerSelection = computerPlay();

// game();
// function game()
// {
//     for(let i=0;i<5;i++)
//     {
//         const playerSelection = prompt("Enter Your Choice").toUpperCase();

//         console.log(playGround(playerSelection,computerSelection));
//     }
//     if(playerScore>computerScore)
//     {
//         console.log("You Won The Game!");
//     }
//     else
//     {console.log("You Lose The Game!");

//     }
// }
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        let playerChoice = (btn.innerHTML).toUpperCase();
        // console.log(playerChoice);
        let computerChoice = computerPlay();
       updateRoundEl.textContent= playGround(playerChoice,computerChoice);
    })
})
function playGround(player,computer)
{
    if(player === 'ROCK')
    {
        if(computer === 'SCISSOR')
        {

            playerScore++;
            updateScoreDisplay();
           return "You Win! Rock beats scissor";
        }
        else if(player === 'PAPER')
        {
            computerScore++;
            updateScoreDisplay()
            return "You Lose! paper beats rock";
        }
        else
        {
            return "Tie";
        }
    }
    
    if(player === 'PAPER')
    {
        if(computer === 'ROCK'){

            playerScore++;
            updateScoreDisplay()
            return "You Win! paper beats rock";
        }
        else if(computer === 'SCISSOR')
        {computerScore++; 
            updateScoreDisplay()
                return "You Lose! scissor beats paper";

        }
        else
        {
            return "Tie";

        }
    }
    
   
    if(player === 'SCISSOR')
    {
        if(computer === 'PAPER')
        {

            playerScore++;
            updateScoreDisplay()
            return "You Win! scissor beats paper";
        }
        else if(computer=== 'ROCK')
        {
            computerScore++;
            updateScoreDisplay()
            return "You Lose! rock beats scissor";
        }
        else
        {
            return "Tie";
        }
    }
   
    

}


function computerPlay()
{
    return types[Math.floor(3*Math.random())];
}

function updateScoreDisplay()
{

    playerPointEl.textContent = playerScore;
    computerPointEl.textContent = computerScore;
    if(playerScore==5 || computerScore==5)
    {
        if(playerScore==5)
        {
            alert("You Won The Game!");
        }
        else{
                   alert("You Lose The Game!");
        }
        location.reload();
    }
}