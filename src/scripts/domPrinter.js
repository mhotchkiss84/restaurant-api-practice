// Importing fetch functions
import restraurantFetch from './fetch.js';
import restaurantFetch from './fetch.js';
// Creating an object for storing functions for export
function editForm (singleCardObject) {
    let htmlString = `<form id="edit-form">
            <label for="restaurant-name">Name</label>
            <input type="text" id="edit-name-txt" value="${singleCardObject.name}">
            <label for="restaurant-url">Website</label>
            <input type="text" id="edit-restaurant-url" value="${singleCardObject.url}">
            <label for="menu-url">Menu URL</label>
            <input type="text" id="edit-menu-url" value="${singleCardObject.menuURL}">
            <label for="address">Address</label>
            <input type="text" id="edit-address" value="${singleCardObject.address}">
            <label for="user-rating">Average User Rating</label>
            <input type="text" id="edit-user-rating" value="${singleCardObject.averageUserRating}">
            <label for="cost-per-two">Average Cost Per Two</label>
            <input type="text" id="edit-cost-per-two" value="${singleCardObject.averageCostPerTwo}">
            </form>
            <button id="save-btn-${singleCardObject.id}">Save</button>`;
            return htmlString
}
const domPrinter = {
	// Creating a function for when the edit button is clicked
	editButton: () => {
		const targetID = event.target.id.split('-')[2];
		let cardHTML = document.querySelector(`#card-id-${targetID}`);
		restaurantFetch.singleEntry(targetID).then((singleCardObject) => {
			cardHTML.innerHTML = editForm(singleCardObject)
		});
        // To DO: save button stuff
    },
    saveButton: () => {
        const targetID = event.target.id.split(`-`)[2]
        // console.log(targetID)
        // Set variable values with input values
        const restaurantName = document.querySelector(`#edit-name-txt`).value 
        const restaurantURL = document.querySelector(`#edit-restaurant-url`).value
        const restaurantMenuURL = document.querySelector(`#edit-menu-url`).value
        const restaurantAddress = document.querySelector(`#edit-address`).value
        const restaurantRating = document.querySelector(`#edit-user-rating`).value
        const restaurantCost = document.querySelector(`#edit-cost-per-two`).value
        const restaurantID = targetID
        const editedRestaurant = {
            name: restaurantName,
            url: restaurantURL,
            menuURL: restaurantMenuURL,
            averageUserRating: restaurantRating,
            averageCostPerTwo: restaurantCost,
            address: restaurantAddress,
            id: restaurantID
        }
        restaurantFetch.editEntry(editedRestaurant)
}
};
// Exporting the domPrinter functions
export default domPrinter;
