// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('=============rectangle===========')

function squareToRectangle(a, b) {
    let s = a * b;
    return s;
}

console.log(squareToRectangle(20, 40));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('===========circle=============')

function squareToCircle(r) {
    const PI = 3.14;
    let sr = PI * Math.pow(r, 2)
    return sr;
}

console.log(squareToCircle(6));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
console.log('=============cylinder===========')

function squareToCylinder(r, h) {
    const PI = 3.14;
    let sc = 2 * PI * r * h;
    return sc;
}

console.log(squareToCylinder(10, 40));


// - створити функцію яка приймає масив та виводить кожен його елемент

function mass(...args) {
    console.log(args);
}

mass(1, 2, 'a', 'b', true, false);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function par(text) {
    document.write(`<p>${text}</p>`)
}

par('okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulli(text) {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)

}

ulli('alo');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liul(text, count) {
    document.write(`<ul>`)
    for (let i = 1; i <= count; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}

liul('abracadabra', 5);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function mass1(...args) {
    for (let i = 0; i < args.length; i++) {
        document.write(`<li>${args[i]}</li>`)

    }
}

mass1(1, 2, 'a', 'b', true, false);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let mass2 = [
    {
        id: 0,
        name: 'Anton',
        age: 23
    },
    {
        id: 1,
        name: 'Olena',
        age: 18
    }
]

function inst(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>
        ID: ${array[i].id}
        NAME: ${array[i].name}
        AGE: ${array[i].age}
        </div>`)
    }
}

inst(mass2);


// - створити функцію яка повертає найменьше число з масиву

let x = [26, 5, -5, 9, 123, 5, 555, 6];

function smallCount(array) {
    let min = x[0];
    for (let i = 1; i <= array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    document.write(`Minimal count: ${min}`)
}

smallCount(x);

// let x = [5,3,6,-2]
//
// function smallCount(array) {
//     let min = x[0];
//     for (let i = 0; i < array.length; i++) {
//         if(x[i]<min){
//             min=x[i];
//         }
//
//     }
//             document.write(`<div>Minimal count: ${min}</div>`)
// }
// smallCount(x);
//
//
// let x = [6,123,7,9];
// function maxCount(array) {
//     let max = x[0];
//     for (let i = 1; i <= array.length; i++) {
//         if (array[i]>max){
//             max=array[i];
//         }
//     }
//     document.write(`Max count: ${max}`)
// maxCount(x);
// }


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let y = [2, 6, 7]

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    document.write(`<div>${sum}</div>`)
}

sum(y);

// let y = [5,7,9];
//
// function sum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         sum+=arrayElement;
//     }
//     document.write(`<div>${sum}</div>`);
// }
// sum(y);



// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    document.write(`<div>${arr}</div>`)

}

swap([6, 2, 7,8,5,11], 1, 0);



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let bank = [
    {
        currency: 'USD',
        value: 40
    },

    {
        currency: 'EUR',
        value: 42
    }
]
function exchange(sumUAH,array,exchangeCurrency) {
    for (let i = 0; i < array.length; i++) {
        if(exchangeCurrency===array[i].currency) {
         let result = sumUAH / array[i].value;
         return document.write(`${sumUAH} гривень = ${result} ${exchangeCurrency}`)
        }
    }
}
exchange(10000,bank,'USD');

