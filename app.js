


//date
const date  = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const datedays=days[date.getDay()];
const yil=date.getFullYear();    
const ay=date.getMonth()+1;
const gun=date.getDate();
const fullyear=`${yil}/${ay}/${gun}`

document.querySelector(".date").innerText=`${datedays}-${fullyear}`;



//*selector
const addBtn=document.querySelector(".addBtn");
let input=document.querySelector("#myInput");
const myTodos=document.querySelector("#mytodos");




//* add btn click
addBtn.addEventListener("click",()=>{
    if(input.value==""){
    alert("Please enter your a task")}
  
    else{
      myTodos.innerHTML+=`<li class="task"><i class="fa-solid fa-check fa-lg"></i><span class="content">${input.value}</span><i class="fa-solid fa-trash"></i></li>`
      input.value=""
      todoCompleted()
  
    }
  })

  //* capturing *//
myTodos.onclick=function(event){
   
    if(event.target.className=="fa-solid fa-check fa-lg"){
        event.target.nextElementSibling.classList.toggle("line-through");
        event.target.style.color="white" 
        event.target.parentElement.style.backgroundColor="green"
        todoCompleted()
      }
      else if (event.target.classList.contains("fa-trash")) {
    
        if(event.target.previousElementSibling.classList.contains("line-through")){
          //console.log(event.target);
        event.target.closest(".task").remove();
        todoCompleted()
        }
        else{
            alert("Task not completed")
        }
    
    }

}

//enter btn
input.addEventListener('keydown', (event)=>{
    if (event.key == 'Enter'){
        addBtn.click();
    }
  })



function todoCompleted(){
let completed=0;
const todo_status=document.querySelector(".todo_status")
const totalTasks = document.querySelectorAll(".task").length;
const span=document.querySelectorAll(".task span").forEach((v)=>{
  if (v.classList.contains("line-through")){
   completed++
  };
})

todo_status.innerText = `${completed} OUT OF ${totalTasks} TASKS COMPLETED`;
}








  




  