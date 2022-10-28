// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  let airHorn = document.getElementById("horn-select").selectedOptions[1].value;
  let carHorn = document.getElementById("horn-select").selectedOptions[2].value;
  let partyHorn = document.getElementById("horn-select").selectedOptions[3].value;
  let audio = document.getElementsByClassName("Hidden");
  
}
  
  airHorn.addEventListener(‘click’, changePicture() {

     document.querySelector('img[alt="No image selected"]') = img.src.replace("assets/images/air-horn.svg");
     audio.src.replace("assets/audio/air-horn.mp3);
  
  })
  
  carHorn.addEventListener(‘click’, changePicture() {

     document.querySelector('img[alt="No image selected"]') = img.src.replace("assets/images/car-horn.svg");
     audio.src.replace("assets/audio/car-horn.mp3);
  
  })
  
  partyHorn.addEventListener(‘click’, changePicture() {

     document.querySelector('img[alt="No image selected"]') = img.src.replace("assets/images/party-horn.svg");
     audio.src.replace("assets/audio/party-horn.mp3);
  
  })
