let person = {
    name:"Вася",
    age: 18
}

person.greet = function(){
    alert("Привет, " + this.name);
}

person.ageAfterYears = function (years){
    return this.age + years;
}

person.greet();

alert(person.ageAfterYears(20));

/////////////////////////////////////////////////////////////////////////////

let car = {
    model: "Opel",
    year: 2019,
    getInfo(){
        alert(`Модель машины - ${this.model}, год выпуска - ${this.year}`);
    }
}

car.getInfo();

/////////////////////////////////////////////////////////////////////////////

function Book(){
    this.title = "Book";
    this.author = "author";
    this.getTitle = function(){
        return this.title;
    }
    this.getAuthor = function(){
        return this.author;
    }
}

let book = new Book();
alert(book.getTitle());
alert(book.getAuthor());

////////////////////////////////////////////////////////////////////////////

let team = {
    playears: [
        {name: "Вася", surname: "Сидоров", age: 18, pos: "вратарь"},
        {name: "Петя", surname: "Петров", age: 20, pos: "защитник"},
        {name: "Коля", surname: "Иванов", age: 19, pos: "нападающий"},
    ],
    getInformationAboutPlayear(){
        this.playears.forEach(function(playear){
            alert(`Имя: ${playear.name}, фамилия: ${playear.surname}, возраст: ${playear.age}, позиция: ${playear.pos}`)
        })
    }
}

team.getInformationAboutPlayear();

//////////////////////////////////////////////////////////////////////////////////

const counter = (function() {
    let count = 0;
    return{
        increment: function(){
            return ++count;
        },
        decrement: function(){
            return --count;
        },
        getCount:function(){
            return count;
        }
    }
        
    })();
    
alert(counter.increment()); // 1
alert(counter.increment()); // 2
alert(counter.decrement()); // 1
alert(counter.getCount());

////////////////////////////////////////////////////////////////////////////////////

let item = {
    price: 1000
}

Object.defineProperties(item, {
    price:{writable: true, configurable: true}
})

alert(item.price);
item.price = 2000;
alert(item.price);

Object.defineProperties(item, {
    price:{writable: false, configurable: true}
})

item.price = 3000;
alert(item.price);

//////////////////////////////////////////////////////////////////////////////////////

let circle = {
    _radius: 10,
    get sqr(){
        return Math.PI * this._radius * this._radius;
    },
    set radius(rad){
        this._radius = rad;
    },
    get radius(){
        return this._radius;
    }
};

alert(circle.radius);
circle.radius = 20;
alert(circle.radius);
alert(circle.sqr);

///////////////////////////////////////////////////////////////////////////////////////

let car2 = {
    model: "OPEL",
    year: 2019,
    make: true
}

Object.defineProperties(car2, {
    model:{writable: true, configurable: true},
    year:{writable: true, configurable: true},
    make:{writable: true, configurable: true},
})

alert(car2.model);
car2.model = "BMW";
alert(car2.model);

alert(car2.year);
car2.year = 2020;
alert(car2.year);

alert(car2.make);
car2.make = false;
alert(car2.make);

Object.defineProperties(car2, {
    model:{writable: false, configurable: false},
    year:{writable: false, configurable:false},
    make:{writable: false, configurable:false},
})

alert(car2.model);
car2.model = "OPEL";
alert(car2.model);

alert(car2.year);
car2.year = 2019;
alert(car2.year);

alert(car2.make);
car2.make = true;
alert(car2.make);

///////////////////////////////////////////////////////////////////////////////////

let mas = [1, 2, 3];

Object.defineProperty(mas, 'sum', {
    get: function() {
        return this.reduce((accumulator, cur) => accumulator + cur, 0);
    },
    enumerable: false, 
    configurable: false 
});

alert(mas.sum); 

/////////////////////////////////////////////////////////////////////////////////////

let rectangle = {
    _width: 10, 
    _height: 20,
    get width(){
        return this._width;
    },
    get height(){
        return this._height;
    },
    set width(w){
        this._width = w;
    },
    set height(h){
        this._height = h;
    },

    get sqr(){
        return this._height * this._width;
    }
}

alert(rectangle.height);
alert(rectangle.width);
alert(rectangle.sqr);

////////////////////////////////////////////////////////////////////////////////////////

let user2 = {
    _firstname: "Kolya",
    _lastname: "Sidorov",
    get fullname(){
        return (`${this._firstname} ${this._lastname}`);
    },
    set fullname(fl){
        [this._firstname, this._lastname] = fl.split(' ');
    }
}
alert(user2.fullname);
user2.fullname = "Masha Ivanova";
alert(user2.fullname);
