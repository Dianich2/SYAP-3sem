alert("exercise 1");
function basicOperation(operation, value1, value2) {
    switch(operation){
        case '+':{
            return value1 + value2;
        }
        case '-':{
            return value1 - value2;
        }
        case '*':{
            return value1 * value2;
        }
        case '/':{
            if(value2 == 0){
                alert("Делить на ноль нельзя!");
                return;
            }
            return value1 / value2;
        }
        default:{
            return "Неверный оператор";
        }
    }
}

let result = basicOperation('+', 5, 10); // result = 15

alert(result);

alert("exercise 2");

let digit = parseInt(prompt("Введите число ", ""));

function sumcub(v){
    let sum = 0;
    for(let i = 1; i <= digit; i++){
        sum += Math.pow(i, 3);
    }
    return sum;
}


alert(`Сумма кубов чисел от 1 до ${digit} = ${sumcub(digit)}`);

alert("exercise 3");

let kol = parseInt(prompt("Введите количество чисел в массиве", ""));
let mas = new Array(kol);
for(let k = 0; k < kol; k++){
    mas[k] = parseInt(prompt("Введите элемент массива"));
}

function average(a){
    let sum2 = 0;
    let con = 0;
    for(let j = 0; j < a.length; j++){
        sum2 += a[j];
        con++;
    }
    return sum2 / con;
}

let result2 = average(mas);

alert(result2);

alert("exercise 4");

let str = prompt("Введите строку", "");

function reverseEnglish(strbuf){
    let strres = "";
    for(let i = strbuf.length; i >= 0; i--){
        if((strbuf[i] >= 'A' && strbuf[i] <= 'Z') || (strbuf[i] >= 'a' && strbuf[i] <= 'z')){
            strres += strbuf[i];
        }
    }
    return strres;
}

alert(`Новая строка ${reverseEnglish(str)}`);

alert("exercise 5");

let digit2 = parseInt(prompt("Введите число", ""));
let str2 = prompt("Введите строку", "");

function mulstring(digit, str){
    let bufs = "";
    for(let i = 0; i < digit; i++){
        bufs += str;
    }
    return bufs;
}

alert(`Полученная строка ${mulstring(digit2, str2)}`);

alert("exercise 6");

let count1 = parseInt(prompt("Введите размер первого массива строк", ""));
let mas1 = new Array(count1);

for(let i = 0; i < count1; i++){
    mas1[i] = prompt("Введите строку-элемент первого массива","");
}

let count2 = parseInt(prompt("Введите размер второго массива строк", ""));

let mas2 = new Array(count2);

for(let i = 0; i < count2; i++){
    mas2[i] = prompt("Введите строку-элемент второго массива","");
}

function newmas(mas1, mas2){
    let mas3 = new Array();
    for(let i = 0; i < mas1.length; i++){
        if(!mas2.includes(mas1[i])){
            mas3.push(mas1[i]);
        }
    }
    return mas3;
}

let newmassive = newmas(mas1, mas2);
let stringnewmas = newmassive.join(' ');
alert(stringnewmas);