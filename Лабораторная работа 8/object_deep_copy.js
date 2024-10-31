let  user = {
    name: 'Masha',
    age: 21
};
let usercopy = {...user};


let numbers = [1, 2, 3];
let numberscopy = [...numbers];


let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};
let user1copy = {
    ...user1,
    location:{...user1.location}
};


let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};
let user2copy = {
    ...user2,
    skills:[...user2.skills]
};


const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]
const arraycopy = array.map(el => ({...el}));


let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};
let user4copy = {
    ...user4,
    studies:{
        ...user4.studies,
        exams:{
            ...user4.studies.exams
        }
    }
};


let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};
let user5copy = {
    ...user5,
    studies:{
        ...user5.studies,
        department:{
            ...user5.studies.department
        },
        exams:user5.studies.exams.map(el => ({...el}))
    }
};


let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};
let user6copy = {
    ...user6,
    studies:{
        ...user6.studies,
        department:{
            ...user6.studies.department
        },
        exams:user6.studies.exams.map(el => ({... el, 
            professor:{
                ...el.professor
            }}))
    }
};


let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
        ]
    }
};
let user7copy = {
    ...user7,
    studies:{
        ...user7.studies,
        department:{
            ...user7.studies.department,
        },
        exams:user7.studies.exams.map(el =>({...el,
            professor:{
                ...el.professor,
                articles: el.professor.articles.map(el2 =>({...el2}))
            }
        }))
    }
};


let store = {
    state:{
        profilePage:{
            posts:[
                {id:1, message: 'Hi', likesCount:12},
                {id:2, message: 'By', likesCount:1}
            ],
            newPostText:'About me',
        },
        dialogsPage:{
            dialogs:[
                {id:1, name:'Valera'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sasha'},
                {id:4, name:'Victor'},
            ],
            messages:[
                {id:1, message: 'hi'},
                {id:2, message: 'hi hi'},
                {id:3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    }
};
let storecopy = {
    ...store,
    state:{
        profilePage:{
            ...store.state.profilePage,
            posts:store.state.profilePage.posts.map(el =>({...el}))
        },
        dialogsPage:{
            dialogs:store.state.dialogsPage.dialogs.map(el2 => ({...el2})),
            messages:store.state.dialogsPage.messages.map(el3 => ({...el3}))
        },
        sidebar: store.state.sidebar.map(el4 =>({...el4}))
    }
};

////////////////////////////////////////////////////////////////

user5copy.studies.department.group = 12;
user5copy.studies.exams[1].mark = 10;

////////////////////////////////////////////////////////

user6copy.studies.exams[0].professor.name = "New name";

////////////////////////////////////////////////////////////////

user7copy.studies.exams[1].professor.articles[1].pagesNumber = 3;

////////////////////////////////////////////////////////

storecopy.state.dialogsPage.messages = storecopy.state.dialogsPage.messages.map(function(el){
    return {id:el.id, message: 'Hello'}
});

console.log(storecopy);