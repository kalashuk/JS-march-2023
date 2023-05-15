// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('=============rectangle===========')

let squareToRectangle = (a, b) => a * b;
console.log(squareToRectangle(10, 20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('===========circle=============')

let squareToCircle = (r) => {
    const PI = 3.14;
    return PI * Math.pow(r, 2)
}
console.log(squareToCircle(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
console.log('=============cylinder===========')

let squareToCylinder = (r, h) => 2 * Math.PI * r * h;
console.log(squareToCylinder(3, 40));




// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('========================');

let mass = [1,2,3,true,false,'asd'];

let getMass = (arr) =>{
    for (let i of arr) {
        console.log(i);
    }
}
getMass(mass);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
console.log('========================');

let par = (text) =>{
    document.write(`<p>${text}</p>`)
}
par('okten');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ulli(text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
//
// }
//
// ulli('alo');


let ulLi = (text) => {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}

ulLi('alo');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let liUl = (text, count) =>{
    document.write(`<ul>`)
        for (let i = 1; i <= count; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write(`</ul>`)
    }

liUl('hello',5);



//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let mass1 = (...args) =>{
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        document.write(`<li>${arg}</li>`)

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

let inst  = (array) =>{
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];

        document.write(`<div>
        ID: ${arrayElement.id}
        NAME: ${arrayElement.name}
        AGE: ${arrayElement.age}
        </div>`)
    }
}
inst(mass2);


// - створити функцію яка повертає найменьше число з масиву

let x = [26, 5, -5, 9, 123, 5, 555, 6];

let smallCount = (array) => {
    let min = x[0];

    for (let i = 1; i <= array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    document.write(`Minimal count: ${min}`)
}
smallCount(x);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let y = [2, 6, 7]

let sum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    document.write(`<div>${sum}</div>`)
}

sum(y);


// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let  swap = (arr, index1, index2) => {
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
let exchange = (sumUAH,array,exchangeCurrency) => {
    for (let i = 0; i < array.length; i++) {
        if(exchangeCurrency===array[i].currency) {
            let result = sumUAH / array[i].value;
            return document.write(`${sumUAH} гривень = ${result} ${exchangeCurrency}`)
        }
    }
}
exchange(10000,bank,'USD');

