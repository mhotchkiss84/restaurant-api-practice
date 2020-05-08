// Importing variables
import variables from './variables.js';
// Importing fetch function
import restaurantFetch from './fetch.js';
// Creating a function for getting the search text
const getSearchText = () => {
    variables.searchText = document.querySelector(`#search-txt`).value;
}
// Creating a function for clearing the search text
const clearSearchText = () => {
    document.querySelector(`#search-txt`).value = ``;
}
// Creating a function for clearing the container
const clearScreen = () => {
    document.querySelector(`#restaurant-container`).innerHTML = ``;
}
// Creating an object with search functions to be used outside the file
const seachFunctions = {
    // Creating a function for no results found
	noResultsFound: () => {
		if (document.querySelector(`#restaurant-container`).innerHTML === '') {
			document.querySelector(`#restaurant-container`).innerHTML = `<h3>No results found</h3>`;
		}
    },
    // Creating a search function
	searchFunction: () => {
		clearScreen();
		getSearchText();
		if (variables.searchText != ``) {
			restaurantFetch.restaurantFetch(true, variables.searchText);
		} else {
			restaurantFetch.restaurantFetch(false);
		}
		clearSearchText();
	}
};
// Exporting the searchFunction object
export default seachFunctions;
