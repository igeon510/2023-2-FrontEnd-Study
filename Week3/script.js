
var todolist=document.getElementById('todo');//todolist 객체 생성 
var done=document.getElementById('done');

function addTodolist(){
    var list = document.createElement('li');//li 요소 생성
    var but = document.createElement('button');//버튼요소생성
    var inputvalue = document.getElementById('inp').value; 
    list.innerText=inputvalue+" ";
    list.style.fontFamily="Nanum Gothic, sans-serif"; 
    list.style.fontSize="20px"; //만들어진 요소에 텍스트에 가져온 값 저장
    // 요소를 todolist 자식으로 할당
    but.textContent='✔️';
    but.style.fontSize='16px';
    
    todolist.appendChild(list);
    list.appendChild(but);  

    but.onclick=function(){
        if(list.parentNode===todolist){
            done.appendChild(list);
        }
        else {
            done.removeChild(list);
        }
    }

    
}
