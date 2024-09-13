alert("exercise 1");
let a = 5;
alert(a + " " + typeof(a));

let nam = "Name";
alert(nam + " " + typeof(nam));

let i = 0;
alert(i + " " + typeof(i));

let double = 0.23;
alert(double + " " + typeof(double));

let result = 1 / 0;
alert(result + " " + typeof(result));

let answer = true;
alert(answer + " " + typeof(answer));

let no = null;
alert(no + " " + typeof(no));

alert("exercise 2");

alert("Количество квадратов = " + (41 * 21 / 25));

alert("exercise 3");

let i1 = 2;
alert(`i1 = ${i1}`)
let a1 = ++i1;
let b1 = i1++;
alert(`a1 = ++i1 = ${a1} b1 = i1++ = ${b1} a1 > b1 ${a1 > b1}`);

alert("exercise 4");

let comp1 = "Котик" > "котик" ? true: false;
alert("Котик > котик " + comp1);
let comp2 = "Котик" > "китик" ? true: false;
alert("Котик > китик " + comp2);
let comp3 = "Кот" > "Котик" ? true: false;
alert("Кот > Котик " + comp3);
let comp4 = "Привет" > "Пока" ? true: false;
alert("Привет > Пока " + comp4);
let comp5 = 73 > "53" ? true: false;
alert("73 > \"53\" " + comp5);
let comp6 = false == 0 ? true: false;
alert("false == 0 " + comp6);
let comp7 = 54 == true ? true: false;
alert("54 == true " + comp7);
let comp8 = 123 == false ? true: false;
alert("123 == false " + comp8);
let comp9 = true == "3" ? true: false;
alert("true == \"3\" " + comp9);
let comp10 = 3 > "5мм" ? true: false;
alert("3 > \"5мм\" " + comp10);
let comp11 = 8 > "-2" ? true: false;
alert("8 > \"-2\" " + comp11);
let comp12 = 34 == "34" ? true: false;
alert("34 == \"34\" " + comp12);
let comp13 = null == undefined ? true: false;
alert("null == undefined " + comp13);

alert("exercise 5");

const inputname = prompt("Введите ФИО преподавателя", "");
const teachername = "Кудлацкая Марина Федоровна";
const componentsofname = teachername.toLowerCase().split(' ');
const inputToLower = inputname.toLowerCase().split(' ');

let check = true;

for(let i = 0; i < inputToLower.length; i++){
    if(componentsofname.includes(inputToLower[i])){
        continue;
    }
    alert("Вы ошиблись!");
    check = false;
    break;
}

if(check){
    alert("Вы правы!");
}

alert("exercise 6");

const russian = confirm("Студент сдал русский?");
const math = confirm("Студент сдал математику?");
const english = confirm("Студент сдал английский?");

if(russian && math && english){
    alert("Студент переведен на следующий курс");
}
else if(russian || math || english){
    alert("У студента есть пересдачи");
}
else{
    alert("Студент будет отчислен");
}

alert("exercise 7");

alert(`true + true = ${true + true}`);
alert(`0 + "5" = ${0 + "5"}`);
alert(`5 + "мм" = ${5 + "мм"}`);
alert(`8 / Infinity = ${8 / Infinity}`);
alert(`9 * "\n9" = ${9 * "\n9"}`);
alert(`null - 1 = ${null - 1}`);
alert(`"5" - 2 = ${"5" - 2}`);
alert(`"5px" - 3 = ${"5px" - 3}`);
alert(`true - 3 = ${true - 3}`);
alert(`7 || 0 = ${7 || 0}`);

alert("exercise 8");

let mas = [10];
for(let j = 0; j < 10; j++){
    if((j + 1) % 2 == 0){
        mas[j] = j + 3;
    }
    else{
        mas[j] = (j + 1) + "мм";
    }
}

alert(mas.join(' '));

alert("exercise 9");

alert("через switch");
let dayOfWeek = prompt("Введите номер дня недели", "");
switch(dayOfWeek){
    case '1':{
        alert("Понедельник");
        break;
    }
    case '2':{
        alert("Вторник");
        break;
    }
    case '3':{
        alert("Среда");
        break;
    }
    case '4':{
        alert("Четверг");
        break;
    }
    case '5':{
        alert("Пятница");
        break;
    }
    case '6':{
        alert("Суббота");
        break;
    }
    case '7':{
        alert("Воскресенье");
        break;
    }
    default:{
        alert("Некорректный ввод!\nВ неделе 7 дней");
    }
}

alert("через массив");
let weekdays = ["Понедельник","Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let dayOfWeek2 = parseInt(prompt("Введите номер дня недели", "")) - 1;
if(dayOfWeek2 >= 0 && dayOfWeek2 <= 6){
    alert(weekdays[dayOfWeek2] + " соответсвует вашей цифре");
}
else{
    alert("Некорректный ввод!\nВ неделе 7 дней");
}

alert("через объект");
const daysOfWeek = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
};
let dayOfWeek3 = parseInt(prompt("Введите номер дня недели", ""));
if(dayOfWeek3 > 0 && dayOfWeek <= 7){
    alert(daysOfWeek[dayOfWeek3] + " соответсвует вашей цифре");
}
else{
    alert("Некорректный ввод!\nВ неделе 7 дней");
}

alert("exercise 10");

function combineParametrs(first = "defaultparametr", inputparametr){
    if(inputparametr == undefined){
        alert("Вводимый параметр имеет тип undefined");
    }
    return "Параметры " + first + " " + inputparametr;
}

let inputparm = prompt("Введите параметр для объединения строк", "");
alert(combineParametrs(undefined, inputparm));

alert("exercise 11");

let firstside = parseFloat(prompt("Введите длину первой стороны", ""));
let secondside = parseFloat(prompt("Введите длину второй стороны", ""));

alert("Function Declaration");
function params(firstside, secondside){
    if(firstside == secondside){
        alert("Это квадрат\n Его периметр = " + (firstside + secondside) * 2);
    }
    else{
        alert("Это прямоугольник\n Его площадь = " + (firstside * secondside));
    }
}

params(firstside, secondside);

alert("Function Expression");
let par = function(firstside, secondside){
    if(firstside == secondside){
        alert("Это квадрат\n Его периметр = " + (firstside + secondside) * 2);
    }
    else{
        alert("Это прямоугольник\n Его площадь = " + (firstside * secondside));
    }
};

par(firstside, secondside);

alert("функция стрелка");

let funcArrow = (firstside, secondside) => 
    (firstside === secondside ? alert("Это квадрат\n Его периметр = " + 
    (firstside + secondside) * 2) :  alert("Это прямоугольник\n Его площадь = " + (firstside * secondside)));

funcArrow(firstside, secondside);