document.getElementById('formsub').addEventListener('submit', function(event) {
    document.getElementById('surnameerror').textContent = '';
    document.getElementById('nameerror').textContent = '';
    document.getElementById('emailerror').textContent = '';
    document.getElementById('telerror').textContent = '';
    document.getElementById('abouterror').textContent = '';

    const sur = document.getElementById('surname').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const about = document.getElementById('about').value.trim();
    const course = document.querySelector('input[name="r"]:checked');
    const BSTU = document.getElementById('BSTU').checked;
    const city = document.getElementById('cities').value;

    if(!(course.value==='3' && BSTU && city==='Минск')){
        const ans = confirm("Вы уверены в заполненных данных?");
        if(!ans){
            event.preventDefault();
            return;
        }
    }

    let isNorm = true;

    const nameReg = /[A-Za-zА-Яа-я]{1,20}/;

    if (sur === '') {
        document.getElementById('surnameerror').textContent = 'Поле не должно быть пустым';
        isNorm = false;
    } 
    if (sur.length > 20) {
        document.getElementById('surnameerror').textContent = 'Количество символов в поле не должно превышать 20';
        isNorm = false;
    }
    if (!nameReg.test(sur)) {
        document.getElementById('surnameerror').textContent = 'Некорректная фамилия';
        isNorm = false;
    }

    if (name === '') {
        document.getElementById('nameerror').textContent = 'Поле не должно быть пустым';
        isNorm = false;
    } 
    if (name.length > 20) {
        document.getElementById('nameerror').textContent = 'Количество символов в поле не должно превышать 20';
        isNorm = false;
    }
    if (!nameReg.test(name)) {
        document.getElementById('nameerror').textContent = 'Некорректное имя';
        isNorm = false;
    }

    if (email === '') {
        document.getElementById('emailerror').textContent = 'Поле не должно быть пустым';
        isNorm = false;
    } 
    const emailRegex = /^[^\s@]+@[^\s@]{2,5}\.[^\s@]{2,3}$/; 
    if (!emailRegex.test(email)) {
        document.getElementById('emailerror').textContent = 'Некорректный адрес электронной почты';
        isValid = false;
    }

    if (tel === '') {
        document.getElementById('telerror').textContent = 'Поле не должно быть пустым';
        isNorm = false;
    } 
    const telRegex = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/; 
    if (!telRegex.test(tel)) {
        document.getElementById('telerror').textContent = 'Некорректный формат';
        isValid = false;
    }

    if (about === '') {
        document.getElementById('abouterror').textContent = 'Поле не должно быть пустым';
        isValid = false;
    }
    if(about.length > 250){
        document.getElementById('abouterror').textContent = 'Длина не должна превышать 250 символов';
        isValid = false;
    }

    
    if (!isValid) {
        event.preventDefault(); 
    }
});