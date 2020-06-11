let temp, temp2, a, b, p, q;
var str = "";
var variant = "";
// Input from user
var modi = prompt("Enter the moving directions:", "");

//splitting function using space delimiter
var res = modi.split(" ");

//object creation
let queen = {
  direction: "S",
  position: {
    x: 0,
    y: 0
  }
};
// to check if string is alphabet
/*function isAlpha(variant) {
    if (variant >= 65 && variant <= 127) {
        return true;
    } else {
        return false;
    }
}

//splice the no.
for (i = 0; i <= res.length; i++) {
    if (isAlphabet(res[i])) {
        str = str + res[i];
    }
}*/
var direction = res[0].slice(0, 1);
console.log(direction);
var steps = res[0].slice(1);
console.log(steps);

var condo = changeDirection(steps, direction);

// movement function

function changeDirection(a, b) {
  switch (direction) {
    case "S":
      temp = queen.position.x + steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        posLog(temp, 0);
        return 0;
      } else {
        console.log("Sorry Out of Boundary");
      }
      break;
    case "N":
      temp = queen.position.x - steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        posLog(temp, 0);
      } else {
        console.log("Sorry Out of Boundary");
      }
      break;
    case "E":
      temp = queen.position.y + steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        posLog(0, temp);
      } else {
        console.log("Sorry Out of Boundary");
      }
      break;
    case "W":
      temp = queen.position.x - steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        posLog(0, temp);
      } else {
        console.log("Sorry Out of Boundary");
      }
      break;
    case "NE":
      temp = queen.position.x - steps;
      temp2 = queen.position.y + steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        queen.position.y = temp2;
        posLog(temp, temp2);
      } else {
        console.log("Sorry Out of Boundary");
      }
      break;
    case "SE":
      temp = queen.position.x + steps;
      temp2 = queen.position.y + steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        queen.position.y = temp2;
        posLog(temp, temp2);
      } else {
        console.log("Sorry Out of Boundary");
      }
      break;

    case "NW":
      temp = queen.position.x - steps;
      temp2 = queen.position.y - steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        queen.position.y = temp2;
        posLog(temp, temp2);
      } else {
        console.log("Sorry Out of Boundary");
      }
      break;
    case "SW":
      temp = queen.position.x + steps;
      temp2 = queen.position.y - steps;
      if (boundaryCheck(temp)) {
        queen.position.x = temp;
        queen.position.y = temp2;
        posLog(temp, temp2);
      } else {
        console.log("Sorry Out of Boundary");
      }
      break;
  }
}
// Boundary check Function
function boundaryCheck(pos) {
  if (pos >= 0 && pos <= 7) {
    return 1;
  } else {
    return 0;
  }
}
// Position log
function posLog(p, q) {
  console.log("The queen is at" + p + "," + q + " position");
  return 0;
}
