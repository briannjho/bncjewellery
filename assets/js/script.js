var signInButton = document.querySelector('.signInButton');
var signInModalBackground = document.querySelector('.signInModalBackground');
var signInContainer = document.querySelector('.signInContainer');

signInButton.addEventListener('click', function(){
    signInModalBackground.classList.add("signInModalActive");
    signInContainer.classList.add("signInModalActive");
});