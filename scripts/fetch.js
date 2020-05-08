// Importing the variables
import jsVar from './variables.js';
// Importing the search functions
import searchFunctions from './search-functions.js';

// Creating a function for searching the restaurants by title
function restaurantSearch(searchTerm){
	fetch(jsVar.fetchLink).then((restaurants) => restaurants.json()).then((parsedRestaurants) => {
		parsedRestaurants.forEach((element) => {
			if (element.name.toLowerCase().includes(searchTerm.toLowerCase())) {
				document.querySelector(
					`#restaurant-container`
				).innerHTML += `<div class="restaurant-card"><a href="${element.url}" target= _blank> ${element.name}</a><p>${element.address}</p> <p>Rating: ${element.averageUserRating}</p><p>Average Cost For Two:  $ ${element.averageCostPerTwo}</p><a href="${element.menuURL}" target= _blank><button class="menu-button">View Menu</button></a></div>`;
			}
		});
		searchFunctions.noResultsFound();
	});
}
// Creating an object for functions
const restaurantFetch = {
	//Creating a fetch function with an optional search parameter. The includeSearch is a boolean true/false and if true then a search value needs to be included
	restaurantFetch: (includeSearch, search = '') => {
		if (includeSearch === false) {
			jsVar.fetchLink = `http://localhost:8088/restaurants`;
		} else {
			jsVar.fetchLink = `http://localhost:8088/restaurants?q=${search}`;
		}
		if (includeSearch === true) {
			restaurantSearch(search)
		} else {
			fetch(jsVar.fetchLink).then((restaurants) => restaurants.json()).then((parsedRestaurants) => {
				parsedRestaurants.forEach((element) => {
					document.querySelector(
						`#restaurant-container`
					).innerHTML += `<div class="restaurant-card"><a href="${element.url}" target= _blank> ${element.name}</a><p>${element.address}</p> <p>Rating: ${element.averageUserRating}</p><p>Average Cost For Two:  $ ${element.averageCostPerTwo}</p><a href="${element.menuURL}" target= _blank><button class="menu-button">View Menu</button></a></div>`;
				});
				searchFunctions.noResultsFound(); //Running function to check if results were displayed after search
			});
		}
	},
	submitRestaurant: (jsonFormData) => {
		fetch('http://localhost:8088/restaurants', {
			// Replace "url" with your API's URL
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(jsonFormData)
		});
	}
};
// Exporting the fetch function as an object
export default restaurantFetch;
