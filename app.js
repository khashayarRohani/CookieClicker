//global variable:
let AutoFarmer;
let CPS;
// global DOM nodes:
const userName = document.getElementById("username");
const cookieCounterDisplay = document.getElementById("cookieCounter");
const cookieFarmerDisplay = document.getElementById("farmerDisplay");
const LOneBtn = document.getElementById("LevelOnebtn");
const LTwoBtn = document.getElementById("LevelTwobtn");
const LThreeBtn = document.getElementById("LevelThreebtn");
const LFourBtn = document.getElementById("LevelFourbtn");
const LFiveBtn = document.getElementById("LevelFivebtn");
const TapBtn = document.getElementById("cookieBtn");
const storeBtn = document.getElementById("storeBtn");
const resetBtn = document.getElementById("resetBtn");
//functions
//update display
function updateCookieDisplay() {
  cookieCounterDisplay.textContent = AutoFarmer;
  localStorage.setItem("AutoFarmer", AutoFarmer);
}
function UserInfo() {
  // Check if username is available to show
  let username = localStorage.getItem("username");

  if (username) {
    // Username exists in localStorage
    userName.style.fontFamily = "monospace";
    userName.textContent = "Welcome " + localStorage.getItem("username");

    let storedAutoFarmer = localStorage.getItem("AutoFarmer");
    if (storedAutoFarmer !== null && !isNaN(parseInt(storedAutoFarmer))) {
      AutoFarmer = parseInt(storedAutoFarmer);
    } else {
      AutoFarmer = 0;
    }
    console.log("AutoFarmer: " + AutoFarmer);

    updateCookieDisplay(); // Update the cookie display with current AutoFarmer value
  } else {
    // Username doesn't exist in localStorage
    AutoFarmer = 0;
    updateCookieDisplay(); // Update the cookie display with initial AutoFarmer value

    username = prompt("Please enter your name");
    if (username) {
      localStorage.setItem("username", username);
      userName.textContent = "Welcome " + username;
    } else {
      // Handle case where user cancels prompt or doesn't enter a username
      userName.textContent = "Welcome Guest";
    }
  }
}

//Selected button eff:
function selectButton(button) {
  // Remove 'selected' class from all buttons
  LOneBtn.classList.remove("Selected");
  LTwoBtn.classList.remove("Selected");
  LThreeBtn.classList.remove("Selected");
  LFourBtn.classList.remove("Selected");
  LFiveBtn.classList.remove("Selected");
  // Add 'selected' class to the clicked button
  button.classList.add("Selected");
}

//Level functions

//L1
let isL1Active = false;

function LOneFarmer() {
  if (isL1Active == false) {
    const L1IntervalContainer = setInterval(() => {
      AutoFarmer++;
      localStorage.setItem("CPS", 1);

      console.log("one" + AutoFarmer);
      updateCookieDisplay();
      cookieFarmerDisplay.textContent =
        localStorage.getItem("CPS") + " Cookie" + "Per 2 Second";
      localStorage.setItem("AutoFarmer", AutoFarmer);
    }, 2000);
    localStorage.setItem("L1IntervalContainer", L1IntervalContainer);
    selectButton(LOneBtn);
    LOneBtn.disabled = true;
    isL1Active = true;
    clearInterval(localStorage.getItem("L4IntervalContainer"));
    clearInterval(localStorage.getItem("L3IntervalContainer"));
    clearInterval(localStorage.getItem("L2IntervalContainer"));
    clearInterval(localStorage.getItem("L5IntervalContainer"));
  } else {
    isL1Active = false;
  }
}

