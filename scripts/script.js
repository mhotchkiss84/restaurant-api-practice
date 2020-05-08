// Importing fetch function from fetch.js
import restaurantFetch from './fetch.js';
// Importing the search functions from search-functions.js
import searchFunctions from './search-functions.js';
// Importing user input functions
import userInput from './user-input.js';
import jsVar from './variables.js';
// Loading the function showing all restaurants when the user loads the page
restaurantFetch.restaurantFetch(false);
// Adding an event listener for when the user clicks submit button
document.querySelector(`#submit-btn`).addEventListener('click', (submitEvent) => {
	userInput.getUserInput();
	restaurantFetch.submitRestaurant(jsVar.userInput)
});
// Adding an event listener for when the search button is pressed
document.querySelector(`#search-button`).addEventListener('click', (searchEvent) => {
	searchFunctions.searchFunction();
});