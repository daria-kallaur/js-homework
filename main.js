
// hw 1

var variable;
console.log('Привет из внешнего скрипта!')

const name = 'Daria';

let userName = name == 'Daria' ? "Привет Дарья!" : "Ошибка, не тот тип данных!!!";
console.log(userName);

const yourName = "123";

if (yourName == "Bogdan") {
    console.log("Привет,Богдан!");
} else {
    console.log("Ошибка, не тот тип данных!!!");
}


console.log("=========================");

console.log(typeof undefined);


console.log(typeof 0);


console.log(typeof 1n);

console.log(typeof true);


console.log(typeof "string");


console.log(typeof Symbol());


console.log(typeof {});


console.log(typeof null);


console.log(typeof alert);


// // hw 2

console.log("=2.1=")

const newArr = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

console.log(newArr.join('| '));



console.log("=2.2=")

let names = 'Вася; Петя; Вова; Олег';
let arr = names.split('; ');
console.log(arr);



console.log("=2.3=")
function hello2(name){

if (name === undefined) {
    name = 'гость';
}
    console.log('Привет, ' + name); 
}

hello2('Василий');
hello2();

console.log("=2.4=")


const fruits = ['яблоко', 'ананас', 'груша'];
Array.prototype.fruitsInUpperCase = function () {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
}

fruits.fruitsInUpperCase();
console.log(fruits)

console.log("=2.5=")

let addOneForAll = (...elements) => {
    return elements.map(elements => elements + 1);
}
console.log(addOneForAll(1, 2, 3, 4));

console.log("=2.6=")

const getSum = function (...args) {
    return args.reduce((val, sum) => val + sum, 0);
};

console.log(getSum(1, 2, 3, 4, 5));

console.log("=2.7=")

const numberArray = [];
const arr1 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

for (const item of arr1) {
    if (typeof item === 'number') numberArray[numberArray.length] = item;
}

console.log(numberArray);


console.log("=2.8=")

const haveTrueValue = arrayTesting([0, false, null, 1]);
const dontHaveTrueValue = arrayTesting([0, false, null, 0]); 

function  arrayTesting(arr){
    resul = arr.some(el => el == true);
    if (resul === true) {
        return  'Нашли true значение';
        } 
        else {
            return  'Ничего нет';  
        }
}
console.log(haveTrueValue);
console.log(dontHaveTrueValue);