let i;
let same;
let buf;
let option;
let correctOption;
let op = [];

document.getElementById('text1').value = card1;
document.getElementById('text2').value = card2;

same = findEle();
// document.getElementById('answer').innerHTML = same;

displayOptions();

// putting the correct option in any one of the given options
correctOption = Math.floor(Math.random() * 4);
console.log(correctOption + 1);

insertCorrectOption();



function findEle() {
    let j;
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (card1[i] == card2[j]) {
                return card1[i];
            }
        }
    }
}

function displayOptions() {
    // generating random options
    for (i = 0; i < 4; i++) {
        op[i] = Math.floor(Math.random() * 8);
    }

    // checking if generated options are different or not
    while (op[0] == op[1] || op[0] == op[2] || op[0] == op[3] || op[1] == op[2] || op[1] == op[3] || op[2] == op[3]) {
        if (op[0] == op[1]) {
            op[1] = Math.floor(Math.random() * 8);
        }

        if (op[0] == op[2]) {
            op[2] = Math.floor(Math.random() * 8);
        }

        if (op[0] == op[3]) {
            op[3] = Math.floor(Math.random() * 8);
        }

        if (op[1] == op[2]) {
            op[2] = Math.floor(Math.random() * 8);
        }

        if (op[1] == op[3]) {
            op[3] = Math.floor(Math.random() * 8);
        }

        if (op[2] == op[3]) {
            op[3] = Math.floor(Math.random() * 8);
        }
    }


    /*for (i = 0; i < 4; i++) {
        console.log("Options " + op[i]);
    }*/


    document.getElementById('pb1').innerHTML = card1[op[0]];
    document.getElementById('pb2').innerHTML = card1[op[1]];
    document.getElementById('pb3').innerHTML = card2[op[2]];
    document.getElementById('pb4').innerHTML = card2[op[3]];
    
}

function insertCorrectOption() {
    if (correctOption == 0) {
        document.getElementById('pb1').innerHTML = same;
    }

    if (correctOption == 1) {
        document.getElementById('pb2').innerHTML = same;
    }

    if (correctOption == 2) {
        document.getElementById('pb3').innerHTML = same;
    }

    else {
        document.getElementById('pb4').innerHTML = same;
    }

    while (checkForDifference()) {
        if (correctOption == op[0]) {
            op[0] = Math.floor(Math.random() * 8);
        }

        if (correctOption == op[1]) {
            op[1] = Math.floor(Math.random() * 8);
        }

        if (correctOption == op[2]) {
            op[2] = Math.floor(Math.random() * 8);
        }

        if (correctOption == op[3]) {
            op[3] = Math.floor(Math.random() * 8);
        }
    }
}

function checkForDifference() {
    return op[0] == correctOption || op[1] == correctOption || op[2] == correctOption || op[3] == correctOption || op[0] == op[1] || op[0] == op[2] || op[0] == op[3] || op[1] == op[2] || op[1] == op[3] || op[2] == op[3];
}

function b1Click() {
    option = 1;
    judge();
}

function b2Click() {
    option = 2;
    judge();
}

function b3Click() {
    option = 3;
    judge();
}

function b4Click() {
    option = 4;
    judge();
}

function judge() {
    if (option == correctOption + 1) {
        document.getElementById('answer').innerHTML = "You're right!!"
    }

    else {
        document.getElementById('answer').innerHTML = "Your answer is wrong. The correct answer is " + same;
    }
}
