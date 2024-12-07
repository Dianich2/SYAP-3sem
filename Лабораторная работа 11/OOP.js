class Task{
    constructor(idTask, nameTask, stateTask){
        this.id = idTask;
        this.name = nameTask;
        this.state = stateTask;
    }

    changeName(newName){
        this.name = newName;
    }

    changeState(newState){
        this.state = newState;
    }
}

class TodoList{
    tasks = [];
    constructor(idList, nameList){
        this.id = idList;
        this.name = nameList;
    }

    addTask(task){
        this.tasks.push(task);
    }

    filterTasksByState(state){
        return this.tasks.filter(n => n.state == state);
    }
}


let List;

window.onload = function(){
    List = new TodoList(0, "newList");
}

let i = 0;

document.getElementById('add').addEventListener('click', function() {
    let name = document.getElementById('tas').value;
    let task = new Task(i, name, false);
    document.getElementById('tas').value = '';
    i++;
    List.addTask(task);
    loadList(List);
});

document.getElementById('showAll').addEventListener('click', function() {
    loadList(List);
});
document.getElementById('showDone').addEventListener('click', function() {
    loadListByState(List, true);
});
document.getElementById('showNoDone').addEventListener('click', function() {
    loadListByState(List, false);
});

function loadListByState(List, state) {
    let list = document.getElementById('tasks');
    list.innerHTML = '';
    let tasksToDisplay = List.filterTasksByState(state);
    tasksToDisplay.forEach(task => {
        createTaskElement(list, task);
    });
}

function loadList(List) {
    let list = document.getElementById('tasks');
    list.innerHTML = '';
    List.tasks.forEach(task => {
        createTaskElement(list, task);
    });
}

function createTaskElement(list, task) {
    let cur = document.createElement('li');
    cur.setAttribute('data-id', task.id);
    
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.state;
    
    checkbox.addEventListener('change', function(event) {
        let taskId = cur.getAttribute('data-id');
        let task = List.tasks.find(t => t.id == taskId);
        task.changeState(event.target.checked);
    });

    let text = document.createElement('input');
    text.value = task.name;
    text.disabled = true;

    const button1 = document.createElement('button');
    button1.textContent = 'Редактировать';
    button1.id = 'red';
    button1.addEventListener('click', function() {
        text.disabled = false; 
        text.focus();
        text.addEventListener('blur', function() {
            task.changeName(text.value);
            text.disabled = true; 
        }, { once: true }); 
    });

    const button2 = document.createElement('button');
    button2.textContent = 'Удалить';
    button2.id = 'rem';
    button2.addEventListener('click', function() {
        List.tasks = List.tasks.filter(t => t.id != task.id);
        loadList(List); 
    });
    cur.appendChild(checkbox);
    cur.appendChild(text);
    cur.appendChild(button1);
    cur.appendChild(button2);
    list.appendChild(cur);
}
