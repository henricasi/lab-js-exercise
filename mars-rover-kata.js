let roverOne = {
  name: "Rover 1",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
}

let roverTwo = {
  name: "Rover 2",
  direction: "N",
  x: 5,
  y: 7,
  travelLog: []
}

let playersTurn = true; // variável cujo valor será alterado ao fim de cada jogada.

let board = [
  ['R1','','','','','','','','',''],
  ['','','','','','','','O','O',''],
  ['','','','','','','','','',''],
  ['','','','O','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','O','',''],
  ['O','','','','','','','','',''],
  ['O','','','','','R2','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','','']
]

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
  case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

let pathFree = true;

function checkObstacle(futurePosition){ // função que aceita como argumento "board[y][x]". será computada dentro das funções de deslocamento
  switch (futurePosition) {
    case "O":
      console.log(`Cannot move: collision with obstacle`);
      pathFree = false;
      return;
    case "R1":
      console.log(`Cannot move: collision with rover`);
      pathFree = false;
      return;
    case "R2":
      console.log(`Cannot move: collision with rover`);
      pathFree = false;
      return;
    default:
      pathFree = true;
  } 
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      if (rover.y > 0) {
        checkObstacle(board[(rover.y)-1][rover.x]);
        if (pathFree) {
          board[(rover.y)-1][rover.x] = board[rover.y][rover.x]; // essas duas linhas de código
          board[rover.y][rover.x] = '';                          // atualizam o array board.
          rover.y--;  // atualiza a propriedade y
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);  // atualiza travelLog
        }
      } else if (rover.y = 0) {  // caso a questão seja a borda
          console.log(`The rover cannot leave the grid!`);
        }
      break;
    case "W":
      if (rover.x > 0) {
        checkObstacle(board[rover.y][(rover.x)-1]);
        if (pathFree) {
          board[rover.y][(rover.x)-1] = board[rover.y][rover.x];
          board[rover.y][rover.x] = '';
          rover.x--;
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
        }
      } else if (rover.x = 0) {
          console.log(`The rover cannot leave the grid!`);
        }
      break;
    case "S":
      if (rover.y < 9) {
        checkObstacle(board[(rover.y)+1][rover.x]);
        if (pathFree) {
          board[(rover.y)+1][rover.x] = board[rover.y][rover.x];
          board[rover.y][rover.x] = '';
          rover.y++;
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
        }
      } else if (rover.y = 9) {
          console.log(`The rover cannot leave the grid!`);
        }
      break;
    case "E":
      if (rover.x < 9) {
        checkObstacle(board[rover.y][(rover.x)+1]);
        if (pathFree) {
          board[rover.y][(rover.x)+1] = board[rover.y][rover.x];
          board[rover.y][rover.x] = '';
          rover.x++;
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
        }
      } else if (rover.x = 9) {
          console.log(`The rover cannot leave the grid!`);
        }
      break;
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction) {
    case "N":
      if (rover.y < 9) {
        checkObstacle(board[(rover.y)+1][rover.x]);
        if (pathFree) {
          board[(rover.y+1)][rover.x] = board[rover.y][rover.x];
          board[rover.y][rover.x] = '';
          rover.y++;
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
        }
      } else if (rover.y = 9) {
          console.log(`The rover cannot leave the grid!`);
        }
      break;
    case "W":
      if (rover.x < 9) {
        checkObstacle(board[rover.y][(rover.x)+1]);
        if (pathFree) {
          board[rover.y][(rover.x)+1] = board[rover.y][rover.x];
          board[rover.y][rover.x] = '';
          rover.x++;
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
        }
      } else if (rover.x = 9) {
          console.log(`The rover cannot leave the grid!`);
        }
      break;
    case "S":
      if (rover.y > 0) {
        checkObstacle(board[(rover.y)-1][rover.x]);
        if (pathFree) {
          board[(rover.y)-1][rover.x] = board[rover.y][rover.x];
          board[rover.y][rover.x] = '';
          rover.y--;
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
        }
      } else if (rover.y = 0) {
          console.log(`The rover cannot leave the grid!`);
        }
      break;
    case "E":
      if (rover.x > 0) {
        checkObstacle(board[rover.y][(rover.x)-1]);
        if (pathFree) {
          board[rover.y][(rover.x)-1] = board[rover.y][rover.x];
          board[rover.y][rover.x] = '';
          rover.x--;
          rover.travelLog.push(`[${rover.x}, ${rover.y}]`);
        }
      } else if (rover.x = 0) {
          console.log(`The rover cannot leave the grid!`);
        }
      break;
  }
}

function roverCommand(commands) {
  function whichRover() {
    if (playersTurn) {
      return roverOne;
    } else {
      return roverTwo;
    }
  }
  function whichName() {
    if (playersTurn) {
      return roverOne.name;
    } else {
      return roverTwo.name;
    }
  }
  function whichTravelLog() {
    if (playersTurn) {
      return roverOne.travelLog;
    } else {
      return roverTwo.travelLog;
    }
  }
  console.log(`${whichName()}'s move: ${commands}`);
  for (let i = 0; i < commands.length; i++) {
   switch (commands.charAt(i)) {
      case "l":
        turnLeft(whichRover());
        break;
      case "r":
        turnRight(whichRover());
        break;
      case "f":
        moveForward(whichRover());
        break;
      case "b":
        moveBackward(whichRover());
        break;
      default:
       console.log(`Invalid input. The rover only accepts the following commands: l, r, f, b.`);
       break;
    }
  }
  console.log(`${whichName()}'s travel log: ${whichTravelLog()}`);
  playersTurn = !playersTurn;  // muda o jogador
}

// teste aqui:
// roverCommand("rffrffff"); // movimenta roverOne sem problemas
// roverCommand("rfflfff");  // movimenta roverTwo até encontrar obstáculo
// roverCommand("ffffff")    // movimenta roverOne até chegar à borda