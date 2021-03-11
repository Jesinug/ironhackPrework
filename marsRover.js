
function turnLeft(rover) {
    switch (rover.direction) {
      case "N" :
        rover.direction = "W";
        break;
      case "W" :
        rover.direction = "S";
        break;
      case "S" :
        rover.direction = "E";
        break;
      case "E" :
        rover.direction = "N";
        break;
        default :
    }
  }
  
  
  function turnRight(rover) {
     switch (rover.direction) {
       case "N" :
         rover.direction = "E";
         break;
       case "E" :
         rover.direction = "S";
         break;
       case "S" :
         rover.direction = "W";
         break;
       case "W" :
         rover.direction = "N";
         break;
         default :
     }
  }
  
  
  function moveForward(rover) {
    rover.travelLog.push(`${rover.x}, ${rover.y}`);
    switch (rover.direction) {
      case "N" : 
        rover.y -= 1;
        break;
      case "E" :
        rover.x += 1;
        break;
      case "S" :
        rover.y += 1;
        break;
      case "W" :
        rover.x -= 1;
        break;
        default :
    }
  }
  
  let rover = {
    direction : "N",
    x : 2,
    y : 2,
    travelLog : []
  };
  
  function commands(someArray) {
    for (let i=0 ;i<=someArray.length-1 ;i++) {
      switch (someArray[i]) {
        case "l" :
          turnLeft(rover);
          break;
        case "r" :
          turnRight(rover);
          break;
        case "f" :
          moveForward(rover);
          break;
          default :  
      }
    }
  }
  
  let commandString = 'rfrfflrfrfflrfrfflrfrfflrfrfflrfrfflrfrfflrfrfflrfrfflrfrffl';
  commands(commandString);
  
  console.log(rover);
      
  
  
  /*//jueguito: de 22N a 34E
    console.log(`Initial rover location is ${rover.x} and ${rover.y} with direction ${rover.direction}`);
  
  turnRight(rover);
  moveForward(rover);
  turnRight(rover);
  moveForward(rover);
  moveForward(rover);
  turnLeft(rover);
  
    console.log(`Final rover location is ${rover.x} and ${rover.y} with direction ${rover.direction}`);
    */
  
  
  