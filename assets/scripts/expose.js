// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  let airHorn = document.getElementById("horn-select").selectedOptions[1].value;
  let carHorn = document.getElementById("horn-select").selectedOptions[2].value;
  let partyHorn = document.getElementById("horn-select").selectedOptions[3].value;
  
}
  
  airHorn.addEventListener(‘click’, changePicture() {

     document.querySelector('img[alt="No image selected"]') = img.src.replace("assets/images/air-horn.svg")
  
  })
  
  carHorn.addEventListener(‘click’, changePicture() {

     document.querySelector('img[alt="No image selected"]') = img.src.replace("assets/images/car-horn.svg")
  
  })
  
  partyHorn.addEventListener(‘click’, changePicture() {

     document.querySelector('img[alt="No image selected"]') = img.src.replace("assets/images/party-horn.svg")
  
  })
