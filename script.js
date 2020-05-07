// Importing variables
import jsVar from './variables.js';
// Importing fetch function from fetch.js
import restaurantFetch from './fetch.js';
// Importing the search functions from search-functions.js
import searchFunctions from './search-functions.js';
import seachFunctions from './search-functions.js';
// Loading the function showing all restaurants when the user loads the page
restaurantFetch.restaurantFetch(false);
// Adding a event listener for when the search button is pressed
document.querySelector(`#search-button`).addEventListener('click', (searchEvent) => {
	seachFunctions.searchFunction();
});