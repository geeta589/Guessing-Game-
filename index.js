// ===== Random Number Game ==================


let  guess1 =0;

while(guess1<=10)
{

const a = parseInt(prompt('Enter your number 1 to 10'));
const b= Math.floor(Math.random() * 10 + 1);
console.log(b);
if(a==b)
{
    alert(' Congratulations ! Great you won');
}
else
{
    alert('Sorry! Try again');
}
guess1++
}

// const taskInput = document.getElementById("task-input");
// const createTaskBtn = document.getElementById("create-task-btn");
// const taskListUL = document.getElementById("task-list");

// Register the event listener
// createTaskBtn.addEventListener("click", addTask);
// document.body.addEventListener('pointermove', handleMove);

// function handleMove(event) {
//   // console.log(event);
//   console.log('Pointer X: ', event.x);
//   console.log('Pointer Y', event.y);
// }

// // Event Handler
// function addTask(event) {
//   // console.log(this.innerText);
//   console.log(event);
//   if (taskInput.value === "") return;

//   const li = document.createElement("li");
//   li.textContent = taskInput.value;
//   taskListUL.appendChild(li);
//   // clear input value
//   taskInput.value = "";
//   // focus back to the input
//   taskInput.focus();
// }

//=== =====   Guessing Game ================

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemepts = 0;
let guess;
let running =true;

while(running){
    guess = prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a Valid integer number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a Valid number");
    }
    else {
        attemepts++;
        if(guess < answer){
            window.alert("Number is Too Low! Try again");
        }
        else if(guess > answer){
            window.alert("Number is Too High! Try again");
        }
        else
        {
            window.alert(`Correct! The answer was ${answer}. It took you ${attemepts} attempts `);
            running = false;
        }
    }

}


//========== ===== Event handler ================

const ChagneColorBtn= document.getElementById("create-task-btn");
const hellotxt= document.getElementById("Hello");
ChagneColorBtn.addEventListener("click", onChangColorClick);
function onChangColorClick()
{
    setTimeout(changeColor,2000);
    ChagneColorBtn.disabled =true;
}

function changeColor(){
    ChagneColorBtn.disabled =false;
  hellotxt.style.color="green";
  
}