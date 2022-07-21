var cnt = 1;
var input = document.getElementById('task-input');
var btn = document.getElementById('btn');
var ul = document.getElementById('list');

btn.addEventListener('click', (e)=>{
  if(input.value.length==0){
    alert("할일을 입력하세요!")
  }
  else{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    li.setAttribute("id","li"+cnt); 
    li.innerHTML += "<button type='button' onclick='removeTodo("+cnt+")'>삭제</button>";
    li.innerHTML += "<button type='button' onclick='completeTodo("+cnt+")'>완료</button>";
    ul.appendChild(li);
    cnt++;
    input.value="";
  
  }
})


input.addEventListener('keypress', (e)=> {
  if(e.key =='Enter'){
    if(input.value.length==0){
      alert("할일을 입력하세요!")
    }else{
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(input.value));
      li.setAttribute("id","li"+cnt); 
      li.innerHTML += "<button type='button' onclick='removeTodo("+cnt+")'>삭제</button>";
      li.innerHTML += "<button type='button' onclick='completeTodo("+cnt+")'>완료</button>";
      ul.appendChild(li);
      cnt++;
      input.value="";
    }
  }
})


function removeTodo(cnt){
  var todolist = document.getElementById('li'+cnt)
  ul.removeChild(todolist);
}

function completeTodo(cnt){
  var todolist = document.getElementById('li'+cnt) 
  todolist.style.textDecoration = "line-through"
  todolist.style.textDecorationColor = "red"
}

