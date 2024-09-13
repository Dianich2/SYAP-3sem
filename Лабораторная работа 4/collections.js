alert("exercise 1");

let set = new Set();

function AddProductToSet(product){
    set.add(product);
    alert(`Добавляем ${product}`);
}

function RemoveProductFromSet(product){
    if(set.has(product)){
        set.delete(product);
        alert(`Удаляем ${product}`);
    }
    else{
        alert("Такого товара нет в списке");
    }
}

function CheckProductInSet(product){
    return set.has(product);
}

function CountOfElementsInSet(){
    return set.size;
}

AddProductToSet("Яблоко");
AddProductToSet("Молоко");
AddProductToSet("Хлеб");

alert(`Количество элементов в set = ${CountOfElementsInSet()}`);

RemoveProductFromSet("Молоко");

alert(`Есть молоко в списке?   ${CheckProductInSet("Молоко")}`);


///////////////////////////////////////////////////////////////////////////////

alert("exercise 2");

let students = new Set();

function addStudent(student){
    students.add(student);
}

function deleteStudent(creditNumber) {
    let found = false; 
    students.forEach(student => {
        if (student.creditNumber === creditNumber) {
            students.delete(student); 
            alert(`Студент с заданным номером зачетки удален`);
            found = true;
        }
    });
    if (!found) {
        alert(`В списке нет студента с таким номером зачетки`);
    }
}

function filterStudent(groupNumber){
    let f = false;
    alert(`Студенты с номером группы ${groupNumber}`);
    for(let t of students){
        if(t.groupNumber == groupNumber){
            f = true;
            alert(`${JSON.stringify(t)}`);
        }
    }
    if(!f){
        alert(`Никто не найден`);
    }
}

function sortStudent(){
    let buf = Array.from(students);
    buf.sort((a, b) => a.creditNumber - b.creditNumber);
    students = new Set(buf);
}

addStudent({firstname:"Pasha", lastname: "Sidorov", patronimic: "Igorevich", creditNumber: 1000003, groupNumber: 7});
addStudent({firstname:"Masha", lastname: "Popova", patronimic: "Alexandrovna", creditNumber: 1000004, groupNumber: 2});
addStudent({firstname:"Petr", lastname: "Sokolov", patronimic: "Leonidovich", creditNumber: 1000002, groupNumber: 4});
addStudent({firstname:"Dasha", lastname: "Smirnova", patronimic: "Nikolaevna", creditNumber: 1000001, groupNumber: 7});

filterStudent(7);

deleteStudent(1000001);

filterStudent(7);

sortStudent();

alert(`Список студентов, отсортированных по номеру зачетки`);
for(let t of students){
    alert(`${JSON.stringify(t)}`);
}

/////////////////////////////////////////////////////////////////////

alert("exercise 3");

let productStore = new Map();

function addProductToMap(id, name, count, cost){
    if(!productStore.has(id)){
        productStore.set(id, {name, count, cost});
    }
    else{
        let buf = productStore.get(id);
        buf.name = name;
        buf.cost = cost;
        buf.count = count;
    }
    alert(`Добавлен товар с id = ${id}, названием = ${name}, количеством = ${count}, ценой за кг = ${cost}`);
}

function deleteProductById(id){
    if(productStore.has(id)){
        productStore.delete(id);
    }
    else{
        alert("Товар с таким id не найден");
    }
}

function deleteProductByName(name){
    for(const [key, value] of productStore){
        if(value.name === name){
            deleteProductById(key);
        }
    }
}

function changeCountOfProduct(id, kol){
    if(productStore.has(id)){
        productStore.get(id).count = kol;
    }
    else{
        alert("Товар с таким id не найден");
    }
}

function changeCostOfProduct(id, cost){
    if(productStore.has(id)){
        productStore.get(id).cost = cost;
    }
    else{
        alert("Товар с таким id не найден");
    }
}

function getAmountOfProducts(){
    let amount = 0;
    for(let [key, value] of productStore){
        amount += value.count;
    }
    return amount;
}

function getCostOfProducts(){
    let costs = 0;
    for(let [key, value] of productStore){
        costs += (value.cost * value.count);
    }
    return costs;
}

addProductToMap(1, "Яблоко", 10, 2);
addProductToMap(5, "Апельсин", 20, 5);
addProductToMap(3, "Банан", 7, 6.5);
addProductToMap(2, "Помидор", 25, 3.5);

deleteProductById(4);
deleteProductById(5);

deleteProductByName("Помидор");

changeCountOfProduct(1, 20);

changeCostOfProduct(3, 7.5);

alert(`Общее количество товаров = ${getAmountOfProducts()}`);
alert(`Общая стоимость товаров = ${getCostOfProducts()}`);

///////////////////////////////////////////////////////////////////////////////////////

alert("exercise 4");

let cache = new WeakMap();

function func(inputdata){
    if(cache.has(inputdata)){
        alert("Данные были взяты из кэша");
        return cache.get(inputdata);
    }

    let newinput = inputdata.key * 2 + 5;
    cache.set(inputdata, newinput);
    return newinput;
}

const data1 = {key: 10};
const data2 = {key: 20};

alert(func(data1));
alert(func(data1));

alert(func(data2));
alert(func(data2));