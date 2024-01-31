let boxes=document.querySelectorAll('.box');
let reset=document.querySelector("#reset");
let newbt=document.querySelector("#new");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let turno=true;
const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetGame= () =>
{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
box.addEventListener("click", () =>{
    console.log("box was clicked");
    if(turno)
    {
        box.innerText="O";
        turno=false;
    }
    else{
        box.innerText="x";
        turno=true;
    }
    box.disabled=true;
    checkWinner();
});
});
const disableBoxes = () =>
{
    for(let box of boxes)
    {
    box.disabled=true;
}
}
const enableBoxes = () =>
{
    for(let box of boxes)
    {
    box.disabled=false;
    box.innerText="";
}
}
const showWinner= (Winner) =>
{
msg.innerText=`Congratulation, Winner is ${Winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}
const checkWinner = () =>
{
   /* for( let pattern of winpattern)
    {
        console.log(pattern[0],pattern[1],pattern[2])
        console.log(boxes[pattern[0]].innerText;
            boxes[pattern[1]].innerText;
            boxes[pattern[2]].innerText;
        };*/
        for(let pattern of winpattern)
        {
    let posi0=boxes[pattern[0]].innerText;
    let posi1=boxes[pattern[1]].innerText;
    let posi2=boxes[pattern[2]].innerText;
    if(posi0 != "" && posi1 !=  "" && posi2 !="")
{
    if(posi0===posi1 && posi1===posi2)
    {
        console.log("Winner", posi0);
        showWinner(posi0);
    }
    }
}
};
newbt.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);