let temp;
let temp2;
var str = "";
// Input from user
var modi = prompt("Enter the moving directions:", "");

//splitting function using space delimiter
var res = modi.split();

//object creation
let queen = {
    direction: 'S',
    position: {
        x: 0,
        y: 0
    }
}
//splice the no.
for (i = 0; i <= res.length; i++) {
    if (isAlphabet(res[i])) {
        str = str + res[i];
    }
}
direction = str
steps = res.splice(res.length - 1, 1);

// movement function

function changeDirection(steps, direction) {
    switch (direction) {
        case 'S':
            temp = queen.position.x + steps;
            if (boundaryCheck(temp)) {
                queen.position.x = temp;
                posLog(temp, 0);
            } else {
                console.log("Sorry Out of Boundary");
            }
            break;
        case 'N':
            temp = queen.position.x - steps;
            if (boundaryCheck(temp)) {
                queen.position.x = temp;
                posLog(temp, 0);
            } else {
                console.log("Sorry Out of Boundary");
            }
            break;
        case 'E':
            temp = queen.position.y + steps;
            if (boundaryCheck(temp)) {
                queen.position.x = temp;
                posLog(0, temp);
            } else {
                console.log("Sorry Out of Boundary");
            }
            break;
        case 'W':
            temp = queen.position.x - steps;
            if (boundaryCheck(temp)) {
                queen.position.x = temp;
                posLog(0, temp);
            } else {
                console.log("Sorry Out of Boundary");
            }
            break;
        case 'NE':
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
        case 'SE':
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

        case 'NW':
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
        case 'SW':
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
    if (pos >= 0 && pos <= 8) {
        return true;
    } else {
        return false;
    }
}
// Position log
function posLog(x, y) {
    console.log("The queen is at" + $temp + "," + $temp2 + " position");
}