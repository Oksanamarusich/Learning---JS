//Дано число. Перевір чи є число від'ємним чи ні

// let number = 10;
// if (number < 0) {
//     console.log("Число від'ємне")
// } else if (number > 0) {
//     console.log("Число додатне")
// } else {
//     console.log("Число дорівнює нулю")
// }

// ============================================================================

// Дана строка. Выведите в консоль длину этой строки.

// let string = 'string';

// console.log(string.length);

//===========================================================

//Дана строка. Выведите в консоль последний символ строки

// let string = 'string';
// console.log(string[string.length - 1]);

//========================================================================

//Дано число. Проверьте, четное оно или нет.

// let number = 5;

// if (number % 2 === 0) {
//     console.log('число парне')
// } else {
//     console.log('число непарне')
// }

//===========================================================

//Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const word1 = 'string';
// const word2 = 'number';
// if (word1[0].toLowerCase() === word2[0].toLowerCase()) {
//     console.log('yes!')
// } else {
//     console.log('no!')
// }

//=======================================================================

//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const word = 'hello';
// let str = word.charAt(word.length - 1);
// console.log(str)
 //if()

 //===============================================================

//Дано число. Выведите в консоль первую цифру этого числа.
// const number = 23456;
// const firstNumber = String(number);
// console.log(firstNumber[0]);

//===========================================================
//Дано число 12345. Переставьте цифры этого числа в обратном порядке.

// const number = 12345;
// let numberString = String(number);// number.toString()
// console.log(numberString)
// let ghjk = numberString.split('')
// console.log(ghjk)
// let qwe = ghjk.reverse()
// console.log(qwe)
// const qweqwe = qwe.join('')
// console.log(qweqwe)
// let numberRevers = numberString.split('').reverse().join('');
// console.log(numberRevers);

//=============================================================

//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// const number = 123458;
// const str = number.toString();
// const first = str[0]
// console.log(first)
// const last = str.slice(-1)
// console.log(last)
// const sum = Number(first) + Number(last);
// console.log(sum)

//========================================================
//Дано число. Выведите количество цифр в этом числе.

// const number = 123345678798;
// const str = number.toString().length;
// console.log(str)

//======================================================

//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// const str = 'hello';
// if (str.length > 1) {
//      console.log(str.charAt(str.length-2))    //або str[str.length-2]
//  }

//===============================================
//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// const num1 = 20;
// const num2 = 5;

// if (num1 % num2 === 0) {
//     console.log('yes')
// } else {
//     console.log('no')
// }

//==============================================================

//Выведите в консоль все целые числа от 1 до 100.


//========================================================
//Спросите возраст пользователя с помощью функции prompt. Выведите с помощью alert введенный пользователем возраст.

// let age = prompt('How old are you?')
// alert(age)

//ocument.write(123)

//=============================================================

// Напишіть код, який запитує логін за допомогою prompt.

// Якщо відвідувач вводить "Admin", тоді запропонуйте за допомогою prompt ввести пароль. Якщо введено порожній рядок або натиснуто Esc – показати “Скасовано”. Якщо введено інший рядок – тоді покажіть “Я вас не знаю”.

// Пароль перевіряється наступним чином:

// Якщо він дорівнює “Господар”, тоді покажіть “Ласкаво просимо!”,
// Інший рядок – покажіть “Неправильний пароль”,
// Для порожнього рядка, або якщо введення було скасовано, покажіть “Скасовано”.

// let userName = prompt('Хто там?', '');

// if (userName === 'Admin') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Господар') {
//     alert( 'Ласкаво просимо!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Скасовано' );
//   } else {
//     alert( 'Неправильний пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Скасовано' );
// } else {
//   alert( 'Я вас не знаю' );
// }

//================================================

//// Напишіть код, який перевіряє, чи користувач має право на знижку
// на товар.Користувач має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).

// const pens = true;
// const student = true;
// const age = 55;
// let discount = false;

// if (pens || student || (age > 12 && age <= 18)) {
//     discount = true;
// }
// console.log(discount)


//=================================================

// Напишіть код, який перевіряє, чи можна отримати водійські права.
// Користувач може отримати водійські права, якщо йому виповнилося
// 18 років і він має право на працевлаштування.

// const age = 16;
// const right = false;
// let isRight = false;

// if (age >= 18 && right === true) {
//     isRight = true;
// }

// console.log(isRight)

//========================================

// Напишіть код, який перевіряє, чи можна відкрити двері.
// Двері можна відкрити, якщо ключ у власника або у його
// друга, або двері не закриті на замок.

// let hasKey = false;
// let isFriend = false;
// let isDoorLooked = false;
// let canOpenDoor = false;

