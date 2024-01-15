// Select the .main-container element
const mainContainer = document.querySelector('.main-container');

// Get the computed style of the .main-container element
const mainContainerStyle = window.getComputedStyle(mainContainer);

// Get the background image property
const backgroundImage = mainContainerStyle.backgroundImage;

// Log the background image to the console
console.log('Background Image:', backgroundImage);
