const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const pookieImage = document.getElementById('pookie-image');
const message = document.getElementById('message');
const buttonsContainer = document.querySelector(".buttons");

const noButtonMessages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very very very sad..."
];

let noMessageIndex = 0; // Keep track of which message to display
let noButtonClicks = 0;

noButton.addEventListener('click', () => {
    noButtonClicks++;

    // Display a message
    message.textContent = noButtonMessages[noMessageIndex];
    message.style.opacity = 1; // Make the message visible
    noMessageIndex = (noMessageIndex + 1) % noButtonMessages.length; // Cycle through messages


    // Change yes button size
    let fontSize =  parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (fontSize * 1.5) + "px";

    if (noButtonClicks < noButtonMessages.length) {
       moveNoButton();
    } else {
        //If no button has been clicked more than messages, make the no button disappear
        noButton.style.display = "none";
        message.textContent = "I will be very very very sad...";
    }

});


function moveNoButton() {
    const containerRect = buttonsContainer.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    //Calculate maximum position
    const maxLeft = containerRect.width - noButtonRect.width;
    const maxTop = containerRect.height - noButtonRect.height;
    const newLeft = Math.min(Math.floor(Math.random() * containerRect.width),maxLeft) ;
    const newTop = Math.min(Math.floor(Math.random() * containerRect.height), maxTop);

    noButton.style.left = newLeft + 'px';
    noButton.style.top = newTop + 'px';
}



yesButton.addEventListener('click', () => {
    // Change image and display a message
    pookieImage.src =
      "https://media.tenor.com/-ywpcfbOQLsAAAAj/bugcact-capoo.gif"; // Replace with your happy image
    message.textContent = "Knew you would say yes! My Disney Princess!";
    message.style.opacity = 1;
    noButton.style.display = 'none'; // Hide the "No" button
    yesButton.style.display = "none";
});

//Optional function to hide messages if a timeout is wanted
function hideMessage() {
    message.style.opacity = 0;
}