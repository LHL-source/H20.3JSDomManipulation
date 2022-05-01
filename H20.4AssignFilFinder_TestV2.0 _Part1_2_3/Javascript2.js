/*Section of assignment: Tips and tricks
Q4:get ALL movies on the console via function
works ? yes
Q4step1:get the <ul> by using the id that you made in your HTML structure

/*------------------------------------------------------------------*/
/*Q4:start over put the .append of li ul in the 
method.map in stead of in the method forEach 
works ? yes excellent job*/
/* change the title to the link by using tag <img>
works ? yes*/

var movieUl = document.querySelector("#containerIdItems");

const movieMap = movies.map((movies) => {
    /* create li works ? yes*/
    var newLi = document.createElement('li');
    //console.log("newli: ", newLi); /*works ? yes*/

    /* create a <img> works ? yes */
    var newImg1 = document.createElement('img');
    //console.log('newImg1:', newImg1); /*works ?yes*/

    /*append newImag1 to movieUl works? yes*/
    var ulAppNewLi = movieUl.appendChild(newLi);
    //console.log('ulAppNewLi;  ', ulAppNewLi); /*works? y*/

    /* append newImg1 to newLi works ? yes Q: append or appendChild ?*/
    var newLiAppNewImg1 = newLi.appendChild(newImg1);
    // console.log('newLiAppNewImg1', newLiAppNewImg1); /*works ? y*/

    /*get the link with property poster to the console works?yes excellent job let
     let op de VOLGORDE is ZEER belangrijk eerst aan maken en stapsgewijs ul, li, img, src aan elkaar koppelen
     want dit de Dom heeft een boom structuur */
    newImg1.src = (movies.poster);
    var newImg1Src = newImg1.src;
    //console.log("newImg1.src: ", newImg1Src); /*works ? yes*/

    return newLi
        //console.log('return newLi:', newLi);

});

/*end part 1 works? yes*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/


/*part2b test(add 1 eventlisener to the ul and use e.target to get which
    one of the 5 buttons has been clicke).works? yes.*/
/*get the ul id with querySelector*/

//console.log('movieUl: ', movieUl); /*works ? y*/

/*step 1: make the test switch with the button*/
var movieItemsId = document.querySelector('#movieItemsId');
//console.log('movieItemsId:  ', movieItemsId); /*works? y*/

var newMovieId = document.querySelector('#newMovie');
//console.log("newMovieId", newMovieId);/*works? y*/

var movieAllLi = document.querySelectorAll('#newMovie, #avengers, #men, #princess, #batman');
console.log("movieAllLi: ", movieAllLi); /*works? y*/
/* change the nodelist into an array */
//var movieAllLiArray = Array.from(movieAllLi);
//console.log('movieAllLiArray', movieAllLiArray);
/*works ? y*/

var avengersId = document.querySelector('#avengers');
//console.log("avengersId", avengersId);/* works? y*/

var menId = document.querySelector('#men');
//console.log("menId", menId); /* works? y*/

var princessId = document.querySelector('#princess');
//console.log("princessId", princessId); /* works? y*/

var batmanId = document.querySelector('#batman');
//console.log("batmanId", batmanId); /* works? y*/

/*make the eventlisener for the ul*/
movieItemsId.addEventListener('change', (movieAllLi) => {
    //alert(movieAllLi.target);
    /*works ? y*/
    console.log("Entering eventlistenerUl:  ", movieAllLi.target);

    //console.log("eventlistenerUlMovieAllLiTargetValue:  ", movieAllLi.target.value);
    /*works? yes where can you find it in the property in the devtool?*/
    var targetValue = movieAllLi.target.value;
    console.log('targetValue: ', targetValue);
    /*works Yes*/
    /*switch works ? yes good job en the calling function : works ? yes*/
    switch (targetValue) {
        case 'newMovie':
            //console.log("SwitchNewMovie:", targetValue);
            /* Works ?  y*/
            //handleOnChangeEventNewMovie(targetValue)
            break;

        case 'avengers':
            //console.log("SwitchAvengers:", targetValue); /*Works ? yes*/
            //handleOnChangeEvent(targetValue) /*works? yes*/
            break;

        case 'men':
            //console.log("SwitchMen:", targetValue); /*Works ? y*/
            // handleOnChangeEvent(targetValue)
            break;

        case 'princess':
            //console.log("SwitchPrincess:", targetValue); /*Works ? y*/
            //handleOnChangeEvent(targetValue);
            break;

        case 'batman':
            //console.log("SwitchBatman:", targetValue); /*Works ?y */
            // handleOnChangeEvent(targetValue)
            break;

        default:
            console.log('switchDefault: sorry chose a button'); /*Works ? y*/
    } /*switch*/

}) /* both are part of movieItemsId*/

/*............................................................................*/
/*part 2: function filters*/
/*possible solution : dummyVariabel works ? yes*/
var dummyPrincess = document.querySelector("#princess");
console.log('dummyPrincess1:  ', dummyPrincess); /*works? y*/
var dummyPrincess1 = "Princess";
var dummyPrincess = dummyPrincess1;

