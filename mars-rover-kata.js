// Rover Object Goes Here
// ======================
let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
  }
  
  // ======================
  function turnLeft(rover){
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
  
  function turnRight(rover){
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
  
  function moveForward(rover){
    console.log("moveForward was called");
    switch (rover.direction) {
      case "N":
        if (rover.y > 0) {
          rover.y--; } else {
            console.log(`The rover cannot leave the grid!`); }
        break;
      case "W":
        if (rover.x > 0) { 
          rover.x--; } else {
            console.log(`The rover cannot leave the grid!`); }
        break;
      case "S":
        if (rover.y < 9) {
          rover.y++; } else {
            console.log(`The rover cannot leave the grid!`); }
        break;
      case "E":
        if (rover.x < 9) {
          rover.x++; } else {
            console.log(`The rover cannot leave the grid!`); }
        break;
    }
    rover.travelLog.push([rover.x, rover.y]);
  }
  
  function moveBackward(rover){
    console.log("moveBackward was called");
    switch (rover.direction) {
      case "N":
        if (rover.y < 9) {
          rover.y++; } else {
          console.log(`The rover cannot leave the grid!`); }
        break;
      case "W":
        if (rover.x < 9) { 
          rover.x++; } else {
            console.log(`The rover cannot leave the grid!`); }
        break;
      case "S":
        if (rover.y > 0) {
          rover.y--; } else {
            console.log(`The rover cannot leave the grid!`); }
        break; 
      case "E":
        if (rover.x > 0) {
          rover.x--; } else {
            console.log(`The rover cannot leave the grid!`); }
        break;
    }
    rover.travelLog.push([rover.x, rover.y]);
  }
  
  function roverCommand(commands) {
    for (let i = 0; i < commands.length; i++) {
     switch (commands.charAt(i)) {
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        default:
          console.log(`Invalid input. The rover only accepts the following commands: l, r, f, b.`);
          break;
      }
    }
    console.log(rover.travelLog);
  }
  
  // test here:
  // roverCommand("rfflfff");
  