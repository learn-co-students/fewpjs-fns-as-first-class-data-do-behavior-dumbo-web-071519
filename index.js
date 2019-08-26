/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(t){
  // The greet function should take one argument, a String which specifies the 24 - hour time in the format HH: MM.
  let hours = parseInt(t, 10);
  if (hours > 0 && hours < 12) {
      return "Good Morning";
   } else if (hours > 12 && hours < 17) {
      return "Good Afternoon";
   } else { 
      return "Good Evening";
   }

   
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let greeting = document.querySelector("#greeting");
  greeting.innerText = message;
}