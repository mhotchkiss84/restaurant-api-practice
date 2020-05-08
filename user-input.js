// Importing variables
import jsVar from "./variables.js"
// Creating a function to get the user input values
const userInput = {
    getUserInput: () => {
        jsVar.userInput.url = document.querySelector(`#restaurant-url`).value
        jsVar.userInput.menuURL = document.querySelector(`#menu-url`).value
        jsVar.userInput.name = document.querySelector(`#name-txt`).value
        jsVar.userInput.averageUserRating = document.querySelector(`#user-rating`).value
        jsVar.userInput.averageCostPerTwo = document.querySelector(`#cost-per-two`).value
        jsVar.userInput.address = document.querySelector(`#address`).value
    }
}
// Exporting the functions
export default userInput