// Importing fetch functions
import restraurantFetch from './fetch.js';
import restaurantFetch from './fetch.js';
// Creating an object for storing functions for export
const domPrinter = {
	// Creating a function for when the edit button is clicked
	editButton: () => {
		const targetID = event.target.id.split('-')[2];
		let cardHTML = document.querySelector(`#card-id-${targetID}`);
		restaurantFetch.singleEntry(targetID).then((singleCardObject) => {
			cardHTML.innerHTML = `<form id="edit-form">
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
            <button id="save-btn">Save</button>`;
		});
        // To DO: save button stuff
	}
};
export default domPrinter;
