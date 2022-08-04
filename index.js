player1 = "Home";
player2 = "Guest";
document.getElementById('player-name1').textContent = player1;
document.getElementById('player-name2').textContent = player2;

display1 = document.getElementById('score1');
display2 = document.getElementById('score2');
number1 = 0;
number2 = 0;


function num1(){
    number1 += 1;
    display1.textContent = number1;
    number1;
};
function num2(){
    number1 += 2;
    display1.textContent = number1;
    number1;
}
function num3(){
    number1 += + 3;
    display1.textContent = number1;
    number1;
}
function num11(){
    number2 += 1;
    display2.textContent = number2;
    number2;
};
function num22(){
    number2 += 2;
    display2.textContent = number2;
    number2;
}
function num33(){
    number2 += 3;
    display2.textContent = number2;
    number2;
}

function reset(){
    let resetnum = "0"
    display1.textContent = resetnum + 0;
    display2.textContent = resetnum + 0;
    number1 = 0;
    number2 = 0;
}