//L2
let isL2Active = false;
function LTwoFarmer() {
  if (isL2Active == false) {
    const L2IntervalContainer = setInterval(() => {
      AutoFarmer += 5;
      localStorage.setItem("CPS", 5);
      cookieFarmerDisplay.textContent =
        localStorage.getItem("CPS") + " Cookie" + "Per 2 seconds";
      console.log("two" + AutoFarmer);
      updateCookieDisplay();
      localStorage.setItem("AutoFarmer", AutoFarmer);
    }, 2000);
    localStorage.setItem("L2IntervalContainer", L2IntervalContainer);
    selectButton(LTwoBtn);
    LTwoBtn.disabled = true;
    isL2Active = true;
    clearInterval(localStorage.getItem("L4IntervalContainer"));
    clearInterval(localStorage.getItem("L3IntervalContainer"));
    clearInterval(localStorage.getItem("L5IntervalContainer"));
    clearInterval(localStorage.getItem("L1IntervalContainer"));
  } else {
    isL2Active = false;
  }
}

//L3
let isL3Active = false;
function LThreeFarmer() {
  if (isL3Active == false) {
    const L3IntervalContainer = setInterval(() => {
      AutoFarmer += 10;
      localStorage.setItem("CPS", 10);
      cookieFarmerDisplay.textContent =
        localStorage.getItem("CPS") + " Cookie" + "Per Second";
      console.log("Three" + AutoFarmer);
      updateCookieDisplay();
      localStorage.setItem("AutoFarmer", AutoFarmer);
    }, 1000);
    localStorage.setItem("L3IntervalContainer", L3IntervalContainer);
    LThreeBtn.disabled = true;
    selectButton(LThreeBtn);
    isL3Active = true;
    clearInterval(localStorage.getItem("L4IntervalContainer"));
    clearInterval(localStorage.getItem("L5IntervalContainer"));
    clearInterval(localStorage.getItem("L2IntervalContainer"));
    clearInterval(localStorage.getItem("L1IntervalContainer"));
  } else {
    isL3Active = false;
  }
}
//L4
let isL4Active = false;
function LFourFarmer() {
  if (isL4Active == false) {
    const L4IntervalContainer = setInterval(() => {
      AutoFarmer += 20;
      console.log("Four" + AutoFarmer);
      localStorage.setItem("CPS", 20);
      cookieFarmerDisplay.textContent =
        localStorage.getItem("CPS") + " Cookie" + "Per Second";
      updateCookieDisplay();
      localStorage.setItem("AutoFarmer", AutoFarmer);
    }, 1000);
    localStorage.setItem("L4IntervalContainer", L4IntervalContainer);
    selectButton(LFourBtn);
    LFourBtn.disabled = true;
    isL4Active = true;
    clearInterval(localStorage.getItem("L5IntervalContainer"));
    clearInterval(localStorage.getItem("L3IntervalContainer"));
    clearInterval(localStorage.getItem("L2IntervalContainer"));
    clearInterval(localStorage.getItem("L1IntervalContainer"));
  } else {
    isL4Active = false;
  }
}
//L5
let isL5Active = false;

function LFiveFarmer() {
  if (isL5Active == false) {
    const L5IntervalContainer = setInterval(() => {
      AutoFarmer += 30;
      console.log("Five" + AutoFarmer);
      localStorage.setItem("CPS", 30);
      updateCookieDisplay();
      cookieFarmerDisplay.textContent =
        localStorage.getItem("CPS") + " Cookie" + "Per Second";
      cookieCounterDisplay.textContent = localStorage.getItem("AutoFarmer");
      localStorage.setItem("AutoFarmer", AutoFarmer);
    }, 1000);
    localStorage.setItem("L5IntervalContainer", L5IntervalContainer);
    selectButton(LFiveBtn);
    LFiveBtn.disabled = true;
    isL5Active = true;
    clearInterval(localStorage.getItem("L4IntervalContainer"));
    clearInterval(localStorage.getItem("L3IntervalContainer"));
    clearInterval(localStorage.getItem("L2IntervalContainer"));
    clearInterval(localStorage.getItem("L1IntervalContainer"));
  } else {
    isL5Active = false;
  }
}

//adding event listeners
// Function to check and activate Level One
function checkLevelOneActivation() {
  if (AutoFarmer >= 10 && !isL1Active) {
    LOneBtn.disabled = false;
    LOneBtn.addEventListener("click", LOneFarmer);
  } else {
    LOneBtn.disabled = true;
  }
}

