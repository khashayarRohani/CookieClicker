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
    localStorage.removeItem("L2IntervalContainer");
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
    localStorage.removeItem("L3IntervalContainer");
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
    localStorage.removeItem("L4IntervalContainer");
  } else {
    isL5Active = false;
  }
}
function checkLevelOneActivation() {
  if (AutoFarmer >= 10) {
    LOneBtn.disabled = false;
    LOneBtn.addEventListener("click", LOneFarmer);
  } else {
    LOneBtn.disabled = true;
  }
}
checkLevelOneActivation();

//adding event listeners
//L1
//LOneBtn.addEventListener("click", LOneFarmer);
//L2
LTwoBtn.addEventListener("click", LTwoFarmer);
//L3
LThreeBtn.addEventListener("click", LThreeFarmer);
//L4
LFourBtn.addEventListener("click", LFourFarmer);
//L5
LFiveBtn.addEventListener("click", LFiveFarmer);
//Tap
// Tap button event listener
TapBtn.addEventListener("click", () => {
  AutoFarmer++; // Increment AutoFarmer by 1
  localStorage.setItem("AutoFarmer", AutoFarmer); // Update AutoFarmer in localStorage
  updateCookieDisplay();
  checkLevelOneActivation();
});
//call for username
UserInfo();
