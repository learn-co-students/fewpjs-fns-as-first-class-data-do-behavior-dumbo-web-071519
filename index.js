/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(str){
  let starting = Number(str.split(":")[0])
  if (starting < 12) {
    return("Good Morning")
  }
  else if (starting > 12 && starting< 17){
    return("Good Afternoon")
  }
  else {
    return("Good Evening")
  }
}

function displayMessage(greeting) {
  document.querySelector('#greeting').innerText = greeting 
}