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
/* par1 get ALL movies on the screen works? yes*/
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
//console.log("movieAllLi: ", movieAllLi); /*works? y*/
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
    /*switch works ? yes good job en the dummy calling function : works ? yes*/
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
const toFindTitle = 'princess';
console.log('toFindTitle: ', toFindTitle); /*w? yes all movies on screen ? ye*/

/* step1: set the movie item title in lowercase becasue the id= princess is in lowercase
works ? yes*/
const getMovieLowerCase = movies.map((movieItem) => {
    console.log('motieItem', movieItem);
    console.log('motieItem2', movieItem.title, movieItem.imdbID); /*w? ye*/
    var titleImdbID = 'movieItem.title, movieItem.imdbID';
    console.log('titleImdbID: ', titleImdbID);
    var movieTitleLowerCase = titleImdbID.toLowerCase(); /*w? yes good job*/
    console.log('movieTitleLowerCase: ', movieTitleLowerCase);
    return //movieTitleLowerCase
}) /*getxxLowerCase*/

//console.log('getMovieLowerCase: ', getMovieLowerCase);

/*step2: use .filter to the chosen movies for example: prinsess. Works ? yeh good job*/
//var getMovieFilter = getMovieLowerCase.filter((getMovieLowerCaseItem) => {
//var movieIncl = getMovieLowerCaseItem.includes(toFindTitle);

//return movieIncl
//}) /*getxxxFilter*/

//console.log('getMovieFilter', getMovieFilter);

/*step3: get all the chosen movies for example: princess from the array movies 
 and bring into the console. Use .map ?*/

//const getChosenMovie = getMovieFilter.map((item) => {
//??
//return koek
//})
//console.log('getChosenMovie: ', getChosenMovie);
/*------------------------------------------------------------------*/
/*noteblock B: test....*/
/*start test...*/
/*st....*/
/*start test...*/
/*start test...*/