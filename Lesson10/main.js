// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let f1 = document.forms.f1;
f1.onsubmit=function (e) {
    e.preventDefault();
    let userName = {name: this.userName.value};
    let userSurname = {name: this.userSurname.value};
    let userAge = {name: this.userAge.value};
    let mainCont = document.createElement('div');
    document.body.appendChild(mainCont)
    ;
    let p = document.createElement('p');
    p.innerHTML=`NAME: ${userName} || SURNAME: ${userSurname} || AGE: ${userAge}`

    mainCont.appendChild(p)
}