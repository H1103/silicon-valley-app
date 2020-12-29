//global variables to be used here and in UI.js
var ui;
var texture1;
var acousticGuitar, forestBirds, jazz, koyal;
var multipleBells, nightingale, ocean, piano, rain, singleBell;
var  white, wind, windChime;

//preloading all the sounds
function preload() {
  texture1 = loadImage('Texture1.png');

  acousticGuitar = loadSound('acousticGuitar.mp3');
  forestBirds = loadSound('forestBirds.mp3');
  jazz = loadSound('jazz.mp3');
  koyal = loadSound('koyal.mp3');
  multipleBells = loadSound('multipleBells.mp3');
  nightingale = loadSound('nightingale.mp3');
  ocean = loadSound('ocean.wav');
  piano = loadSound('piano.mp3');
  rain = loadSound('rain.mp3');
  singleBell = loadSound('singleBell.mp3');
  white = loadSound('whiteSound.mp3');
  wind = loadSound('wind.mp3');
  windChime = loadSound('windchime.mp3');
}

function setup() {
  //the canvas fits for any device screen
  createCanvas(displayWidth,displayHeight);

  //creating new object from the UI class
  ui = new UI;
}

function draw() {
  background(texture1); 
  //calling the display function for the object which has all the events
  ui.display();
}
