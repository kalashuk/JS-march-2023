// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

let UserArr1 = [
    new User(3, 'Anna', 'Freeman', 'anna1@gmail.com', '+380983330023'),
    new User(5, 'Anton', 'Nakonechnyi', 'anton112nak@gmail.com', '+9023472364'),
    new User(1, 'Andriy', 'Smarko', 'andriysmarko@ukr.net', '+02384891234'),
    new User(8, 'Sasha', 'Admiral', 'admiral_s@ukr.net', '+6745684568'),
    new User(16, 'Liza', 'Sonyachna', 'sonechko_l@gmail.com', '+3425234627'),
    new User(2, 'Petro', 'Shamanskyi', 'petryha_sh@ukr.net', '+74567456745'),
    new User(4, 'Volodymyr', 'Zelensky', 'volodymyr_zelen@gmail.com', '+123412341234'),
    new User(10, 'Victoria', 'ZSUshna', 'zsu_victory@gmail.com', '+65433831'),
    new User(9, 'Oleh', 'Martovsky', 'oleh_oleh777@ukr.net', '+1235132516'),
    new User(4, 'Marta', 'Andrievska', 'marta_andriy@gmail.com', '+25463457348'),
];
console.log(UserArr1);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsers = UserArr1.filter(value => value.id % 2 === 0);
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = UserArr1.sort((a, b) => a.id - b.id);
console.log(sortUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id,
            this.name = name,
            this.surname = surname,
            this.email = email,
            this.phone = phone,
            this.order = order;
    }
}

let ClientArr2 = [
    new Client(3, 'Anna', 'Freeman', 'anna1@gmail.com', '+380983330023', ['apple', 'banana', 'potato']),
    new Client(5, 'Anton', 'Nakonechnyi', 'anton112nak@gmail.com', '+9023472364', ['orange', 'juice']),
    new Client(1, 'Andriy', 'Smarko', 'andriysmarko@ukr.net', '+02384891234', ['blueberry', 'tomato', 'juice']),
    new Client(8, 'Sasha', 'Admiral', 'admiral_s@ukr.net', '+6745684568', ['apple', 'orange', 'cucumber']),
    new Client(16, 'Liza', 'Sonyachna', 'sonechko_l@gmail.com', '+3425234627', ['apple']),
    new Client(2, 'Petro', 'Shamanskyi', 'petryha_sh@ukr.net', '+74567456745', ['orange', 'potato']),
    new Client(4, 'Volodymyr', 'Zelensky', 'volodymyr_zelen@gmail.com', '+123412341234', ['apple']),
    new Client(10, 'Victoria', 'ZSUshna', 'zsu_victory@gmail.com', '+65433831', ['cucumber', 'milk', 'potato']),
    new Client(9, 'Oleh', 'Martovsky', 'oleh_oleh777@ukr.net', '+1235132516', ['apple', 'orange']),
    new Client(4, 'Marta', 'Andrievska', 'marta_andriy@gmail.com', '+25463457348', ['milk', 'cheese', 'bread']),
];
console.log(ClientArr2);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let ClientSort = ClientArr2.sort((a, b) => a.order.length - b.order.length);
console.log(ClientSort);

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, capacity) {
    this.model = model,
        this.manufacturer = manufacturer,
        this.year = year,
        this.maxSpeed = maxSpeed,
        this.capacity = capacity
}

Car.prototype.drive = function () {
    return `Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`
}
Car.prototype.info = function () {
    return `Модель авто: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${this.year}, макс.швидкість: ${this.maxSpeed}, об'єм двигуна: ${this.capacity}`
}
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    return `Модель авто: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${this.year}, макс.швидкість: ${newSpeed}, об'єм двигуна: ${this.capacity}`
}
Car.prototype.changeYear = function (newValue,newSpeed) {
    return `Модель авто: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${newValue}, макс.швидкість: ${newSpeed}, об'єм двигуна: ${this.capacity}`
}
Car.prototype.addDriver = function () {
    return `Модель авто: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${newValue}, макс.швидкість: ${newSpeed}, об'єм двигуна: ${this.capacity}`
}


let car = new Car('Skoda Fabia', 'VAG', 2023, 240, 2.2);
console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(320));
console.log(car.changeYear(2020, 200));

// (Те саме, тільки через клас)
class Car2{
    constructor(model, manufacturer, year, maxSpeed, capacity) {
        this.model = model,
            this.manufacturer = manufacturer,
            this.year = year,
            this.maxSpeed = maxSpeed,
            this.capacity = capacity
    }
}

Car2.prototype.drive = function () {
    return `Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`
}
Car2.prototype.info = function () {
    return `Модель авто: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${this.year}, макс.швидкість: ${this.maxSpeed}, об'єм двигуна: ${this.capacity}`
}
Car2.prototype.increaseMaxSpeed = function (newSpeed) {
    return `Модель авто: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${this.year}, макс.швидкість: ${newSpeed}, об'єм двигуна: ${this.capacity}`
}
Car2.prototype.changeYear = function (newValue,newSpeed) {
    return `Модель авто: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${newValue}, макс.швидкість: ${newSpeed}, об'єм двигуна: ${this.capacity}`
}
Car2.prototype.addDriver = function () {
    return `Модель авто: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${newValue}, макс.швидкість: ${newSpeed}, об'єм двигуна: ${this.capacity}`
}


let car2 = new Car('Skoda SuperB', 'VAG', 2021, 210, 1.6);
console.log(car2.drive());
console.log(car2.info());
console.log(car2.increaseMaxSpeed(250));
console.log(car2.changeYear(2023, 250));