// Code By Clint Justine Lorenzo
// • Container
const wallDsgn = document.getElementById("wallDsgn");
const roofDsgn = document.getElementById("roofDsgn");
const windowDsgn = document.getElementById("windowDsgn");
const doorDsgn = document.getElementById("doorDsgn");
const bellDsgn = document.getElementById("bellDsgn");
const GrassDsgn = document.getElementById("GrassDsgn");

// • Buttons
const reset = document.getElementById("resetLorenzo");
const roof = document.getElementById("roof");
const wall = document.getElementById("wall");
const door = document.getElementById("door");
const windows = document.getElementById("windows");
const showAll = document.getElementById("showAll");

reset.onclick = function () {
  roofDsgn.style.display = "none";
  wallDsgn.style.display = "none";
  GrassDsgn.style.display = "none";
  doorDsgn.style.display = "none";
  windowDsgn.style.display = "none";
  bellDsgn.style.display = "none";
};

roof.onclick = function () {
  if (roofDsgn.style.display === "none") {
    roofDsgn.style.display = "block";
  } else {
    roofDsgn.style.display = "none";
  }
};

wall.onclick = function () {
  if (wallDsgn.style.display === "none") {
    wallDsgn.style.display = "block";
    GrassDsgn.style.display = "block";
  } else {
    wallDsgn.style.display = "none";
    GrassDsgn.style.display = "none";
  }
};

door.onclick = function () {
  if (doorDsgn.style.display === "none") {
    doorDsgn.style.display = "block";
    bellDsgn.style.display = "block";
  } else {
    doorDsgn.style.display = "none";
    bellDsgn.style.display = "none";
  }
};

windows.onclick = function () {
  if (windowDsgn.style.display === "none") {
    windowDsgn.style.display = "block";
  } else {
    windowDsgn.style.display = "none";
  }
};

showAll.onclick = function () {
  roofDsgn.style.display = "block";
  wallDsgn.style.display = "block";
  GrassDsgn.style.display = "block";
  doorDsgn.style.display = "block";
  windowDsgn.style.display = "block";
  bellDsgn.style.display = "block";
};
