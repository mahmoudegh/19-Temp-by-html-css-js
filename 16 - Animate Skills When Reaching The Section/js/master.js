// Get Fav background from localStorage
let favBackground = localStorage.getItem("fav-background");

// Use fav background
if (favBackground !== null) {
  document.querySelector(".landing-page").style.backgroundImage = favBackground;
}

// Get color options from local storage
let mainColor = localStorage.getItem("color-option");

// Use stored color in local storage
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
}

// Add class active to chossen color from local storage
document.querySelectorAll(".colors-list li").forEach((element) => {
  element.classList.remove("active");

  if (element.dataset.color === mainColor) {
    element.classList.add("active");
  }
});

// Random background option
let backgroundOption = true;

// Variable to control the background interval
let backgroundInterval;

// Check if there is localStorage background item
let backgroundLocalItem = localStorage.getItem("background-option");

if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  // Remove active class from all spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
    if (backgroundLocalItem === "true") {
      document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
      document.querySelector(".random-backgrounds .no").classList.add("active");
    }
  });
}

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

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
  });
});

// Select landing page elelment
let landingPage = document.querySelector(".landing-page");

// Get array of imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Function to randomize imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get random number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // Change background image url
      landingPage.style.backgroundImage = `url(imgs/${imgsArray[randomNumber]})`;

      // Save fav background in localStorage
      localStorage.setItem("fav-background", `url(imgs/${imgsArray[randomNumber]})`);
    }, 10000);
  }
}

randomizeImgs();

// Select skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills off set top (Height above skills section)
  let skillsOffsetTop = ourSkills.offsetTop;
  // console.log(skillsOffsetTop);

  // Skills outer height (Height of skills section)
  let skillsOuterHeight = ourSkills.offsetHeight;
  // console.log(skillsOuterHeight);

  // Window height
  let windowHeight = this.innerHeight;
  // console.log(windowHeight);

  // Window scroll top
  let windowScrollTop = this.pageYOffset;
  // console.log(windowScrollTop);

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(".skills .skill-box .skill-progress span");
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
