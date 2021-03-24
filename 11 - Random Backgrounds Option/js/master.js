// Get color options from local storage
let mainColor = localStorage.getItem("color-option");

// Use stored color in local storage
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
}

// Add class active to chossen color from local storage
document.querySelectorAll(".colors-list li").forEach((element) => {
  if (element.dataset.color === mainColor) {
    element.classList.add("active");
  }
});

// Toggle spin class on icon
document.querySelector(".toggel-setting .fa-gear").onclick = function () {
  // Toggle fa-spin class on self
  this.classList.toggle("fa-spin");

  // Toggle open class on maim settings box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop on all list items
colorsLi.forEach((li) => {
  // Click on evry list item
  li.addEventListener("click", (e) => {
    // Set color on root
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

    // Set color in local storage
    mainColor = localStorage.setItem("color-option", e.target.dataset.color);

    // Remove class active from all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add class active to target element
    e.target.classList.add("active");
  });
});

// Switch random backgrounds options
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop on all spans
randomBackEl.forEach((span) => {
  // Click on evry span
  span.addEventListener("click", (e) => {
    // Remove class active from all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add class active to target element
    e.target.classList.add("active");
  });
});

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
