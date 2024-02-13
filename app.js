let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newgameBtn=document.querySelector("#msg-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let draw=document.querySelector(".draw");
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3.4,5],
    [6,7,8]
    
];

let turno=true; //playerx playero
const resetgame=()=>{
    let turno=true; //playerx playero
    enableboxes()
    msgContainer.classList.add("hide")
}
    
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
            count=count+1;
        }
        else{
            box.innerText="X";
            turno=true;
            count=count+1;
        }
        box.disabled=true;
        checkpattern();
    })
})

const boxdisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const showWinner=(winner)=>{
    msg.innerText= `Winner is ${winner}, Congratulations!!`;
    msgContainer.classList.remove("hide");
    msg.classList.remove("hide")
    boxdisable();
}
let win;
const checkpattern=()=>{
    for( let pattern of winpatterns){
        
           let pos1val= boxes[pattern[0]].innerText;
           let pos2val= boxes[pattern[1]].innerText;
           let pos3val= boxes[pattern[2]].innerText;
           if(pos1val!="" && pos2val!="" && pos3val!=""){

               if(pos1val===pos2val && pos2val===pos3val){
                   win=pos1val;
                   showWinner(pos1val);
                }
            }
        
        }
    }
    if(win===""){
        if(count===9){
         draw.innerText=`The game is Tie`;
         msgContainer.classList.remove("hide");
         draw.classList.remove("hide");
    }
}
resetBtn.addEventListener("click",resetgame);
newgameBtn.addEventListener("click",resetgame)