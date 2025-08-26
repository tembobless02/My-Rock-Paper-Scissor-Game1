


let state1 = '';
const score = JSON.parse(localStorage.getItem('score')) ||{
    Win: 0,
    Tie: 0,
    Lost: 0
};


function resetFuction(){
    score.Win = 0;
    score.Tie = 0;
    score.Lost = 0;

    
    localStorage.removeItem('score');
    document.querySelector('#first').innerHTML = `  RESET! `;
    document.querySelector('#second').innerHTML = ``;

    document.querySelector('#third').innerHTML = ``;
    document.querySelector('#fourth').innerHTML = `|Win(${score.Win})| |Tie(${score.Tie})| |Lost(${score.Lost})|)`;
    
}

function playGame(value1){
   let number2 = Math.random();
   let result = '';
    if(number2 <= 1/3 ){
        state1 = 'Rock';
    }

    else if(number2 > 1/3 && number2 <= 2/3){
        state1 = 'Paper';
    }

    else{
        state1 = 'Scissor'
    }

    if(value1 === 'Rock'){
        
        if(state1 === 'Rock'){
            result = 'it\'s a TIE!';
        }
        else if(state1 === 'Paper'){
            result = 'You Lost!';
        }
        else{
            result = 'You Won!'
        }

    }

    if(value1 === 'Paper'){
        if(state1 === 'Paper'){
            result = 'it\'s a TIE!';
        }
        else if(state1 === 'Scissor'){
            result = 'You Lost!';
        }
        else{
            result = 'You Won!'
        }
        
    }

    if(value1 === 'Scissor'){
        if(state1 === 'Scissor'){
            result = 'it\'s a TIE!';
        }
        else if(state1 === 'Rock'){
            result = 'You Lost!';
        }
        else{
            result = 'You Won!';
        }
    }
    
    
    
    
    
    

    if( result === 'You Won!'){
        score.Win++;
    }
    else if( result === 'You Lost!'){
        score.Lost++;
    }
    else{
        score.Tie++;
    }
    
    
    document.querySelector('#first').innerHTML = `  ${result}`;

    document.querySelector('#second').innerHTML = `you pick <image src = ${value1}.png class="png1">`;
    
    document.querySelector('#third').innerHTML = `the computer pick <image src = ${state1}.png class="png1">`;

    
    function updateScore(){document.querySelector('#fourth').innerHTML = `|Win(${score.Win})| |Tie(${score.Tie})| |Lost(${score.Lost})|)`;}
    
  updateScore();
  

   localStorage.setItem('score', JSON.stringify(score));

}

function subcribeButton(){
    const inner1 = document.querySelector('#subscribeButton');
    if(inner1.innerHTML === 'SUBSCRIBE'){
        inner1.innerHTML = 'SUBSCRIBED';
         inner1.classList.remove('subscribeButton');
         inner1.classList.add('subscribedButton');
    }
    else{
        inner1.innerHTML = 'SUBSCRIBE';
        inner1.classList.remove('subscribedButton');
        inner1.classList.add('subscribeButton');


    }
}

function key1(event){
    if(event.key === 'Enter'){
        calculate();
    }
}
function calculate(){
   let here = Number(document.querySelector('#here').value);
   if(here > 25){
      document.querySelector('#showhere')
        .innerHTML = `Mkw ${here}`;
   }

   else{
    document.querySelector('#showhere')
  .innerHTML = `Mkw ${here + 10}`;
   }


}
