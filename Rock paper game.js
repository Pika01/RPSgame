function generateComputerChoice(){
  let randomNum = Math.random() * 3;
  if (randomNum < 1) {
    return 'Rock';
  } else if (randomNum < 2) {
    return 'Paper';
  } else {
    return 'Scissor';
  } 
}

function winnerDecleration(userMove,computerMove){
 if (userMove === 'Rock'){
   if (computerMove === 'Rock'){
     return 'Match draw';
   } else if (computerMove === 'Paper'){
     return 'You lose';
   } else if (computerMove === 'Scissor'){
     return 'You won';
   } 
   
 } else if (userMove === 'Paper'){
   if (computerMove === 'Paper'){
     return 'Match draw';
   } else if (computerMove === 'Rock'){
     return 'You lose';
   } else if (computerMove === 'Scissor'){
     return 'You won';
   } 
 } else {
   if (userMove === 'Scissor'){
     if (computerMove === 'Scissor'){
     return 'Match draw';
   } else if (computerMove === 'Rock'){
     return 'You lose';
   } else if (computerMove === 'Paper'){
     return 'You won';
   } 
   }
 }
}



