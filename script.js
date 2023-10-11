console.log("Tic Tac Toe")
let music =new Audio("music.mp3");
let auturn =new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn="X";
let gameove=false;
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText=== boxtexts[e[1]].innerText) && ((boxtexts[e[1]].innerText=== boxtexts[e[2]].innerText) &&(boxtexts[e[0]].innerText!==''))){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText + "Won";
            gameove=true;
            let bb=document.querySelectorAll('.boxtext');
    Array.from(bb).forEach(element=>{
        element.innerText=" ";
    })
            gameover.play();
        }
    })
}
music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText= turn;
            turn=changeTurn();
            auturn.play();
            checkWin();
            if(!gameove){
                document.getElementsByClassName("info")[0].innerText="Turn for"+ turn;
            }
        }
    })
})
reset.addEventListener('click',()=>{
    let bb=document.querySelectorAll('.boxtext');
    Array.from(bb).forEach(element=>{
        element.innerText=" ";
    })
    turn="X";
    gameove=false;
    document.getElementsByClassName("info")[0].innerText="Turn for"+ turn;
})