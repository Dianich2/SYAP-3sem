alert("exercise1");
let numbers = ["first", "second", "third"];
let [y] = numbers;
alert(y);

///////////////////////////////

alert("exercise2");
let user = {
    name: "Aleksey",
    age: 18,
}

let admin = {admin: "Админ", ...user};
for(let key in admin){
    alert(`${key}: ${admin[key]}`);
}

////////////////////////////////

alert("exercise3");

let store = {
    state:{
        profilePage:{
            posts:[
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage:{
            dialogs:[
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Victor'},
            ],
            messages:[
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
}

let {
    state:{
        profilePage:{
            posts,
        },
        dialogsPage:{
            dialogs,
            messages,
        },
    },
} = store;

for(let post of posts){
    alert(post.likesCount);
}

let filtering = dialogs.filter(item=> item.id % 2 == 0);
for(let dialog of filtering){
    alert(`${dialog.id} ${dialog.name}`);
}

store.state.dialogsPage.messages.map(item => item.message = "Hello user");
for(let curmessage of messages){
    alert(`${curmessage.id} ${curmessage.message}`);
}

///////////////////////////////////////////////

alert("exercise4");

let tasks = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Rest API", isDone: false},
    {id: 5, title: "GraphQL", isDone: false},
];

let newTask = {id: 10, title: "C#", isDone: false};

tasks = [ ...tasks, newTask];
for(let curtask of tasks){
    alert(`${curtask.id} ${curtask.title} ${curtask.isDone}`);
}

///////////////////////////////////////

alert("exercise5");

function sumValues(x, y, z){
    return x + y + z;
}

alert(sumValues(...[1, 2, 3]));