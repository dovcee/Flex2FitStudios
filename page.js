/*****************************PAGE DEFAULT JAVA*************************/

//Toggle Menu for navbar
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});

//Validate email subscribtion on footer
function validateEmailSub(){
    var subEmail = document.subscription.email.value;
    // Validate member email address
    if (subEmail == "") {
        alert("Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(subEmail) === false) {
            alert("Please enter a valid email address. You may be missing a symbol.");
        } else {
            alert("You have been subscribed. Check spam for flex2fit@hotmail.com");
        }
    }
}