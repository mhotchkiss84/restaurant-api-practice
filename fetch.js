// Importing the variables
import jsVar from "./variables.js"
// Importing the search functions
import searchFunctions from "./search-functions.js"

//Creating a fetch function with an optional search parameter. The includeSearch is a boolean true/false and if true then a search value needs to be included
const restaurantFetch = {
    restaurantFetch: (includeSearch, search = '') =>{
	if (includeSearch === false) {
		jsVar.fetchLink = `http://localhost:8088/restaurants`;
	} else {
		jsVar.fetchLink = `http://localhost:8088/restaurants?q=${search}`;
	}
	fetch(jsVar.fetchLink).then((restaurants) => restaurants.json()).then((parsedRestaurants) => {
		parsedRestaurants.forEach((element) => {
			document.querySelector(
				`#restaurant-container`
			).innerHTML += `<div class="restaurant-card"><a href="${element.restaurant.url}" target= _blank> ${element
				.restaurant.name}</a><p>${element.restaurant.location.address}</p> <p>Rating: ${element.restaurant
				.user_rating.aggregate_rating}</p><p>Average Cost For Two:  $ ${element.restaurant
				.average_cost_for_two}</p><a href="${element.restaurant
				.menu_url}" target= _blank><button class="menu-button">View Menu</button></a></div>`;
		});
		searchFunctions.noResultsFound(); //Running function to check if results were displayed after search
	});
}}
// Exporting the fetch function as an object
export default restaurantFetch