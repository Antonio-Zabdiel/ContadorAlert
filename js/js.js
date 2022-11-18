let timer, currSeconds = 0;
  
function resetTimer() {

    /* Hide the timer text */
    document.querySelector(".timertext")
            .style.display = 'none';

    /* Clear the previous interval */
    clearInterval(timer);

    /* Reset the seconds of the timer */
    currSeconds = 0;

    /* Set a new interval */
    timer = 
        setInterval(startIdleTimer, 1000);
}


// Define the events that
// would reset the timer
window.onload = resetTimer;
//window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
//window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;


function startIdleTimer() {
      
    /* Increment the
        timer seconds */
    currSeconds++;

    /* Set the timer text
        to the new value */
    document.querySelector(".secs")
        .textContent = currSeconds;

    if( currSeconds == 5){
        var texto = "nesesitas algo pibe";
        
        currSeconds = 0;
        document.getElementById('message').innerHTML = texto;
    }else{}

    /* Display the timer text */
    document.querySelector(".timertext")
        .style.display = 'block';
}











function pruebsa(){
    var ind = document.getElementById('er').value;
    console.log(ind);
    document.getElementById('message').innerHTML = ind;

}