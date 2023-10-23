// list down all winning combination 

let winningCombination= [
    [1,2,3], //vertical combination 
    [4,5,6], //vartical
    [7,8,9], //vertical
    [1,4,7], //horizontal
    [2,5,8], //horizonal
    [3,6,9], //horizontal
    [1,5,9], //diagonal
    [3,5,9] //diagonal
]



//accessing all boxes

let boxelement = document.querySelectorAll(".box")


//providing eventlistener to all the boxes

// using of in for loop means to target all the key
// using in in for loop means to target all the key
// we can write anyting inplace of handleclick
for(elem of boxelement){
    elem.addEventListener("click",handleClick);
}


let click = 0;
let isWon= false
let xAttempts = [];
let oAttempts = [];


// we can write anyting in place of event
function handleClick(event){
    // console.log(event.target.id)
    let id = event.target.id;
    let ptag = document.createElement("p")
    ptag.style.color="pink"
    boxelement[id-1].appendChild(ptag)
    if(click%2 ==0){
        ptag.textContent = "X"
        click++
        xAttempts.push(parseInt(id));
        result(xAttempts,"X")
    }else{
        ptag.textContent="O"
        click++
        oAttempts.push(parseInt(id));
        result(oAttempts,"O")
    }
    if(click == 9 && isWon==false){
            resultBox.style.visibility="visible";
            messageBox.textContent = "It's a Draw"     
    }
}


let resultBox=document.getElementById("result")
let messageBox=document.getElementById("message")

function result(playerArry, player){
    // console.log(player, playerArry)

    for(let i=0; i<winningCombination.length;i++){
        // console.log(winningCombination[i])
        let check=true;
        for(let j=0;j<winningCombination[i].length;j++){
            if(playerArry.includes(winningCombination[i][j])==false){
                check=false
                break;
            }
        }
        if(check==true){
            isWon= true;
            resultBox.style.visibility="visible"
            messageBox.textContent = player + " won the Match"
            // console.log(player, "won the match")
        }
    }
}
    document.getElementById("button").addEventListener('click',()=>{
        // we can use window.location.reload to activate play again.
        // window.location.reload() 
        history.go(0)
})
