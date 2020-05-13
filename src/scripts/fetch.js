// Importing the variables
import jsVar from './variables.js';
// Importing the search functions
import searchFunctions from './search-functions.js';
// Creating a function to build and return a HTML string.
function buildHTMLString(element) {
	let htmlString = `<div class="restaurant-card" id="card-id-${element.id}"><a href="${element.url}" target= _blank> ${element.name}</a><p>${element.address}</p> <p>Rating: ${element.averageUserRating}</p><p>Average Cost For Two:  $ ${element.averageCostPerTwo}</p><a href="${element.menuURL}" target= _blank><button class="menu-button">View Menu</button></a><button id="del-btn-${element.id}">Delete</button><button id="edit-btn-${element.id}">Edit</button></div>`;
	return htmlString;
}
// Creating a function for searching the restaurants by title
function restaurantSearch(searchTerm) {
	fetch(jsVar.fetchLink).then((restaurants) => restaurants.json()).then((parsedRestaurants) => {
		parsedRestaurants.forEach((element) => {
			if (element.name.toLowerCase().includes(searchTerm.toLowerCase())) {
				document.querySelector(`#restaurant-container`).innerHTML += buildHTMLString(element);
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
			restaurantSearch(search);
		} else {
			fetch(jsVar.fetchLink).then((restaurants) => restaurants.json()).then((parsedRestaurants) => {
				parsedRestaurants.forEach((element) => {
					document.querySelector(`#restaurant-container`).innerHTML += buildHTMLString(element);
				});
				searchFunctions.noResultsFound(); //Running function to check if results were displayed after search
			});
		}
	},
	// Creating a function for submitting a new entry to the JSON server
	submitRestaurant: (jsonFormData) => {
		fetch('http://localhost:8088/restaurants', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(jsonFormData)
		}).then(() => {
			searchFunctions.refreshPage();
			// restaurantFetch.restaurantFetch(false);
		});
	},
	// Creating a function for deleting entries from JSON.
	deleteEntry: (entryID) => {
		fetch(`http://localhost:8088/restaurants/${entryID}`, {
			method: 'DELETE'
		}).then(() => {
			searchFunctions.refreshPage();
		});
	},
	// Creating a functiopn for fetching single entries
	singleEntry: (entryID) => {
		return fetch(`http://localhost:8088/restaurants/${entryID}`)
			.then((singleCardObject) => singleCardObject.json())
			.then((singleCardObject) => {
				return singleCardObject;
			});
	}
};
// Exporting the fetch function as an object
export default restaurantFetch;
