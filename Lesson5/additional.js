// - створити функцію яка приймає три числа та виводить найменьше.
console.log(`=========min count=========`);

let minCount = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}
console.log(minCount(2, 6, 5));


// - створити функцію яка приймає три числа та виводить найбільше
console.log(`=========min count=========`);


let maxCount = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c
    }
}
console.log(maxCount(1, 44, 22));


// створити функцію яка повертає найбільше число з масиву
console.log(`=========max count of massive=========`);

let countMass = [40, 404, 1, 555];

let maxMassCount = (array) => {
    let maxiCount = countMass[0];
    for (let item of array) {
        if (item > maxiCount) {
            maxiCount = item;
        }
    }
    return maxiCount;
}

console.log(maxMassCount(countMass));


// створити функцію яка повертає найменеше число з масиву
console.log(`=========min count of massive=========`);

let minMassCount = (array) => {
    let miniCount = countMass[0];
    for (let item of array) {
        if (item < miniCount) {
            miniCount = item;
        }
    }
    return miniCount
}
console.log(minMassCount(countMass));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log(`=========sum count mass=========`);
let countMass1 = [40, 404, 1, 555];
let sumMass = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        sum += arrayElement;
    }
    return sum;
}
console.log(sumMass(countMass1));


// - Дано натуральное число n. Выведите все числа от 1 до n.
console.log(`=========1 to N=========`);

let countOfN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)

    }
}
countOfN(5);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
console.log(`=========A to B=========`);

let countOfAtoB = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
}else{
        for (let i=a; i>=b; i--){
            console.log(i)
        }
    }

}
countOfAtoB(15, 10);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

