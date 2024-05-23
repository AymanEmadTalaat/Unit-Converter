/*
1 meter = 3.281 feet (length)
1 liter = 0.264 gallon (volume)
1 kilogram = 2.204 pound (mass)
*/

const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;

let inputBtn = document.getElementById("input-btn");
let btn = document.getElementById("btn");

const divMainOne = document.getElementById("main-one");
const divMainTwo = document.getElementById("main-two");
const divMainThree = document.getElementById("main-three");


btn.addEventListener("click", function() {
  if (inputBtn.value === "") {
    btn.ariaDisabled;

  } else if (inputBtn.value == 0) {
    btn.ariaDisabled;
    
  } else {
    convertLength();
    convertVolume();
    convertMass();
  }

})

function convertLength() {  
  let lng = [];
  let convertMeter = inputBtn.value * meter;
  let convertFeet = inputBtn.value / meter;
  lng = `<div id="main-one"> 
  <h3>Length (Meter/Feet)</h3>
  <p> ${inputBtn.value} meters = ${convertMeter.toFixed(3)} feet | ${inputBtn.value} feet = ${convertFeet.toFixed(3)} meters </p>
  </div>`
  
  divMainOne.innerHTML = lng;
}

function convertVolume() {
  let volume = [];
  let convertMeter = inputBtn.value * liter;
  let convertFeet = inputBtn.value / liter;
  volume = `<div id="main-Two"> 
  <h3>Volume (Liters/Gallons)</h3>
  <p> ${inputBtn.value} liters = ${convertMeter.toFixed(3)} gallons | ${inputBtn.value} gallons = ${convertFeet.toFixed(3)} liters </p>
  </div>`
  
  divMainTwo.innerHTML = volume;
}

function convertMass() {
  let mass = [];
  let convertMeter = inputBtn.value * kilogram;
  let convertFeet = inputBtn.value / kilogram;
  mass = `<div id="main-Three"> 
  <h3>Mass (Kilograms/Pounds)</h3>
  <p> ${inputBtn.value} kilos = ${convertMeter.toFixed(3)} pounds | ${inputBtn.value} pounds = ${convertFeet.toFixed(3)} kilos </p>
  </div>`
  
  divMainThree.innerHTML = mass;
}



