class Sudoku{
    constructor(){
        this.field = []; 
        this.answerField = [];
        this.createField();
        this.showField();
    }

    createField(){
        this.initialization();
        this.peretasovka();
        this.removeEl();
    }

    initialization(){
        this.field = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [7, 8, 9, 1, 2, 3, 4, 5, 6],
            [2, 3, 4, 5, 6, 7, 8, 9, 1],
            [5, 6, 7, 8, 9, 1, 2, 3, 4],
            [8, 9, 1, 2, 3, 4, 5, 6, 7],
            [3, 4, 5, 6, 7, 8, 9, 1, 2],
            [6, 7, 8, 9, 1, 2, 3, 4, 5],
            [9, 1, 2, 3, 4, 5, 6, 7, 8]
        ]
    }

    peretasovka(){
        let n = Math.floor(Math.random() * 100);
        for(let i = 0; i < n; i++){
            this.tasRow();
            this.tasCol();
        }
    }

    tasRow(){
        let ar = Math.floor(Math.random() * 3);
        let first = ar * 3 + Math.floor(Math.random() * 3);
        let second = ar * 3 + Math.floor(Math.random() * 3);
        while(first == second){
            second = ar * 3 + Math.floor(Math.random() * 3);
        }
        let buf = this.field[first];
        this.field[first] = this.field[second];
        this.field[second] = buf;
    }

    tasCol(){
        let ar = Math.floor(Math.random() * 3);
        let first = ar * 3 + Math.floor(Math.random() * 3);
        let second = ar * 3 + Math.floor(Math.random() * 3);
        while(first == second){
            second = ar * 3 + Math.floor(Math.random() * 3);
        }
        for(let i = 0; i < 9; i++){
            [this.field[i][first], this.field[i][second]] = [this.field[i][second], this.field[i][first]];
        }
    }

    removeEl(){
        this.answerField = this.field.map(n => [...n]);
        let check = Array.from({length: 9 * 9}, () => Array(9 * 9).fill(0));
        let it = 45;
        while(it != 0){
            let i = Math.floor(Math.random() * 9);
            let j = Math.floor(Math.random() * 9);
            if(check[i][j] == 0){
                check[i][j] = 1;
                it--;
                this.field[i][j] = 0;
            }
        }
    }

    showField(){
        const inps = document.querySelectorAll('input[type="text"]');
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                inps[i * 9 + j].value = this.field[i][j] !== 0 ? this.field[i][j]: '';
                inps[i * 9 + j].disabled = this.field[i][j] !== 0 ? true: false;
            }
        }
    }

    showAnswer(){
        const inps = document.querySelectorAll('input[type="text"]');
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                inps[i * 9 + j].value = this.answerField[i][j];
            }
        }
    }

    check(){
        const inps = document.querySelectorAll('input[type="text"]');
        let y = this.checkRow(inps);
        if(!y){
            return;
        }
        y = this.checkCol(inps);
        if(!y){
            return;
        }
        this.checkSqr(inps);
    }

    checkRow(inps) {
        let t = true;
        let all = 81;
        let buf = new Set();
        let buf2 = new Set();
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const index = i * 9 + j; 
                if (inps[index].value === '') {
                    const par = inps[index].parentElement;
                    par.style.backgroundColor = 'white';
                    continue;
                } else if (inps[index].value != this.answerField[i][j]) {
                    t = false;
                    console.log(`Ошибка в строке ${i + 1}, столбце ${j + 1}, квадрате ${Math.floor(i / 3) * 3 + Math.floor(j / 3) + 1}`);
                    const par = inps[index].parentElement;
                    par.style.backgroundColor = 'red';
                    buf.add(i);
                    buf2.add(j);
                } else if (inps[index].value == this.answerField[i][j]) {
                    const par = inps[index].parentElement;
                    par.style.backgroundColor = 'white';
                    all--;
                }
            }
        }
        for(let i of buf){
            for(let j = 0; j < 9; j++){
                const par = inps[i * 9 + j].parentElement;
                par.style.backgroundColor = 'red';
            }
        }
        for(let i of buf2){
            for(let j = 0; j < 9; j++){
                const par = inps[j * 9 + i].parentElement;
                par.style.backgroundColor = 'red';
            }
        }
        if(all == 0){
            for(let i = 0; i < inps.length; i++){
                const par = inps[i].parentElement;
                par.style.backgroundColor = 'yellow';
            }
            return;
        }
        return t;
    }
    checkCol(inps) {
        let t = true;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const index = j * 9 + i; 
                if (inps[index].value === '') {
                    const par = inps[index].parentElement;
                    par.style.backgroundColor = 'white'; 
                    continue;
                } else if (inps[index].value != this.answerField[j][i]) {
                    t = false;
                    console.log(`Ошибка в строке ${j + 1}, столбце ${i + 1}, квадрате ${Math.floor(j / 3) * 3 + Math.floor(i / 3) + 1}`);
                    const par = inps[index].parentElement;
                    par.style.backgroundColor = 'red';
                } else if (inps[index].value == this.answerField[j][i]) {
                    const par = inps[index].parentElement;
                    par.style.backgroundColor = 'white'; 
                }
            }
        }
        return t;
    }
    checkSqr(inps) {
        let t = true;
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                const numbers = new Set();
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const index = (boxRow * 3 + i) * 9 + (boxCol * 3 + j);
                        if (inps[index].value === '') {
                            const par = inps[index].parentElement;
                            par.style.backgroundColor = 'white';
                            continue;
                        }

                        const value = inps[index].value;
                        if (numbers.has(value)) {
                            t = false;
                            console.log(`Ошибка в квадрате ${boxRow * 3 + boxCol + 1}`);
                            const par = inps[index].parentElement;
                            par.style.backgroundColor = 'red';
                        } else {
                            numbers.add(value);
                        }
                    }
                }
            }
        }
        return t;
    }

}
let curSudoku;
window.onload = function() {
    curSudoku = new Sudoku(); 
};

document.getElementById('restart').addEventListener('click', function() {
    curSudoku.showField(); 
    curSudoku.check();
});

document.getElementById('generate').addEventListener('click', function() {
    curSudoku.showAnswer(); 
});

document.getElementById('check').addEventListener('click', function() {
    curSudoku.check(); 
});

document.getElementById('newField').addEventListener('click', function() {
    curSudoku = new Sudoku(); 
});

