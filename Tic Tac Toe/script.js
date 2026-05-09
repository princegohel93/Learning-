let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn")
let msg_con = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame =() => {
  turnO = true;
  enableBoxes();
  msg_con.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "black";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for(let box of boxes) {
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "" ;
  }
}

const showWinner = (winner) => {
    msg.innerText = `congrats winner is ${winner}`;
    msg.style.color = "yellow";
    msg_con.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    

    if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
    }
  }
};



newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);