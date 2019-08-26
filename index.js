/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
    const timei = parseInt(time)

    console.log(timei)

    if (timei < 12)
        return "Good Morning"
    if (timei > 17)
        return "Good Evening"
    return "Good Afternoon"

}


/* Write your implementation of displayMessage() */
function displayMessage(string) {
    document.getElementById("greeting").innerText = string;
}