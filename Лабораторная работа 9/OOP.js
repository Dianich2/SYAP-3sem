alert("square");
let square = {
    size: "big",
    color:"yellow"
}

let smallsquare = {
    __proto__ : square,
    size: "small"
}

alert(smallsquare.hasOwnProperty("color"));
///////////////////////////////////////
alert("circle");

let circle = {
    radius: 10,
    shape: "circle"
}

let greencircle = {
    __proto__ : circle,
    color: "green"
}

let dif = Object.getOwnPropertyNames(greencircle);
for(let i of dif){
    alert(`${i} : ${greencircle[i]}`)
}
///////////////////////////////////////////
alert('triangle');

let triangle = {
    shape: "triangle",
    countline: 1
}

let triangle2 = {
    __proto__ : triangle,
    countline: 3
}

for(let i in triangle2){
    alert(`${i} : ${triangle2[i]}`)
}

////////////////////////////////////////////

class Human {
    constructor(name = "Вася", surname = "Васильев", age = 20, yearOfBirthday = 2004, address = "ул. Свердлова") {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.yearOfBirthday = yearOfBirthday;
        this.address = address;
    }

    changeAddress(addr) {
        this.address = addr;
    }

    changeAge(year) {
        this.yearOfBirthday = year;
    }

    get age() {
        return new Date().getFullYear() - this.yearOfBirthday;
    }

    set age(year) {
        this.yearOfBirthday = new Date().getFullYear() - year;
    }
}

class Student extends Human {
    constructor(name, surname, yearOfBirthday, address, faculty = "ФИТ", course = 2, group = 8, numOfCard = "73231200") {
        super(name, surname, yearOfBirthday, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.numOfCard = numOfCard;
    }

    changeGroupAndCourse(gr, cr) {
        this.group = gr;
        this.course = cr;
    }

    getFullName() {
        alert(`${this.surname} ${this.name}`);
    }
}

class Faculty {
    constructor(nameFaculty = "ФИТ", countOfGroup = 10, countOfPeople = 300) {
        this.nameFaculty = nameFaculty;
        this.countOfGroup = countOfGroup;
        this.countOfPeople = countOfPeople;
    }

    changeCountOfGroup(gr) {
        this.countOfGroup = gr;
    }

    changeCountOfPeople(pl) {
        this.countOfPeople = pl;
    }

    getDev(students) {
        return students.filter(student => student.numOfCard[1] === '3').length; 
    }

    getGroup(students, group) {
        return students.filter(student => student.group === group);
    }
}

const student1 = new Student("Иван", "Иванов", 2002, "ул.Лесная");
const student2 = new Student("Петр", "Петров", 2001, "ул. Пушкина", "ФИТ", 3, 8, "73231300");

const faculty = new Faculty("ФИТ", 10, 300);

const students = [student1, student2];
console.log("Количество студентов специальности ДЭВИ:", faculty.getDev(students));

const group8Students = faculty.getGroup(students, 8);
for(let i of group8Students){
    console.log(`${i.name} ${i.surname}`);
}