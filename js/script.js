    "use strict";
    
    // function pow(x, n) {
    //     let result = 1;
        
    //     for (let i = 0; i < n; i++) {
    //         result = result*x;
    //     }
        
    //     return result;
    // }

    // console.log(pow(5, 0));
    // console.log(pow(2,2));

    
/* ----------------  Практика 12, 15, 18, 24 ---------------- */

    // let personalMovieDB = {
    //     count: 0,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: false,
    //     start: function() {
    //         this.count = +prompt('Сколько фильмов вы уже посмотерли?', ''); 
        
    //         while (this.count == '' || this.count == null || isNaN(this.count)) {
    //             this.count = +prompt('Сколько фильмов вы уже посмотерли?', ''); 
    //         }    
    //     },
    //     showMyDB: function() {   
    //         if (this.privat == false) {
    //             console.log(personalMovieDB);
    //         }
    //     },
    //     writeYourGenres: function() {
    //         for (let i = 0; i < 3; i++) {
    //             let genre = '';
    //             while (genre == '' || genre == null) {
    //                 genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
    //             }
    //             this.genres.push(genre);
    //         }
    //         this.genres.forEach((item, i)=>{
    //             console.log(`Любимый жанр №${i+1} - это ${item}`);
    //         });
    //     },
    //     rememberMyFilms: function() {
    //         for (let i = 0; i < 2; i++) {
    //             const a = prompt('Один из последних просмотренных фильмов?','');
        
    //             if (a != null && a.length < 50 && a != '') {
    //                 const b = +prompt('На сколько оцените его?','');
    //                 if (b != null && b != '') {
    //                     personalMovieDB.movies[a] = b; 
    //                 } else {i--;}
    //             } else {i--;}
    //         }
    //     },
    //     detectPersonalLevel: function() {
    //         if (personalMovieDB.count < 10) {
    //             alert("Просмотрено довольно мало фильмов");
    //         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    //             alert("Вы классический зритель");
    //         } else if (personalMovieDB.count >= 30) {
    //             alert("Вы киноман");
    //         } else {
    //             alert("Произошла ошибка");
    //         }
    //     },
    //     toogleVisibleMyDB: function() {
    //         (this.privat) ? this.privat = false : this.privat = true 
    //     }
    // };

    // personalMovieDB.start();

    // personalMovieDB.writeYourGenres();
  
    // personalMovieDB.rememberMyFilms();
 
    // personalMovieDB.detectPersonalLevel();

    // // console.log(personalMovieDB);
    // // if (+prompt("Изменить свойство приват?","0") == 1) {
    // //     personalMovieDB.toogleVisibleMyDB();
    // // }
    // console.log(personalMovieDB);
    


// ---------------------- ЦИКЛЫ и УСЛОВИЯ-----------------------------

    // let a = 40;
    // let b = 10;
    // let c;

    // (b*5===a) ? console.log("Da") : console.log("Net");

    // switch (a) {
    //     case 40:
    //         console.log("a=49");
    //         break;
    //     case 50:
    //         console.log("a=50");
    //         break;
    // }

    // let num = 50;

    // while (num <= 55) {
    //     console.log(num);
    //     num++;
    // }

    // do {
    //     console.log(num);
    //     num++;
    // } while (num <= 55);

    // for (let i = 1; i < 8; i++) {
    //     if (i==6) {
    //         // break;
    //         continue;
    //     }
    //     console.log(i);
    // }


// ---------------------- ФУНКЦИИ-----------------------------
    
// let num = 20;

    // function showFirstMessage(text) {
    //     console.log(tex t);
    //     console.log(num);
    // }

    // showFirstMessage("Hello World!");
    // console.log(num);



    // function calc(a, b) {
    //     return (a + b);
    // }

    // console.log(calc(1, 1));
    // console.log(calc(2, 2));
    // console.log(calc(3, 3));

    // let log = function (text) {
    //     console.log(text);
    // };

    // function ret() {
    //     let num = 40;
    //     //
    //     //
    //     return num;
    // }

    // const anotherNum = ret();
    // console.log(anotherNum);
    // log(anotherNum);

    // const calcs = (a, b) => {
    //     return a + b;
    // };

    // log(calcs(14,2));

