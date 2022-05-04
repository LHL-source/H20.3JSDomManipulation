/*-------------------------------------------------------------*/

getMovies(movies);
/*Function: getMovies w? yes start part 1*/
function getMovies() {
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
         want de Dom heeft een boom structuur */
        newImg1.src = (movies.poster);
        var newImg1Src = newImg1.src;
        //console.log("newImg1.src: ", newImg1Src); /*works ? yes*/

        return newLi
            //console.log('return newLi:', newLi);

    }); /*movxxMap*/
} /*func getxxvies*/

/*end Function: getMovies  works? yes, end part 1*/
/*-------------------------------------------------------------------*/


/*Start :Function: removMovies: W?Yes ---------------------------------------------------------------------*/
function removeMovies() {

    var parentContUL1 = document.querySelector('#containerIdItems');
    var childLi1 = document.querySelectorAll('#newMovie, #avengers, #men, #princess, #batman ');
    parentContUL1.innerHTML = ""; /*works? */
}
/*End: Remove movies----------------------------------------------------------------------*/


/*start Declaration of : querySelector(all)--------------------------------------------*/


var movieItemsId = document.querySelector('#movieItemsId');
//console.log('movieItemsId:  ', movieItemsId); /*works? y*/

var newMovieId = document.querySelector('#newMovie');
//console.log("newMovieId", newMovieId);/*works? y*/

var movieAllLi = document.querySelectorAll('#newMovie, #avengers, #men, #princess, #batman');
//console.log("movieAllLi: ", movieAllLi); /*works? y*/

var avengersId = document.querySelector('#avengers');
//console.log("avengersId", avengersId);/* works? y*/

var menId = document.querySelector('#men');
//console.log("menId", menId); /* works? y*/

var princessId = document.querySelector('#princess');
//console.log("princessId", princessId); /* works? y*/

var batmanId = document.querySelector('#batman');
//console.log("batmanId", batmanId); /* works? y*/

/*end Declaration querySelector-------------------------------------------------------------*/


/*Start EventListener and switch:make the eventlisener for the ul-----------------------------------------------*/

movieItemsId.addEventListener('change', (movieAllLi) => {

    var targetValue = movieAllLi.target.value;
    console.log('targetValue: ', targetValue); /*works ?*/

    removeMovies();

    /*switch works ? yes good job en the dummy calling function : works ? yes*/
    switch (targetValue) {
        case 'newMovie':
            var newMovie2 = movies.filter((moviesEachItem) => {

                var onlyMovie = moviesEachItem.type;
                var moviesYearPars = parseInt(moviesEachItem.year);
                // console.log('moviesYearPars: ', moviesYearPars) /*w? yes? result: 25NAN*/

                return moviesYearPars >= 2014

            }); /*moxxfilter*/

            console.log('newMovie2', newMovie2);
            getMovies(newMovie2);


            break;

        case 'avengers':
            var movie1 = movies.filter(movie => {
                return movie.title.toLowerCase().includes(targetValue);
            })
            console.log(' movie1', movie1);

            break;

        case 'men':
            var movie1 = movies.filter(movie => {
                return movie.title.toLowerCase().includes(targetValue);
            })
            console.log(' movie1', movie1);

            break;

        case 'princess':
            var movie1 = movies.filter(movie => {
                return movie.title.toLowerCase().includes(targetValue);
            })
            console.log(' movie1', movie1);

            break;

        case 'batman':
            var movie1 = movies.filter(movie => {
                return movie.title.toLowerCase().includes(targetValue);
            })
            console.log(' movie1', movie1);

            break;

        default:
            console.log('switchDefault: sorry chose a button'); /*Works ? y*/
    } /*switch*/

}) /* both are part of movieItemsId*/

/*-switch en eventListener end--------------------------------------------------------------*/