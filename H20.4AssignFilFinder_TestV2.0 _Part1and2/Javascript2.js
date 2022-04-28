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
    one of the 5 buttons has been clicke)..*/
/*get the ul id with querySelector*/

console.log('movieUl: ', movieUl); /*works ? y*/

/*step 1: make the test switch with the button*/
var newMovieId = document.querySelector('#newMovie');
//console.log("newMovieId", newMovieId);/*works? y*/

var movieAllLi = document.querySelectorAll('.movie');
console.log("movieAllLi: ", movieAllLi);

var avengersId = document.querySelector('#avengers');
//console.log("avengersId", avengersId);/* works? y*/

var menId = document.querySelector('#men');
//console.log("menId", menId); /* works? y*/

var princessId = document.querySelector('#princess');
//console.log("princessId", princessId); /* works? y*/

var batmanId = document.querySelector('#batman');
//console.log("batmanId", batmanId); /* works? y*/

/*make the eventlisener for the ul*/
//movieUl.addEventListener('change', (el) => {
//console.log("Entering eventlistenerUl:  ", el.target.value);
//})








/*---------------------------------------------------------------*/
/*Part2a(add to EACH button a eventlisener): read the button which has been chosen and put in an if/else or switch 
and than than put the callback function in for the chosen button */

/*step 1: make the test switch with the button*/
//var newMovieId = document.querySelector('#newMovie');
//console.log("newMovieId", newMovieId);/*works? y*/

//var avengersId = document.querySelector('#avengers');
//console.log("avengersId", avengersId);/* works? y*/

//var menId = document.querySelector('#men');
//console.log("menId", menId); /* works? y*/

//var princessId = document.querySelector('#princess');
//console.log("princessId", princessId); /* works? y*/

//var batmanId = document.querySelector('#batman');
//console.log("batmanId", batmanId); /* works? y*/



/* add the addEventListener actio: change to each the button
and invoke the corresponding function*/


//newMovieId.addEventListener("change", newMovieFuncNewMov);

//function newMovieFuncNewMov() {
//    console.log("Entering newMovieFuncNewMovie"); /*works ? yes*/
//} /*works ? */


//avengersId.addEventListener("change", avengersFunc);

//function avengersFunc() {
//   console.log("Entering avengersFunc");
//} /*works ?y*/

//menId.addEventListener("change", menFunc);

//function menFunc() {
//    console.log("Entering menFunc");
//} /*works y*/

//princessId.addEventListener("change", prinssFunc); /*works ? y*/

/*function prinssFunc() {
console.log("Entering prinssFunc");
} */
/*works y*/

//batmanId.addEventListener("change", badmFunc); /*works ? y*/
/*function badmFunc() {
    console.log("Entering badmanFunc");
} */
/*works y*/

/*addEventListener End----------------------------------------*/
/*handleOnChangeEvent()...*/

//let handleOnChangeEvent = function(event) {
//console.log("Entering handleOnChangeEvent: ", event.target); /* works? y */
//}

/*handleOnChangeEvent('event');*/
/*if :handleOnChangeEvent('
       soepKip ') result of console.log:soepKip works? yes*/
/*end*/