console.log('dymmyPrincess2', dummyPrincess);
var moviePrincess = movies.filter((movie => movie.title.includes("Princess")));
console.log('moviePrincess', moviePrincess);



var handleOnChangeEvent = function(dummyPrincess) {
    /*get ALL movies*/
    let alleMoviesArray = movies.map((movies) => {
        let moviesTitle = movies.title; /*works? y*/

        //let moviesPrincess = movies.filter(movies => movies.title.includes("princess")); /*works? not yet*/
        //console.log("moviesPrincess:", moviesPrincess);/*see futher noteblock A*/

    }) /* allexxArray */

    /*put title to lowercase to conpair with value = princess which is lowercase works? not yet */
    // let titleLowerCase = alleMoviesArray
} /*handxxEvent*/

/*callback function hanxxevnt()*works ?y*/
handleOnChangeEvent();
/*------------------------------------------------------------------*/
/*noteblock A: test the lowercase and .include*/

/*start Test B werkende voorbeeld works ? no because of lowercase p of princess, if change t
the p in capital works ? yes 6 items */
const getPrincessMovies = movies.filter(movie => movie.title.includes("princess"));
console.log("getPrincessMovies: ", getPrincessMovies);


/*einde test b werkende voorbeeld*/
const newMovieList = movies.map((movieItem) => {


    /*start - hieronder testA werkt tot tolowercase*/
    // var newAllMovieList = movieItem.title;
    // console.log('Entering newAllMovieList:  ', newAllMovieList); /*works ? yes good job*/
    // let titleLowerCase = movieItem.title.toLowerCase(); /*works? yes*/
    //console.log('titlePrLowerCase', titleLowerCase); /*works? y*/

    /* use .includes and than .filter to get ONLY alle princess title movies*/
    // let titleLowerCaseIncl = titleLowerCase.includes("princess"); /*w? yes answer: 6x true */
    //console.log('titleLowerCaseIncl', titleLowerCaseIncl); /*w?yeh*/
    /* .include only give 6x true, now use.filter to display the 6 movies. W? not yet*/
    //let movieFilter = titleLowerCaseIncl.filter(titleLowerCaseIncl);
    /* not yet*/
    //console.log('movieFilter: ', movieFilter);
    /*w? not yet*/
    /*hieronder testA werkt tot tolowercase- einde*/
}) /*newxxList */


/* here under notes: 
//var movieLoCasePrincess = titleLowerCase.filter((titleLowerCase => titleLowerCaseItem.includes("princess")));
/* works ? not yet*/
//console.log('movieLoCasePrincess: ', movieLoCasePrincess);
/*works ? not yet why not break it down into stap1).include than stap2).filter*/
/*stap 1 : .include works ? works? yes*/
//let titleLowerCaseIncl = titleLowerCase.includes("princess");/*W? yes*/
// console.log('titleLowerCaseIncl', titleLowerCaseIncl);/*w? yes*/

/*stap 2: .filter works? not yet*/
//let movieFilter = titleLowerCaseIncl.filter((titleLowerCaseIncl => titleLowerCaseIncl));/*w? not*/
//console.log('movieFilter: ', movieFilter);/*w? not yet*/

/*werkende voorbeeld*/
//const getPrincessMovies = movies.filter(movie => movie.title.includes("princess"));

//return newMovieList


// var movieItemTitleLowerCase = movieItem.title.toLowerCase(); /* works ? y*/
//return movieItemTitleLowerCase



//console.log('newMovieList', newMovieList); /*works ? y*/
/*works? y result 35 items with ONLY the title with lowercase */

/*for moviesPrincess make a .filter and .include*/

/*filter the word princess the letter p with CAPITAL works ? y*/
//var moviePrincess = movies.filter((movie => movie.title.includes("Princess")));

//var moviePrincess = movies.filter((movie => movie.title.toLowerCase().includes("Princess")));/works ? not yet*/
//console.log("moviePrincess: ", moviePrincess);


/*filter the word princessListLowCase the letter p with lowercase works ?*/
//var moviepprincess = newMovieList.filter((newMovieList => newMovieList.includes("princess")));
/*works ? no filter al 35 movies only title lowcase
//console.log('moviePrincess', moviepprincess);


/*------------------------------------------------------------*/

/*function handleOnChangeEvent works ? */
/*problem with the scope of targetValue ? once used in the function the movie img 
disappear. So to make the function filters use a dummy like let dummyPrincess = princess*/
//var handleOnChangeEvent = function(targetValue) {

//console.log('Entering handleOnChangeEvent: ', targetValue);/* works ? yes good job*/
/*get ALL movies with.map*/

//let alleMoviesArray = movies.map((movies) => {
//return console.log("allMovies:  ", movies) /*works ? */
//})

/*the targetValue is in lowercase so 
//}/*function handeOnchangeEvent*/

/*---------------------------------------------------------------- */