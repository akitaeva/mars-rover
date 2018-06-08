// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N',
  x: 0,
  y: 0
}

var cmd;

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
   case 'N':
   rover.direction = 'W'
   break;
   case 'W':
   rover.direction = 'S'
   break; 
   case 'S':
   rover.direction = 'E'
   break;
   case 'E':
   rover.direction = 'N'
   break;
  }
  console.log("the rover is going " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case 'N':
    rover.direction = 'E'
    break;
    case 'E':
    rover.direction = 'S'
    break;
    case 'S':
    rover.direction = 'W'
    break;
    case 'W':
    rover.direction = 'N'
    break;
   }
  console.log("the rover is going " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")
  if (rover.direction == 'E' && rover.x == 9 ) {
    rover.x = 0
  }
  else if (rover.direction == 'W' && rover.x == 0 ) {
    rover.x = 9
  }
  else if (rover.direction == 'N' && rover.y == 0 ) {
    rover.y = 9
  }
  else if (rover.direction == 'S' && rover.y == 9 ) {
    rover.y = 0
  }  
  else if (rover.direction == 'E' && rover.y !== 9 ) {
    rover.x += 1;
  } 
  else if (rover.direction == 'W' && rover.x !== 0 ) {
      rover.x -= 1;
  }
  else if (rover.direction == 'N' && rover.y !== 0 ) {
        rover.y -= 1;
      }
  else if (rover.direction == 'S' && rover.y !== 9 ) {
        rover.y += 1; 
  }
  console.log(`(${rover.x}, ${rover.y})`);

}

function moveBackward(rover){
  console.log("moveBackward was called")
  if (rover.direction == 'E' && rover.x == 0 ) {
    rover.x = 9
  }
  else if (rover.direction == 'W' && rover.x == 9 ) {
    rover.x = 0
  }
  else if (rover.direction == 'N' && rover.y == 9 ) {
    rover.y = 0
  }
  else if (rover.direction == 'S' && rover.y == 0 ) {
    rover.y = 9
  }  
  else if (rover.direction == 'E' && rover.y !== 0 ) {
    rover.x -= 1;
  } 
  else if (rover.direction == 'W' && rover.x !== 9 ) {
      rover.x += 1;
  }
  else if (rover.direction == 'N' && rover.y !== 9 ) {
        rover.y += 1;
      }
  else if (rover.direction == 'S' && rover.y !== 0 ) {
        rover.y -= 1; 
  }
  console.log(`(${rover.x}, ${rover.y})`);

}

function getCommand(cmd) {
  var userCmd = prompt("Please enter the desired route. Type 'F' for forward', 'L' for the left turn, 'R' for the right turn");
  if (userCmd != null) {
    var userCmdLc = userCmd.toLowerCase();
    var seqLength = userCmd.length;
    var n;
    for (n=0; n < seqLength; n++) {
      if (userCmdLc[n]==f || userCmdLc[n]==l || userCmdLc[n]==r) {
        cmd += userCmdLc[n];
      }
      else {
        console.log("The "+userCmdLc[n]+" command is not recognized");
      }
    console.log("The approved route is " + cmd);
    return(cmd);
    }
  }
  else { 
    console.log("No route given");
  }
} 
  
  
function executeCommand(cmd) {
  var len = cmd.length;
  var step;
  for (step = 0; step < len; step++){
    if (cmd[step]=='f') {
      moveForward();
    }
    else if (cmd[step]=='l') {
      turnLeft();
    } 
    else if (cmd[step]=='r') {
      turnRight();
    } 

  } 
travelLog();
}
    
function travelLog() {

}


