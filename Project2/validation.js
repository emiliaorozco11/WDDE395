
"use strict";

// Find the registration form in the HTML document.
const form = document.querySelector("#registrationForm");

// Find the area where validation errors will appear.
const errorMessages = document.querySelector("#errorMessages");

// Create a function to check the form when Submit is clicked.
function submit(event) {
    // Prevent the form from submitting before validation.
    event.preventDefault();

    // Create an array to collect all validation errors.
    const errors = [];

    // Get the first name and remove extra spaces.
    const firstName = document.querySelector("#firstName").value.trim();

    // Get the last name and remove extra spaces.
    const lastName = document.querySelector("#lastName").value.trim();

    // Check that the first name contains only letters.
    if (!/^[A-Za-z]+$/.test(firstName)) {
        // Add an error if the first name is empty or invalid.
        errors.push("First name is required and must contain letters only.");
    }

    // Check that the last name contains only letters.
    if (!/^[A-Za-z]+$/.test(lastName)) {
        // Add an error if the last name is empty or invalid.
        errors.push("Last name is required and must contain letters only.");
    }

    // Get the street address and remove extra spaces.
    const address = document.querySelector("#address").value.trim();

    // Get the city and remove extra spaces.
    const city = document.querySelector("#city").value.trim();

    // Get the selected state.
    const state = document.querySelector("#state").value;

    // Get the ZIP Code and remove extra spaces.
    const zipCode = document.querySelector("#zipCode").value.trim();

    // Check that the street address contains letters and numbers.
    if (!/^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9 ]+$/.test(address)) {
        // Add an error if the address is empty or invalid.
        errors.push("Enter a valid street address using letters and numbers.");
    }

    // Check that the city contains letters and spaces only.
    if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(city)) {
        // Add an error if the city is empty or invalid.
        errors.push("City is required and must contain letters only.");
    }

    // Check whether the user selected a state.
    if (state === "") {
        // Add an error if no state was selected.
        errors.push("Please select a state.");
    }

    // Check that the ZIP Code contains exactly 5 digits.
    if (!/^[0-9]{5}$/.test(zipCode)) {
        // Add an error if the ZIP Code is empty or invalid.
        errors.push("ZIP Code must contain exactly 5 numbers.");
    }

    // Get the area code and remove extra spaces.
    const areaCode = document.querySelector("#areaCode").value.trim();

    // Get the phone number and remove extra spaces.
    const phoneNumber = document.querySelector("#phoneNumber").value.trim();

    // Check that the area code contains exactly 3 digits.
    if (!/^[0-9]{3}$/.test(areaCode)) {
        // Add an error if the area code is invalid.
        errors.push("Area code must contain exactly 3 numbers.");
    }

    // Check that the phone number contains exactly 7 digits.
    if (!/^[0-9]{7}$/.test(phoneNumber)) {
        // Add an error if the phone number is invalid.
        errors.push("Phone number must contain exactly 7 numbers.");
    }

    // Get the email address and remove extra spaces.
    const email = document.querySelector("#email").value.trim();

    // Get the confirmation email.
    const confirmEmail = document.querySelector("#confirmEmail").value.trim();

    // Create a pattern to check the email format.
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

    // Separate the email into the part before and after @.
    const emailParts = email.split("@");

    // Check the email format and character limits.
    if (!emailPattern.test(email) ||
        emailParts[0].length > 64 ||
        (emailParts[1] && emailParts[1].length > 252) ||
        emailParts[0].includes("..")) {

        // Add an error if the email is invalid.
        errors.push("Enter a valid email address with the correct character limits.");
    }

    // Check that the confirmation email is not blank.
    if (confirmEmail === "") {

        // Add an error if the field is empty.
        errors.push("Please confirm your email address.");

    // Check whether both email addresses match exactly.
    } else if (email !== confirmEmail) {

        // Add an error if the emails do not match.
        errors.push("Email addresses must match exactly.");
    }

    // Find the meal preference that the user selected.
    const mealPreference = document.querySelector(
        'input[name="mealPreference"]:checked'
    );

    // Check whether the user selected a meal preference.
    if (mealPreference === null) {
        // Add an error if no meal preference was selected.
        errors.push("Please select a meal preference.");
    }

    // Find all contact methods that the user selected.
    const contactMethods = document.querySelectorAll(
        'input[name="contactMethod"]:checked'
    );

    // Check whether at least 2 contact methods were selected.
    if (contactMethods.length < 2) {
        // Add an error if fewer than 2 methods were selected.
        errors.push("Please select at least 2 contact methods.");
    }

    // Get the comments entered by the user.
    const comments = document.querySelector("#comments").value;

    // Check that comments do not exceed 250 characters.
    if (comments.length > 250) {
        // Add an error if the comments are too long.
        errors.push("Comments cannot exceed 250 characters.");
    }

    // Clear any previous validation messages.
    errorMessages.replaceChildren();

    // Display each error in the messages area.
    errors.forEach(function(message) {
        // Create a paragraph for the error message.
        const paragraph = document.createElement("p");

        // Add the error message as plain text.
        paragraph.textContent = message;

        // Add the paragraph to the webpage.
        errorMessages.appendChild(paragraph);
    });

   
   
    // Check whether the form has any validation errors.
    if (errors.length === 0) {

        // Send the form only when all information is valid.
        form.submit();

    } else {

        // Display validation errors in red.
        errorMessages.style.color = "#b91c1c";
    }

} // End of submit function.

// Clear validation messages when Reset is clicked.
function reset() {
    // Remove all displayed messages.
    errorMessages.replaceChildren();

    // Restore the default error message color.
    errorMessages.style.color = "#b91c1c";
}
 

// Run the submit function when the form is submitted.
form.addEventListener("submit", submit);

// Run the reset function when the form is reset.
form.addEventListener("reset", reset);

 // Find the First Name and Last Name input fields.
 const firstNameInput = document.querySelector("#firstName");
 const lastNameInput = document.querySelector("#lastName");

 // Display default text inside both name fields.
 firstNameInput.value = "Enter first name";
 lastNameInput.value = "Enter last name";

 // Remove the placeholder text to avoid showing it again.
 firstNameInput.placeholder = "";
 lastNameInput.placeholder = "";

 
 // Clear the default first name when the field is selected.
 firstNameInput.addEventListener("focus", function() {
     if (firstNameInput.value === "Enter first name") {
         firstNameInput.value = "";
     }
 });

 // Clear the default last name when the field is selected.
 lastNameInput.addEventListener("focus", function() {
     if (lastNameInput.value === "Enter last name") {
         lastNameInput.value = "";
     }
 });


