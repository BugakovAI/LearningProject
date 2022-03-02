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

    
    /* ----------------  Первое задание урок 12  ---------------- */


    let numberOfFilms;
        
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотерли?', '');

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

    let movie = prompt('Один из последних просмотренных фильмов?',''),
        mark = prompt('На сколько оцените его?',''),
        movie2 = prompt('Один из последних просмотренных фильмов?',''),
        mark2 = prompt('На сколько оцените его?','');

    personalMovieDB.movies[movie] = mark;
    personalMovieDB.movies[movie2] = mark2;

    console.log(personalMovieDB);