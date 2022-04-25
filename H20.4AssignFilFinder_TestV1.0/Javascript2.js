/*Tips and tricks
Q4:get ALL movies on the console via function
works ? yes good job
Q4step1:get the <ul> by using the id that you made in your HTML structure

/*------------------------------------------------------------------*/
/*Q4step1:works ? yes good job*/
var movieUl = document.querySelectorAll("#containerIdItems");
console.log("movieUlQSAll: ", movieUl);
var movieArray = Array.from(movieUl);



/*Q4 works? y*/
var addMoviesToDom = function() {
    return console.log("addMoviesToDom", movies)
};

addMoviesToDom(movies);