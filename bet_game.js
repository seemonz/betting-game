
$(function() {
// declare variables
  var oriWallet = 100;

  // functions for input filtering
  function jQForBet() {
    var temp_bet = parseInt($('#bet').val());
    if (temp_bet > 4 && temp_bet < 11) {
      return temp_bet;
    } else {
      return 0;
    }
  }

  function jQForGuess() {
    var temp_guess = parseInt($('#guess').val());
    if(temp_guess > 0 && temp_guess < 11){
      return temp_guess;
    } else {
      return 0;
    }
  }

  // generate answer
  function getRandomInt() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }


  function walletRefresh(currentWallet) {
    $('#wallet').text('Wallet: $' + currentWallet);
  }

  // game logic
  function betGame() {
    var randomNum, bet, guess;
    randomNum = getRandomInt();
    
    bet = jQForBet();
    if (bet === 0) {
      alert('please provide a number between 5 and 10');
      return;
    }
    guess = jQForGuess();
    if (guess === 0) {
      alert('please provide a number between 1 and 10');
      return;
    }
 
    if(guess === randomNum) {
      oriWallet = oriWallet + bet;
      $('#outputLineOne').text('you won $' + bet);
    }
    else if((guess + 1) === randomNum || (guess - 1) === randomNum) { // TODO abs value refactor
      $('#outputLineOne').text('you were off by one, you dont win or lose.');
    }
    else {
      oriWallet = oriWallet - bet;
      $('#outputLineOne').text('you lost $' + bet + ' the answer was ' + randomNum);
    }
  }

  // // output wallet info
  walletRefresh(oriWallet);

   // start game
  $( '#game' ).on('click', function() {
    betGame();
    walletRefresh(oriWallet);
  });

});
