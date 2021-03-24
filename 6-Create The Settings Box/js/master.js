// Select landing page elelment
let landingPage = document.querySelector(".landing-page");

// Get array of imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  // Get random number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  // Change background image url
  landingPage.style.backgroundImage = `url(imgs/${imgsArray[randomNumber]})`;
}, 10000);
