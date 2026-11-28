/*
		Your Name: <Emilia Orozco>
		Last Modified Date: <11/24/2026>
		File: event_registration.js
		File Description: <This JavaScript file manages the
    countdown timer, calculates ticket prices, validates
    user information, and displays purchase confirmations
    for the DMWT Alumni Event Registration webpage.>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

// Set the countdown to 10 minutes from the current time.
	var endTime = new Date().getTime() + 10 * 60 * 1000;
// Start a timer that updates every second. 
	var countdownTimer = setInterval(function() {
// Get the current time.
	var currentTime = new Date().getTime();
// Calculate how many seconds are left.
	var timeLeft = Math.max(0, Math.ceil((endTime - currentTime) / 1000));
// Calculate the remaining minutes.
	var minutes = Math.floor(timeLeft / 60);
// Calculate the remaining seconds.
	var seconds = timeLeft % 60;
// Add a zero before seconds less than 10.
	if (seconds < 10) {
   seconds = "0" + seconds;
 }

// Display the remaining time on the webpage.
     document.getElementById("timer").textContent =
         minutes + ":" + seconds;
// Check whether the countdown has reached zero.
     if (timeLeft === 0) {
// Stop the countdown timer.
         clearInterval(countdownTimer);
// Tell the user that their time has expired.
         alert("Your time has expired. Please try again.");
// Reload the current webpage.
         location.href = location.href;
}

 }, 1000);

// Calculate the ticket cost and check the number entered.
 function calculateTotal() {
// Get the ticket input field.
     var ticketField = document.getElementById("numTickets");
// Get the number of tickets entered.
     var ticketNumber = ticketField.value.trim();
// Find the error message and contact information sections.
     var ticketError = document.getElementById("msgTickets");
     var contactInfo = document.getElementById("contactInformation");
// Check for an empty, nonnumeric, or invalid ticket quantity.
     if (ticketNumber === "" || isNaN(ticketNumber) ||
         !Number.isInteger(Number(ticketNumber)) ||
         Number(ticketNumber) < minTickets ||
         Number(ticketNumber) > maxTickets) {
// Display an error next to the ticket input.
         ticketError.textContent =
             "You can only buy between 1 and 3 tickets.";
// Change the field background to yellow.
         ticketField.style.backgroundColor = "yellow";
// Reset the total cost.
         document.getElementById("totalCost").value = "$0.00";
// Hide the contact information section.
         contactInfo.style.display = "none";
     } else {
// Convert the ticket quantity into a number.
         var tickets = Number(ticketNumber);
// Calculate the total including the processing fee.
         var total = tickets * (costPerTicket + ticketSurcharge);
// Display the total with a dollar sign and two decimals.
         document.getElementById("totalCost").value =
             "$" + total.toFixed(2);
// Remove the error message.
         ticketError.textContent = "";
// Restore the normal field background.
         ticketField.style.backgroundColor = "#efefef";
// Show the contact information section.
         contactInfo.style.display = "block";
     }
 }


// Check the name and email before completing a ticket purchase.
 function completePurchase() {
// Find the name and email input fields.
     var nameField = document.getElementById("name");
     var emailField = document.getElementById("email");
// Get the information entered by the user.
     var name = nameField.value.trim();
     var email = emailField.value.trim();
// Find the error message areas.
     var nameError = document.getElementById("msgname");
     var emailError = document.getElementById("msgemail");
// Track whether all information is valid.
     var isValid = true;
// Check whether the name field is empty.
     if (name === "") {
// Display a name error and highlight the field.
         nameError.textContent = "Please enter your name.";
         nameField.style.backgroundColor = "yellow";
         isValid = false;
     } else {
// Clear the error and restore the background.
         nameError.textContent = "";
         nameField.style.backgroundColor = "#efefef";
     }

// Check whether the email is empty or incorrectly formatted.
     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (email === "" || !emailPattern.test(email)) {
// Display an email error and highlight the field.
         emailError.textContent = "Please enter a valid email address.";
         emailField.style.backgroundColor = "yellow";
         isValid = false;
     } else {
// Clear the error and restore the background.
         emailError.textContent = "";
         emailField.style.backgroundColor = "#efefef";
     }

// Complete the purchase only when all entries are valid.
     if (isValid) {
// Stop the countdown timer.
         clearInterval(countdownTimer);
// Get the calculated ticket total.
         var total = document.getElementById("totalCost").value;
// Thank the user and display the purchase amount.
         alert("Thank you for your purchase, " + name +
               "! Your total is " + total + ".");
     }
 }

