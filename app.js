

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
  
    }
  })



  //* capturing 
myTodos.onclick=function(event){
   
    if(event.target.className=="fa-solid fa-check fa-lg"){
        event.target.nextElementSibling.classList.toggle("line-through");
      }
      else if (event.target.classList.contains("fa-trash")) {
    
        if(event.target.previousElementSibling.classList.contains("line-through")){
          //console.log(event.target);
        event.target.closest(".task").remove();
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


  //edit btn


  //task status