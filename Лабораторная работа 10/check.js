const set = new Set([1, 1, 2, 3, 4]);

console.log(set);

/////////////////////////////////

const name = "Lydia";
let age = 21;

console.log(delete name); // нельзя удалить
console.log(delete age); // нельзя удалить

///////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];
const[y] = numbers;

console.log(y);

////////////////////////////////////////////

const user = {name: "Lydia", age: 21};
const admin = {admin: true, ... user};

console.log(admin);

////////////////////////////////////////////

const person = {name: "Lydia"};

Object.defineProperty(person, "age", {value: 21});

console.log(person);
console.log(Object.keys(person)); // не будет age, так как оно не enumerable

//////////////////////////////////////////

const a = {};
const b = {key : "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]); // так как у обоих будет [object Object]

///////////////////////////////////////

let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber(); 
const num2 = increasePassedNumber(num1);

console.log(num1); // сначала произошло присвоение, потом увеличение
console.log(num2);  // сначала произошло присвоение, потом ничего не произошло, так как константа

///////////////////////////////////////////////

const value = {number:10};

const multiply = (x = {... value}) => {
    console.log((x.number *= 2));
};

multiply(); // будет создан новый объект
multiply();// будет создан новый объект
multiply(value); // будет взят объект value
multiply(value);// будет взят объект value

////////////////////////////////////////////////

[1, 2, 3, 4].reduce((x, y) => console.log(x, y));