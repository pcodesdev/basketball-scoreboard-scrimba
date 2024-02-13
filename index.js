let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
// home functions
function home1Add() {
    homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 1
    updateScoreColors();
}

function home2Add() {
    homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 2;
    updateScoreColors();
}

function home3Add() {
    homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 3;
    updateScoreColors()
}

// guest functions

function guest1Add() {
    guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + 1;
    updateScoreColors();
}

function guest2Add() {
    guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + 2;
    updateScoreColors();
}

function guest3Add() {
    guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + 3;
    updateScoreColors();
}

// game reset to default settings
function gameReset() { 
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}


// change score color

function updateScoreColors() {
  const homeScore = parseInt(homeScoreEl.textContent);
  const guestScore = parseInt(guestScoreEl.textContent);

  if (homeScore > guestScore) {
    homeScoreEl.style.color = "green"; // Or any desired color for the leading team
    guestScoreEl.style.color = "white"; // Assuming default color for the non-leading team
  } else if (guestScore > homeScore) {
    guestScoreEl.style.color = "green";
    homeScoreEl.style.color = "white";
  } else {
    // If scores are tied, set both to default color
    homeScoreEl.style.color = "white";
    guestScoreEl.style.color = "white";
  }
}

