/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let strarr = timeString.split(":");
  let time = parseInt(strarr[0]);
  if(time < 12){
    return "Good Morning";
  }
  else if(time >= 12 && time <= 17){
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(textString="TEST"){
  document.querySelector("#greeting").innerText = textString
}
