//Prompt the user to enter a message and store the input in the userInput variable
const userInput = prompt("Enter a message:");
//Check if userInput is not empty
if (userInput) {
  //If the user entered a message, display an alert
  alert("You entered:" + userInput);
} else {
  //If userInput is empty display na different alert
  alert("No message provided");
}
