// -створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


let num = [1,2,3,4,5]
let string = ['one','two','three','four','five']
let diff = [10,20,30,'ukraine','lviv','okten',true,false]

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

console.log('*************');

for (let i = 0; i < string.length; i++) {
    console.log(string[i])
}

console.log('*************');

for (let i = 0; i < diff.length; i++) {
    console.log(diff[i])
}

//==============================================================================//

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
console.log('*************');
let x = [];
x[0] = 0;
x[2] = 2;
x[5] = 5;

for (let i = 0; i < x.length; i++) {
    console.log(x[i])
}

//==============================================================================//

// - є масив [2,17,13,6,22,31,45,66,100,-18] :


let t3 = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
console.log('******1*******');

let g = 0;
while (g<t3.length){
    console.log(t3[g])
    g++
}

//     2. перебрати його циклом for
console.log('*******2******');
for (let j = 0; j < t3.length; j++) {
    console.log(t3[j])
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('******3*******');

let q = 0;
while(q<t3.length){
    if(q%2!==0){
        console.log(t3[q])
    }
    q++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

console.log('******4*******');

for (let i = 0; i < t3.length; i++) {
    if(i%2!==0){
        console.log(t3[i])
    }
}


// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('******5*******');

let y = 0;
while(y<t3.length){
    if(y%2===0){
        console.log(t3[y])
    }
    y++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('******6*******');

for (let i = 0; i < t3.length; i++) {
    if (i%2===0){
        console.log(t3[i])
    }
}


// 7. замінити кожне число кратне 3 на слово "okten"
console.log('******7*******');

for (let i = 0; i < t3.length; i++) {
    if (t3[i]%3===0){
        t3[i] = 'okten';
    }
}
console.log(t3)

// 8. вивести масив в зворотньому порядку.
console.log('******8*******');

for (let i = t3.length-1; i >= 0; i--) {
    console.log(t3[i])
}


//==============================================================================//


// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('**************');

let k = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < k.length; i++) {
    console.log(k[i])

}


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log('**************');

let k1 = ['one','two','three','four','five','six','seven','eight','nine','ten'];
let s = 0;

while(s<k1.length){
    console.log(k1[s])
    s++;
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('**************');

let mass = [1,2,3,4,'five','six','seven','eight',true,false];
for (let i = 0; i < mass.length; i++) {
    console.log(mass[i])

}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log('**************');

let mas10 = [1,2,3,4,'five','six','seven','eight',true,false];

for (let i = 0; i < mas10.length; i++) {
    if (typeof mas10[i] === 'boolean') {
        console.log(mas10[i])
    }

}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log('**************');

let mas11 = [1,2,3,4,'five','six','seven','eight',true,false];

for (let i = 0; i < mas11.length; i++) {
    if (typeof mas11[i] === 'number') {
        console.log(mas11[i])
    }

}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log('**************');

let mas12 = [1,2,3,4,'five','six','seven','eight',true,false];

for (let i = 0; i < mas12.length; i++) {
    if (typeof mas12[i] === 'string') {
        console.log(mas12[i])
    }

}


//==============================================================================//


// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log('**************');

let ks = []
ks[0] = 0;
ks[1] = 1;
ks[2] = 'two';
ks[3] = 'three';
ks[4] = 'four';
ks[5] = true;
ks[6] = false;
ks[7] = 7;
ks[8] = 'eight';
ks[9] = 9

for (let i = 0; i < ks.length; i++) {
    console.log(ks[i])

}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('**************');

for (let i = 1; i <=10; i++) {
    console.log(i)
    document.write(`${i}<br>`)

}
document.write(`<hr>`)


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('**************');

for (let i = 1; i <=100; i++) {
    console.log(i)
    document.write(`${i}<br>`)
}
document.write(`<hr>`)


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log('**************');

for (let i = 1; i <=100; i+=2) {
    console.log(i)
    document.write(`${i}<br>`)
}
document.write(`<hr>`)


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('**************');

for (let n = 0; n <=100 ; n++) {
    if (n%2===0){
        console.log(n)
        document.write(`${n}<br>`)
    }

}
document.write(`<hr>`)


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('**************');

for (let n = 0; n <=100 ; n++) {
    if (n%2!==0){
        console.log(n)
        document.write(`${n}<br>`)
    }

}
document.write(`<hr>`)


//==============================================================================//



// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
console.log('**************');

let books = [
    {name: ['1984'], page: 328, author: ['George Orwell"'], genre: ['Dystopian']},
    {name: ['To Kill a Mockingbird'], page: 281, author: ['Harper Lee'], genre: ['Bildungsroman', 'Southern Gothic']},
    {name: ['The Great Gatsby'], page: 180, author: ['F. Scott Fitzgerald'], genre: ['Tragedy']},

]

// -знайти наібльшу книжку.
let largebook = books[0];

for (let i = 0; i < books.length; i++) {
    if(books[i].page>largebook.page){
        largebook = books[i]
    }
}
console.log(largebook)

// - знайти книжку/ки з найбільшою кількістю жанрів
let largegenre = books[0]

for (let i = 0; i < books.length; i++) {
    if(books[0].genre>largegenre.genre){
     largegenre=books[i]
    }

}
console.log(largegenre)
