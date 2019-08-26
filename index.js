/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */




function greet (str){
      let num = Number((str).split(":").join(""));
      console.log(num);
  if (num > 0 && num <1200) {
    return "Good Morning"; 
  }
  else if(num >1200 && num < 1700 ){
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}



/* Write your implementation of displayMessage() */

function dispalyMessage(str){
  document.getElementById("greeting").innerText = str
  

}