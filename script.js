// Delcaring the fetch variable
let fetchLink = ``;

// Declaring a variable for the search text
let searchText = ``;

//Creating a fetch function with an optional search parameter. The includeSearch is a boolean true/false and if true then a search value needs to be included
function restaurantFetch(includeSearch, search = 'none') {
	if (includeSearch === false) {
		fetchLink = `http://localhost:8088/restaurants`;
	} else {
		fetchLink = `http://localhost:8088/restaurants?q=${search}`;
	}
	fetch(fetchLink).then((restaurants) => restaurants.json()).then((parsedRestaurants) => {
		parsedRestaurants.forEach((element) => {
			document.querySelector(
				`#restaurant-container`
			).innerHTML += `<div class="restaurant-card"><a href="${element.restaurant.url}" target= _blank> ${element
				.restaurant.name}</a>
        <p>${element.restaurant.location.address}</p> <p>Rating: ${element.restaurant.user_rating
				.aggregate_rating}</p><p>Average Cost For Two: ${element.restaurant
				.average_cost_for_two}</p><a href="${element.restaurant
				.menu_url}" target= _blank><button id="card-${counter}" class="menu-button">View Menu</button></a></div>`;
			counter++;
		});
		noResultsFound();
	});
}

// Loading the function showing all restaurants when the user loads the page
restaurantFetch(false);

// Creating a function to clear the screen when the search button is pressed so only the results will be shown
function clearScreen() {
	document.querySelector(`#restaurant-container`).innerHTML = ``;
}

// Creating a function to clear the text field after search
function clearSearchText() {
	document.querySelector(`#search-txt`).value = ``;
}

// Creating a function to grab the search value from the input box
function getSearchText() {
	searchText = document.querySelector(`#search-txt`).value;
}

// Creating a function for all search components
function searchFunction() {
	clearScreen();
	getSearchText();
	if (searchText != ``) {
		restaurantFetch(true, searchText);
	} else {
		restaurantFetch(false);
	}
	clearSearchText();
}

// Creating a function in case there are no search results found
function noResultsFound() {
	if (document.querySelector(`#restaurant-container`).innerHTML === '') {
		document.querySelector(`#restaurant-container`).innerHTML = `<h3>No results found</h3>`;
	}
}

// Adding event listener for when the search button is pressed
document.querySelector(`#search-button`).addEventListener('click', (searchEvent) => {
	searchFunction();
});