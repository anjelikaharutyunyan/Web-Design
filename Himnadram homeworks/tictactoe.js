let board = [
    [ "_", "_", "_" ],
    [ "_", "_", "_" ],
    [ "_", "_", "_" ]
  ];
  let player = "x";
  let strBoard = function(board) {
      return board[0].join("   ") +  "\n" + board[1].join("   ") + "\n" + board[2].join("   ");
  };
  let didWeWin = function(board, player) {
  //toxeri stugum
    if(board[0][0] === player && board[0][1] === player && board[0][2] === player) {
      return true;
    }
    if(board[1][0] === player && board[1][1] === player && board[1][2] === player) {
      return true;
    }
    if(board[2][0] === player && board[2][1] === player && board[2][2] === player) {
      return true;
    }
  // syuneri stugum
    if(board[0][0] === player && board[1][0] === player && board[2][0] === player) {
      return true;
    }
    if(board[0][1] === player && board[1][1] === player && board[2][1] === player) {
      return true;
    }
    if(board[0][2] === player && board[1][2] === player && board[2][2] === player) {
      return true;
    }
  //ankyunagci stugum
    if(board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      return true;
    }
    if(board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      return true;
    }
    return false;
  };
  
  while(true) {
    let boardStr = strBoard(board);
    let row = +prompt("please provider the value for the row \n\n"+boardStr);
    let column = +prompt("please provider the value for the column \n\n"+boardStr);
    
    if(board[row][column] !== "_") {
      alert("You lose!");
      break;
    }
    board[row][column] = player;
    const won = didWeWin(board, player);
    
    if(won) {
      alert("Player " + player +" won the game!");
      break;
    }
  
    if(player === "x") {
      player = "o";
    } else {
      player = "x";
    }
  }