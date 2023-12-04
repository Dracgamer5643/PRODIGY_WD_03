let boxes = document.querySelectorAll('.box');

let turn = 'X';
let isGameOver = false;

boxes.forEach(e=>{
    e.innerHTML = "";
    e.addEventListener('click', ()=>{
        if(!isGameOver && e.innerHTML == ""){
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            checkTurn();
        }
    })
})

function checkWin(){
    let winCondition = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [2,4,6], [0,4,8]
    ]

    for(let i = 0; i < winCondition.length; i++){
        let v0 = boxes[winCondition[i][0]].innerHTML;
        let v1 = boxes[winCondition[i][1]].innerHTML;
        let v2 = boxes[winCondition[i][2]].innerHTML;

        if (v0 != "" && v0 == v1 && v0==v2){
            isGameOver = true;
            document.querySelector('#result').innerHTML = turn + " Win";
            document.querySelector('#play-again').style.display = "block";

            for(let j = 0; j <3; j++) {
                boxes[winCondition[i][j]].style.backgroundColor = "cyan";
                boxes[winCondition[i][j]].style.color = "black";
            }
        }
    }
}

function checkDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e=>{
            if (e.innerHTML == "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector('#result').innerHTML = "Draw";
            document.querySelector('#play-again').style.display = "block";
        }
    }
}

function checkTurn(){
    if(turn == "X"){
        turn = "O";
        document.querySelector('.bg').style.left = "615px";
    }
    else{
        turn = "X";
        document.querySelector('.bg').style.left = "492px";
    }
}

document.querySelector('#play-again').addEventListener('click', ()=>{
    isGameOver = false;
    turn = 'X';
    document.querySelector(".bg").style.left = "492px";
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e=>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "white";
    })

})