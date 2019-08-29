/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(timeStringArg){
  let hour = parseInt(timeStringArg, 10)
  if (hour < 12){
    return "Good Morning"
  }
  else if ( hour > 17){
    return "Good Evening"

  }
  else  {
    return "Good Afternoon"

  }
}

function displayMessage(str){
  const h1 = document.querySelector('#greeting')
 
  h1.innerText = str;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
