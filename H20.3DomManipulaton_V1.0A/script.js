/*Exercise: the big five
Question 1:Add an event listener to the buttons
Q1: works ? yes good job

Q2:Create a function that gets called when one of the buttons is clicked. 
Check this with a console.log.
Q2:A)works? yes for querySelect
 B) yes also for querySelectALL, has to combine with forEAch Well done

Q3:Make sure the click event is passed to this function.
Q3: works? yes

Q4:Make sure you have access to the value of the button clicked in this function. Check this with console.log.
 The outcome you want to see in the console when you click is: Leopard / Lion / Elephant / Rhino or Buffalo.
Works? y , werkt ook op willekeurige gekozen button ? yes it works

Q5:Create a new list item with JavaScript with the above value (namely the animal you clicked on.
works? not yet

Q6:Select the parent element to which you want to attach this new list item (the spotted animals list).
Q6: answer: <ul id="spotted-animals-list">

Q7:Add the new list item to the parent element.

*/
/*---------------------------------------------------*/
/* Q7:uitwerking works? not yet */
/* haal op de parent- element die je nodig hebt dmv queryselectorall*/
var menuSpot = document.querySelector('#spotted-animals-list .spotted-animals-list-item');
(console.log("menuspot;", menuSpot)); /*ophalen element*/
//var menuSpot1 = Array.from(menuSpot);

var newLi = document.createElement("li");
console.log("newli", newLi);


menuSpot.appendChild(newLi);



/*Q6 antwoord:<ul id="spotted-animals-list">
/*Q5 works ? not yet                                   */
/* stap 1 maak 2 elementen newLi en newButton*/
//var newLi = document.createElement("li");
//console.log("newLi: ", newLi); /*works ? y*/
var newButton = document.createElement("button");
//console.log("newButton: ", newButton); /* works ? y*/

/*stap2 ophalen met queryselector waar de 2 nieuwe elementen moeten komen, ul class-"big-five-list-items"*/
/*works? y*/
/*opdr 4 works? y*/
//const menu = document.querySelectorAll(".big-five-list li");

//console.log("menuQuerySelectorAll: ", menu);
//var menu1 = Array.from(menu);
//console.log("menu1: ", menu1); /*werk? ja antwoord : false*/

//const text = menu1.map((element) => element.textContent);/*works ? y arrow function beknopt*/
//var text = menu1.map((element) => { return element.textContent });
/*works ? y arrow function uitgeschreven*/
//console.log("textContent: ", text);



/*Q4 works? yes good job*/
const clickButton = document.querySelectorAll(".big-five-button");
clickButton.forEach(element => {
    element.addEventListener('click', (element) => console.log("btnQ2B: ", element.target));
});

/*-------------------------------------------------
Q2B works ? yes good job. voorbeeld van https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist
querySelectorAll/forEach/EventListener
let cbox = document.querySelectorAll(".box");
cbox.forEach(box => {
    box.addEventListener('click', () => box.classList.toggle("red"));
});

------------------------------------------------*/

//maak een anoymous function expression daarna arrow function
//hieronder is de function expression
/*var clickButtonFuncton = function(koek) {
return console.log("Entering clickButtonFunction: ", koek);

}*/
// test the function expression door aan te roepen works? y good job
//clickButtonFuncton();

//haal met queryselector(niet ALL) the big-five-button daarna koppelen aan een eventlistener
//const clickButton = document.querySelector(".big-five-button");
/*clickButton.addEventListener("click", () => {
    console.log("clickedButton");*/
/*works? y on querySelector not querySlectorAll*/
/*}); * /
/*console.log("test1:", clickButton);*/
/*querySelectorAll ok? yes good job*/
/*-----------------------------------------------------------------------------*/
/*kladblok:codegrepper works? y
const element = document.querySelector(".class__name");

element.addEventListener("click", () => {
    console.log("clicked element");
});

*/
/*-------------------------------------------------------------------------*/
//var clickButtonArray = Array.from(clickButton);
/* hieronder Q1 uitwerking works ? not yet*/
// koppel aan de big-five-button een eventlistener

/*clickButton.addEventListener("click",
alert("click clickButton");
);*/
/*----------------------------------------------------------------------
/*hieronder is de arrow function ? nee volgens mdn:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

/*var clickButtonFunction1() => {
return console.log("Entering clickButtonFunction: ");
}*/
/*-------------------------------------------------------------------------*/



//clickButton.addEventListener("click", clickButtonFuncton())


/*kladblok   
mdn vb syntax eventlistener arrow funtion:
el.addEventListener("click", () => { modifyText("four"); }, false);
 return console.log("Entering function clickButton: ");
*/