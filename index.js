/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */




function greet(str){
      let num = parseInt(str,10)
    
  if (num > 0 && num < 12) {
    return "Good Morning"
  }
  else if(num >  12 && num < 17 ){
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(strg){
document.querySelector("#greeting").innerText = strg;
  

}