// ------- Урок 017 Методы и свойства строк и чисел ------------
   

    // // .lenght это свойство а не функция, поэтому вызывается без скобок
    // const str = "Test";
    // // const arr = [1, 3, 4];

    // // console.log(str[2] = 'd');
    // console.log(str.toUpperCase());
    // console.log(str.toLowerCase());
    // console.log(str);

    // const fruit = "Some fruit"; 
    // console.log(fruit.indexOf("q"));

    // const logg = "Hello World";
    // console.log(logg.slice(5, 11));  //вырезает кусок строки (с какого, по какой)
    // console.log(logg.substring(6, 11)); // не поддерживает отрицательные
    // console.log(logg.substr(6,3)); //вырезает кусок строки (с какого, сколько)

    // const num = 12.2;
    // console.log(Math.round(num));

    // const test = "12.2px";
    // console.log(parseInt(test)); // можно обрезать строку и сразу получить числовой тип (12)
    // console.log(parseFloat(test));


// ------- Урок 019 Callback функции ------------

    // function first() {
    //     // do something 
    //     setTimeout(() => {
    //         console.log(1);
    //     }, 500);
    // }

    // function second() {
    //     console.log(2);
    // }

    // first();
    // second();

    // learnJS('JavaScript', function() {
    //     console.log("Я прошел этот урок!");
    // });

    // learnJS('JavaScript', done);

    // function done() {
    //     console.log("Я прошел урок");
    // }

    // function learnJS(lang, callback) {
    //     console.log(`Я учу: ${lang}`);
    //     callback();
    // }

// ------- Урок 020 Объекты, деструктуризация объектов ES6 ------------

// const options = {
//     name:'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     maketest: function() {
//         console.log('test');
//     }
// };

// for (let key in options) {

//     console.log(options[key].valueOf());

// }


// ------- Урок 021 Массивы ------------


// let str = "audi, bmw, mercedes, kia, renault";
// console.log(str);

// let arr = str.split(", ");
// console.log(arr);

// str = arr.join(" > ");
// console.log(str);

// const arr = [23, 13, 48, 87, 5];
// // arr.sort((a,b)=>a-b);
// arr.sort(compareNum);

// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.pop();
// arr.push(15);


// Так делать нельзя, т.к. будет 94 пустые ячейки
// arr[99] = 99;

// console.log(arr);
// console.log(arr.length);


// arr.forEach(item => {
//     console.log (item)
// });

// arr.forEach(function(item, i, arr){
//     console.log(`Элемент №${i}: ${item} из массива ${arr}`);
// });

// arr.forEach((item, i)=>{
//     console.log(`Элемент №${i}: ${item}`);
// });

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Работает с массивами, псевдомассивами, строками, мап и т.д. и не работает с объектами
// Выводит значения элементов массива
// for (let i of arr) {
//     console.log(i);
// }  

// Работает с объектами
// Выводит индексы элементов массива
// for (let i in arr) {
//     console.log(i);
// }


// ------- Урок 022 Передача по ссылке/значению, спред оператор ------------

// let a = 5,
//     b = a;

//     b += 5;

//     console.log(a);
//     console.log(b);
// // Примитивы передают значение по значению
// const obj = {
//     a: 5,
//     b: 10
// };
// // Объекты и массивы передают значение по ссылке

// const objCopy = obj;
// objCopy.a = 15;
// objCopy.b = 110;
// console.log(obj);
// console.log(objCopy);

// Существуют поверхностые и глубокие копии объектов
// Если с помощью цикла поэлементно скопировать объект у которого одно из свойств содержит объект, 
// то в скопированном объекте окажется ссылка на подобъект исходного

//  const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
//  };

//  const add = {
//      d: 17,
//      e: 20
//  };

// // // Ниже второй способ (после цикла) как сделать поверхностную копию объекта
// //  console.log(Object.assign(numbers, add)); 

// //  можно просто скопировмть объект через assign и пустой объект {}

// const clone = Object.assign({}, add);
// clone.d = 2;

// console.log(add);
// console.log(clone);


// Ниже третий способ сделать поверхностную копию массива с помощью arr.slice()
// метод нужен для вырезания части массива, но оставив пустой аргумент, можно
// получить копию

// const oldArr = ['a','b','c'];
// const newArr = oldArr.slice();

// newArr[0] = 'Hello';

// console.log(oldArr);
// console.log(newArr);

// Ниже четвертый способ и он из стандарта ЕС6 (только для массивов) и ЕС8 (уже для объектов).
//  Оператор Разворота - Spread - ...arr - разварачивает(раскрывает) массив и поэлементно передает
// С помощью него можно очень удобно копировать объекты и массивы

