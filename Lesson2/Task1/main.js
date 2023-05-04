// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let mas1 = [123,124,'oleh',true,'asdhnashjd',3222,1500,100500,false,'name']
console.log(mas1[0]);
console.log(mas1[1]);
console.log(mas1[2]);
console.log(mas1[3]);
console.log(mas1[4]);
console.log(mas1[5]);
console.log(mas1[6]);
console.log(mas1[7]);
console.log(mas1[8]);
console.log(mas1[9]);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Кобзар',
    pageCount: 115,
    genre: 'Поезія'
}
console.log(book1);

let book2 = {
    title: 'Contra spem spero!',
    pageCount: 124,
    genre: 'Медитативна лірика'
}
console.log(book2);

let book3 = {
    title: 'Герой поневолі',
    pageCount: 77,
    genre: 'Роман'
}
console.log(book3);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1full = {
    title: 'Кобзар',
    pageCount: 115,
    genre: 'Поезія',
    authors: [{
        name: 'Тарас Шевченко',
        age: 47
    }
    ]
}
console.log(book1full);

let book2full = {
    title: 'Contra spem spero!',
    pageCount: 124,
    genre: 'Медитативна лірика',
    authors: [{
        name: 'Леся Українка',
        age: 42
    }
    ]
}
console.log(book2full);

let book3full = {
    title: 'Герой поневолі',
    pageCount: 77,
    genre: 'Роман',
    authors: [{
        name: 'Іван Франко',
        age: 59
    }
    ]
}
console.log(book3full);



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name:'Vasya', username:'vasya_2004', password:2863938},
    {name:'Petya', username:'petro_boss', password:123312},
    {name:'Anna', username:'annaCool', password:'qwerty123'},
    {name:'Victor', username:'victory', password:'vsebydeukraine'},
    {name:'Andriy', username:'andREW', password:79625},
    {name:'Stepan', username:'stepko', password:3218222},
    {name:'Sergii', username:'serj', password:380986336223},
    {name:'Veronika', username:'vero_nika', password:'pizza1love'},
    {name:'Liza', username:'lizka123', password:19072003},
    {name:'Marta', username:'martasiya_17', password:'martalviv17'},
]
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);