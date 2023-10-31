//Prompt the user to enter a message and store the input in the userInput variable
const userInput = prompt("Enter a message:");
const messageContainer = document.getElementById("messageContainer");
//Check if userInput is not empty
if (userInput) {
  //If the user entered a message, display an alert
  messageContainer.innerHTML = "You entered:" + userInput;
} else {
  //If userInput is empty display na different alert
  messageContainer.innerHTML = "Invalid message";
}
