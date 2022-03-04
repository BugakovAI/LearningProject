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

    
/* ----------------  Урок 12, 18  ---------------- */


    let numberOfFilms; 
    
    function start() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотерли?', ''); 
        
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотерли?', ''); 
        }
    
    }

    start();

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

    function showMyDB () {   
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    }

    function showMyDBalt(isPrivate) {
        if (!isPrivate) {
            console.log(personalMovieDB);
        } 
    }
    //  showMyDB(personalMovieDB.privat);
    

    function writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres.push(prompt(`Ваш любимый фильм под номером ${i+1}`));
        }
    }

    writeYourGenres();

    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?','');
    
            if (a != null && a.length < 50 && a != '') {
                const b = +prompt('На сколько оцените его?','');
                if (b != null && b != '') {
                    personalMovieDB.movies[a] = b; 
                } else {i--;}
            } else {i--;}
        }
    }

    rememberMyFilms();

    function dtectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }    
    }

    dtectPersonalLevel();

    console.log(personalMovieDB);


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


// ------- Урок 017 Методы и свойства строк и чисел ------------



