
const types = ['ROCK','PAPER','SCISSOR'];

let playerScore = 0;
let computerScore = 0;
const computerSelection = computerPlay();

game();
function game()
{
    for(let i=0;i<5;i++)
    {
        const playerSelection = prompt("Enter Your Choice").toUpperCase();

        console.log(playGround(playerSelection,computerSelection));
    }
    if(playerScore>computerScore)
    {
        console.log("You Won The Game!");
    }
    else
    {console.log("You Lose The Game!");

    }
}
function playGround(player,computer)
{
    if(player === 'ROCK')
    {
        if(computer === 'SCISSOR')
        {

            playerScore++;
            return "You Win! Rock beats scissor";
        }
        else
        {
            computerScore++;
            return "You Lose!  beats paper";
        }
    }
    
    if(player === 'PAPER')
    {
        if(computer === 'ROCK'){

            playerScore++;
            return "You Win! paper beats rock";
        }
        else
        {computerScore++; 
                return "You Lose! rock beats scissor";

        }
    }
    
   
    if(player === 'SCISSOR')
    {
        if(computer === 'PAPER')
        {

            playerScore++;
            return "You Win! scissor beats paper";
        }
        else
        {
            computerScore++;
            return "You Lose! paper beats rock";
        }
    }
   
    

}


function computerPlay()
{
    return types[Math.floor(3*Math.random())];
}