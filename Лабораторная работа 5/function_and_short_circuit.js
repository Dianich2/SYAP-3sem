function makeCounter(){
    let currentCount = 1;

    return function(){
        return currentCount++;
    }
}

let counter = makeCounter();

alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3

let counter2 = makeCounter();
alert(counter2()); //1


/////////////////////////////////////////

let currentCount2 = 1;
function makeCounter2(){
    return function(){
        return currentCount2++;
    }
}

let counter3 = makeCounter2();
let counter4 = makeCounter2();

alert(counter3()); // 1
alert(counter3()); // 2

alert(counter4()); // 3
alert(counter4()); // 4

//////////////////////////////////////////////


function V(a){
    return function(b){
        return function(c){
            return a * b * c;
        }
    }
}

alert(V(2)(3)(4));

let t = V(10);
alert(t(20)(30));
alert(t(40)(10));

////////////////////////////////////////////
function* moveObj() {
    let x = 0;
    let y = 0;

    while (true) {
        const direction = yield {x, y};
        switch (direction) {
            case "left" :
                x-=10;
                break;
            case "right" :
                x+=10;
                break;
            case "up" :
                y+=10;
                break;
            case "down" :
                y-=10;
                break;
            default :
                break;
        }
        alert(`x:${x}, y:${y}`);
    }
}

let mover = moveObj();
mover.next();

for (let i = 0; i < 10; i++) {
    const direction = prompt("left/right/up/down: ");
    mover.next(direction);
}  

///////////////////////////////////////////////////////////

alert(window.makeCounter());
alert(window.makeCounter2());
alert(window.moveObj());
alert(window.V(10)(25)(100));