// const   video = ['youtube','vimeo','rutube'],
//         blog = ['wp','LJ','blogger']

// console.log([...video, ...blog, 'myItem']);

// // Так можно передавать параметры в функцию из массива, например, имя видео, заставка, автор и т.д.
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const arr = ["a","b"];
// const newArr = [...arr];

// const obj = {
//      a: 1,
//      b: 2
// };
// const newObj = [...obj];


// ------- Урок 023 Основы ООП, прототипно ориентированное наследование  ------------
// let str = "some"; //строка
// let strObj = new String(str); //объект

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello, im solja");
//     }
// };

// // Создаем объект Джон, который прототипно наследуется от объекта soldier
// const John = Object.create(soldier);

// const John = {
//     health: 300
// };

// Это устаревший вариант, так делать нельзя!
// John.__proto__ = soldier;
// Вот так правильно: 
// Object.setPrototypeOf(John, soldier);
// Но это зачастую не используется, т.к. можно использвать сразу Object.create(protoObject)


// console.log(John.armor);
// John.sayHello();


// ------- Урок 026 Динамическая типизация ------------

// // Преобразование в строку toString
// // 1:
// console.log(typeof(null));
// console.log(typeof(String(null)));
// console.log(typeof(4));
// console.log(typeof(String(4)));

// // 2 - конкатенация:
// console.log(typeof(5 + '')); //строка
// console.log(typeof(null + '')); //строка
// часто используется в реальной работе, например:
// const num = 5;
// console.log("https://vk.com/catalog/" + 5);
//const fontSize = 26 + 'px'; //


// // Преобразование в число toNumber
// // 1 - почти не используется:
// console.log(typeof(Number('4')));

// // 2 - унарный плюс. Часто испольуется:
// console.log(typeof(+'4'));
// console.log(+prompt("Введите число", ""));

// // 3:
// console.log(parseInt("15px", 10));
// console.log(typeof(parseInt("15px", 10)));


// // Преобразование в число булевый тип
// // 1:
// console.log(typeof(Boolean('4')));

// // 2 (Эти значения всегда выведут false):
// console.log(typeof(0));
// console.log(typeof(''));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof(NaN));
// // Все остальные значения будут тру
// let switcher = null;
// switcher = 1;
// if (switcher) {
//     console.log('Working...');
    
// }

// // 3  
// console.log(typeof(!!"444")); 


// ------- Урок 27 Задачи с собеседований на понимание основ ------------

// // Какое будет выведено значение:
// let x = 5; 
// console.log( x++ );  // 5

// // Чему равно такое выражение: 
// [ ] + false - null + true;
// console.log([ ] + false - null + true); // NaN
// //+ это конкатенация, результат строка, а пустой массив = пустая строка, поэтому
// // []+false = false - строка. А строка - null = NuN


// // Что выведет этот код: 
// let y = 1; let xx = y = 2; console.log(xx); // 2

// // Чему равна сумма 
// [ ] + 1 + 2;
// console.log([ ] + 1 + 2); // 12 

// // Что выведет этот код: 
// console.log( "1"[0] );  // 1
// // к каждому элементу строки(символу) можно обратиться по символу

// // Чему равно 
// console.log(2 && 1 && null && 0  && undefined);  // ищет первый false, это null

// // Есть ли разница между выражениями?
// console.log(!!( 1 && 2 ) === (1 && 2)); /// нет

// // Что выведет этот код: 
// console.log( null || 2 && 3 || 4 );   //  3
// // && выше приоритетом чем ||, поэтому выбирается сначала между 2 и 3, т.к. лжи нет, выбирается 
// // последний элемент - 3, а потом уже работает или и находит первый правдивый элмент, это 3

// // Правда ли что a == b ?
// a = [1, 2, 3]; b = [1, 2, 3];
// console.log(a==b);  // нет
// // это разные объекты просто с одинаковым набором данных, это не один и тот же объект

// // Что выведет этот код:  
// console.log( +"Infinity" );  // Infinity
// console.log( typeof(+"Infinity") );  // Number

// // Верно ли сравнение: 
// console.log("Ёжик" > "яблоко");   /// да, будет посимвольное сравнение, false

// // Чему равно 
// console.log(0 || "" || 2 || undefined || true || falsе);  // ищет первый true, это 2


// ------- Урок 28 Получение элементов со страницы ------------