// Function to check and activate Level Two
function checkLevelTwoActivation() {
  if (AutoFarmer >= 50 && !isL2Active) {
    LTwoBtn.disabled = false;
    LTwoBtn.addEventListener("click", LTwoFarmer);
  } else {
    LTwoBtn.disabled = true;
  }
}

// Function to check and activate Level Three
function checkLevelThreeActivation() {
  if (AutoFarmer >= 100 && !isL3Active) {
    LThreeBtn.disabled = false;
    LThreeBtn.addEventListener("click", LThreeFarmer);
  } else {
    LThreeBtn.disabled = true;
  }
}

// Function to check and activate Level Four
function checkLevelFourActivation() {
  if (AutoFarmer >= 200 && !isL4Active) {
    LFourBtn.disabled = false;
    LFourBtn.addEventListener("click", LFourFarmer);
  } else {
    LFourBtn.disabled = true;
  }
}

// Function to check and activate Level Five
function checkLevelFiveActivation() {
  if (AutoFarmer >= 500 && !isL5Active) {
    LFiveBtn.disabled = false;
    LFiveBtn.addEventListener("click", LFiveFarmer);
  } else {
    LFiveBtn.disabled = true;
  }
}

// Call these functions during initialization and after every increment
checkLevelOneActivation();
checkLevelTwoActivation();
checkLevelThreeActivation();
checkLevelFourActivation();
checkLevelFiveActivation();

// Tap button event listener
TapBtn.addEventListener("click", () => {
  AutoFarmer++;
  localStorage.setItem("AutoFarmer", AutoFarmer);
  updateCookieDisplay();
  checkLevelOneActivation();
  checkLevelTwoActivation();
  checkLevelThreeActivation();
  checkLevelFourActivation();
  checkLevelFiveActivation();
});

//call for username
UserInfo();
// store
const storesection = document.querySelector(".hidden"); // Note the dot for class selector
function openStore() {
  storesection.style.display = "block";
}

// Event listener for store button click
storeBtn.addEventListener("click", openStore);

//store js
// Get all picture options
const SelectedImg = document.getElementById("selectedImg1");
const Selectedimg = document.getElementById("selectedImg2");
const selectedimg = document.getElementById("selectedImg3");
SelectedImg.addEventListener("click", function () {
  TapBtn.style.backgroundImage = `url('${SelectedImg.src}')`;
  storesection.style.display = "none";
  AutoFarmer -= 10;
  updateCookieDisplay();
});
Selectedimg.addEventListener("click", function () {
  TapBtn.style.backgroundImage = `url('${Selectedimg.src}')`;
  storesection.style.display = "none";
  AutoFarmer -= 20;
  updateCookieDisplay();
});
selectedimg.addEventListener("click", function () {
  TapBtn.style.backgroundImage = `url('${selectedimg.src}')`;
  storesection.style.display = "none";
});
const txtarea = document.querySelector("textarea");
txtarea.addEventListener("click", () => {
  txtarea.style.display = "none";
});
const gBtn = document.getElementById("guidBtn"); //guide btn
gBtn.addEventListener("click", () => {
  txtarea.style.display = "block";
});
resetBtn.addEventListener("click", () => {
  LOneBtn.classList.remove("Selected");
  LTwoBtn.classList.remove("Selected");
  LThreeBtn.classList.remove("Selected");
  LFourBtn.classList.remove("Selected");
  LFiveBtn.classList.remove("Selected");
  clearInterval(localStorage.getItem("L1IntervalContainer"));
  clearInterval(localStorage.getItem("L2IntervalContainer"));
  clearInterval(localStorage.getItem("L3IntervalContainer"));
  clearInterval(localStorage.getItem("L4IntervalContainer"));
  clearInterval(localStorage.getItem("L5IntervalContainer"));
  localStorage.clear();
  AutoFarmer = 0;
  UserInfo();
  updateCookieDisplay();
});
