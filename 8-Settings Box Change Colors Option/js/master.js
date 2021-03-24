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
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
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
