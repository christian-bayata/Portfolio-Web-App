// The modal 
var modal = document.getElementById("my-modal");
//The button that opens up the modal once it is clicked
var btn =  document.getElementById("login-button");
//The span element that closes the model
var cls = document.getElementsByClassName("close-modal")[0];

//This happens when the user clicks the button
//The modal is dsiplayed on the screen
btn.onclick = function() {
    modal.style.display = "flex";
}
//This happens when the user clicks the close (x)
//The modal is taken off the screen
cls.onclick = function() {
    modal.style.display = "none";
}

//If the client clicks anywhere outside the modal box, then it will close
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
    }