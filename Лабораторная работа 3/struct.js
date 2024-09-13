alert("exercise 1");

let a = [1,[1, 2, [3, 4]], [2, 4]];

let c = (arr) => {return arr.reduce((accumulator, current) =>{
    return accumulator.concat(Array.isArray(current) ? c(current) : current);
}, [])};

alert(c(a));

alert("exercise 2");

let b = [2, [1, 5, [3, 4, [4, 2]], [1, 2]]];

let func = (arr) => {return arr.reduce((sum, current) =>{
    return sum += Array.isArray(current) ? func(current) : current;
}, 0)}

alert(func(b));

alert("exercise 3");

let mas = [
    {name: "John", age: 17, groupId: 7},
    {name: "Pasha", age: 20, groupId: 5},
    {name: "Masha", age: 19, groupId: 4},
    {name: "Kolya", age: 21, groupId: 7},
    {name: "Roma", age: 19, groupId: 3},
];

let map = new Map();
for(let t of mas){
    if(t.age > 17){
        if(!map.has(t.groupId))
            map.set(t.groupId, []);
        map.get(t.groupId).push(t);
    }
}

map.forEach((value, key, map) =>{
    alert(`${key}: ${JSON.stringify(value)}`);
});


alert("exercise 4");

let buf = prompt("Введите строку", "");

let total1 = "";
let total2 = "";

for(let i = 0; i < buf.length; i++){
    total1 += buf.codePointAt(i);
}
alert(`total1 = ${total1}`);
for(let i = 0; i < total1.length; i++){
    if(total1[i] == '7'){
        total2 += '1';
    }
    else{
        total2 += total1[i];
    }
}
alert(`total2 = ${total2}`);
alert(+total1 - +total2);


alert("exercise 5");

function con(... o){
    let n = new Object();
    Object.assign(n, ... o);
    return n;
}

let r = con({a: 1, p: 2}, {b: 20, c: 40, d: 60});
for(let t in r){
    alert(`${t} ${r[t]}`);
}

alert("exercise 6");

function bashnya(i) {
    let buf = "*";
    let mas = [];
    const totalWidth = (i * 2) - 1;
    for (let j = 0; j < i; j++) {
        let space = " ".repeat((totalWidth - buf.length) / 2);
        mas.push(space + buf + space);
        buf += '**';
    }
    return mas;
}

let kol = parseInt(prompt("Введите количество этажей башни", ""));
alert(bashnya(kol).join('\n'));