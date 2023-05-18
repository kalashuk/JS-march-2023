// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('======LENGTH=====');

let lengthOfHello = 'hello world'
let lengthOfLorem = 'lorem ipsum'
let lengthOfJS = 'javascript is cool'

console.log(`Length of 1 string : ${lengthOfHello.length}`);
for (const item of lengthOfHello) {
    console.log(item)
}
console.log('');

console.log(`Length of 2 string : ${lengthOfLorem.length}`);
for (const item of lengthOfLorem) {
    console.log(item)
}
console.log('');

console.log(`Length of 3 string : ${lengthOfJS.length}`);
for (const item of lengthOfJS) {
    console.log(item)
}


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('======UPPER_CASE=====');

let helloToUpperCase = 'hello world'
let loremToUpperCase = 'lorem ipsum'
let jsToUpperCase = 'javascript is cool'

console.log(helloToUpperCase.toUpperCase());
console.log(loremToUpperCase.toUpperCase());
console.log(jsToUpperCase.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('======LOWER_CASE=====');

let helloToLowerCase = 'HELLO WORLD'
let loremToLowerCase = 'LOREM IPSUM IPSUM'
let jsToLowerCase = 'JAVASCRIPT IS COOL'

console.log(helloToUpperCase.toLowerCase());
console.log(loremToUpperCase.toLowerCase());
console.log(jsToUpperCase.toLowerCase());
console.log('');


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('======DIRTY_STR=====');

let str = ' dirty string   ';

console.log(str.substring('1', '13'));
console.log('');

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log('======STR_TO_ARR_#1=====');

let bookName = 'Ревуть воли як ясла повні';
let splitBookName = bookName.split(' ');

console.log(splitBookName);
console.log('');

// console.log('======STR_TO_ARR_#2=====');
// let new_array = [];
// let stringToArray = (str) => {
// str.shift();
//
// }
//
// stringToArray('Ревуть воли як ясла повні')

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('======NUMS_TO_STR=====');

let massOfNumber = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let massOfString = massOfNumber.map(String);

console.log(massOfString);
console.log('');


// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log('======SORT NUMS=====');
let nums = [11, 21, 3];

let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        nums.sort((a, b) => {
            return a - b;
        })

    }
    if (direction === 'descending') {
        nums.sort((a, b) => {
            return b - a;
        })
    }
    return nums;
}

console.log(sortNums(nums, 'descending'));
console.log('');


console.log('======SORT_OF_MonthDURATION=====');
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// -- відсортувати його за спаданням за monthDuration
console.log('======decrease=====');
let decrease = coursesAndDurationArray.sort((v1, v2) =>
    v2.monthDuration - v1.monthDuration);
console.log(decrease);
console.log('');

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('======duration=====');
// let filterOfDuration = coursesAndDurationArray.filter(function (value){
//     return value.monthDuration>5;
// });
// console.log(filterOfDuration)

let filterOfDuration = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filterOfDuration);
console.log('');


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('======mapped=====');
let mappedArray = coursesAndDurationArray.map(function (value, index) {
    let newMappedArray = {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
    return newMappedArray;
});

// let mappedArray = coursesAndDurationArray.map(function (value,index) {
//     return (...value,id:index+1);
// })

console.log(mappedArray);
console.log('');


console.log('======DESCRIPTION_OF_CARDS=====');

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];

// описати колоду карт (від 6 до туза без джокерів)
console.log('======description=====');

cards.forEach(function (value) {
    console.log(value);
})
console.log('');


console.log('======find Ace of Spade =====');
// - знайти піковий туз
let findAceOfSpades = cards.find(function (value) {
    return value.cardSuit === 'spade', value.value === 'ace';
})
console.log(findAceOfSpades);
console.log('');


console.log('======find all Six =====');
// - всі шістки
let filterOfSix = cards.filter(function (value) {
    return value.value === '6'
})
console.log(filterOfSix);
console.log('');


console.log('======find all red cards =====');
// - всі червоні карти
let filterOfRedCards = cards.filter(function (value) {
    return value.color === 'red'
})
console.log(filterOfRedCards);
console.log('');


console.log('======find all diamond=====');
// - всі буби

let filterOfAllDiamonds = cards.filter(function (value) {
    return value.cardSuit === 'diamond'
})
console.log(filterOfAllDiamonds);
console.log('');


console.log('======find all clubs of 9 to up=====');


// - всі трефи від 9 та більше

let filterClubs = cards.filter((value)=>
    ['9','10','ace','jack','queen','king'].includes(value.value)&&value.cardSuit==='clubs')
console.log(filterClubs);