// if (hasKey || isFriend || !isDoorLooked) {
//  canOpenDoor = true;
// }
// console.log(canOpenDoor);

//=============================================================

// Напишіть код, який перевіряє, чи є введене користувачем значення
// числом, і виводить його квадрат, якщо це число.Якщо значення
// не є числом, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt('Enter number');
// const value = Number(answer);
// console.log(value)

// if (isNaN(value)) {
//     alert('Error')
// } else {
//     const sqNumb = Math.pow(value, 2)
//     alert(`${sqNumb}`)
// }

//============================================================

// Напишіть код, який перевіряє, чи введене користувачем значення є рядком
// і не містить символ $. Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt('Enter your value')

// const value = typeof answer;
// if (value === 'string' && !answer.includes('$')) {
//     console.log(value)
//     console.log(`${answer.length}`)
// } else {
//     console.log('error')
// }


//=======================================================

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 70;
// const hours = Math.floor(totalMinutes / 60);
// console.log(hours)
// const minutes = totalMinutes % 60;
// console.log(minutes)
//  const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
// console.log(result)

//=============================================
//Будемо заповнювати місця в готелі доти, доки поточна кількість клієнтів не буде дорівнювати максимально можливій.

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

//===============================================================

// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести пароль доти, доки він не введе вірний пароль

// let password = '';

// do {
//     password = prompt('Enter  password longer 4 symbols')
// } while (password.length < 5);

// console.log(password)

//=================================================

// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести число доти, доки він не введе число, яке більше 10.

// let number;

// do {
//    number = prompt('enter number more than 10')
// } while (number <= 10)

// console.log(number)

//=========================================================

// Потрібно створити світлофор використовуючи конструкцію if
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати


// const message = prompt('Enter color');
// if (message === 'green') {
//     console.log('go')
// } else if (message === 'yellow') {
//     console.log('start')
// } else if (message === 'red') {
//     console.log('stop')
// } else {
//     console.log('be careful')
// }
// let action;
// let message = prompt('Enter color')

// switch (message) {
//     case 'red':
//         action = 'stop';
//         break;
//     case 'yellow':
//         action = 'start';
//         break;
//     case 'green':
//         action = 'go';
//         break;
//     default:
//         action = 'be careful';
// }
// console.log(action)

//=====================================================

// За допомогою циклу for потрібно виконати
// підрахунок кількості символів в рядку

// const string = 'prolisok';
// let count = 0;
// for (let i = 0; i <= string.length; i + -1){
//     count+=1
// }
// console.log(count)

//=================================================

//3. Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню

// const max = 57;
// const min = 19;

// for (let i = max; i >= min; i--){
//     if (i % 2 === 0) {
//         console.log(` парне${i}`)
//     } else {
//         console.log(`непарне ${i}`)
        
//     }
// }

//===========================================================

//4. За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно

// const min = 10;
// const max = 50;
// let total = 0;

// for (let i = 10; i <= 50; i += 1){
//     if (i % 2 === 0) {
//         total += i;
//     } else {
//         continue;
//     }
// }
// console.log(total)

//============================================================

//Выведите в консоль все целые числа от 1 до 100.

// const min = 1;
// const max = 100;

// for (let i = 1; i <= 100; i++){
//     console.log(i)
// }

//========================================


// const start = 100;
// const finish = 1;

// for (let i = 100; i >= 1; i--){
//     if (i % 2 === 0) {
//         console.log(i)
//     } else {
//         continue;
//     }
// }

// function strCount(str, letter){
  
//   let count = 0;
  
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == letter)
//       count++;
//   }
  
//   return count;
  
// }
// console.log(strCount('hello', 'l'))


//==========================================================

// Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function isArray(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (const element of arr1) {
//         if (!arr2.includes(element)) {
//             return false;
//         }
        
//     }
//     return true;
// }
// console.log(isArray(arr1,arr2))

//========================================================================

// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.


// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map(number => {
//     return number +number;
// })
// console.log(result);

// Напишіть функцію, яка перевіряє чи слово являється паліндромом


// const isPalindrom = (str) => {
//     str = str.replace(/\s/g, '').toLowerCase();
//     return str === str.split('').reverse().join('');
// }

// console.log(isPalindrom('abcd'));
// console.log(isPalindrom('dad'))
// console.log(isPalindrom('Never odd or even'));


const slash = '#';
const space = ' ';

function createBoard(x, y) {
    let result = '';
    let row = true;

    for (var i = 0; i < y; i++) {
      for (var j = 0; j < x; j++) {
        result += (j+row) % 2 == 0 ? space : slash;
      }

      console.log(result);
      result='';
      row = !row;
    }
}

createBoard(8,8);