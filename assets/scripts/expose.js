// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  let airHorn = document.getElementById("horn-select").selectedOptions[1].value;
  let carHorn = document.getElementById("horn-select").selectedOptions[2].value;
  let partyHorn = document.getElementById("horn-select").selectedOptions[3].value;
  let audio = document.getElementsByClassName("Hidden");
  let range = document.QuerySelector(["[type='range']")
  
}
  
  airHorn.addEventListener(‘click’, changePictureAirHorn() {

     document.querySelector('img[alt="No image selected"]') = img.src.replace("assets/images/air-horn.svg");
     audio.src.replace("assets/audio/air-horn.mp3);
  
  });
  
  carHorn.addEventListener(‘click’, changePictureCarHorn() {

     document.querySelector('img[alt="No image selected"]') = img.src.replace("assets/images/car-horn.svg");
     audio.src.replace("assets/audio/car-horn.mp3);
  
  });
  
  partyHorn.addEventListener(‘click’, changePicturePartyHorn() {

     document.querySelector('img[alt="No image selected"]') = img.src.replace("assets/images/party-horn.svg");
     audio.src.replace("assets/audio/party-horn.mp3);
  
  });
    
  range.addEventListener('input', changeIcon() {
                         
     if(range.value == 0) document.querySelector('img[alt="Volume level 2"]') = img.src.replace.("assets/icons/volume-level-0.svg");
     else if (1 <= range.value < 33) document.querySelector('img[alt="Volume level 2"]') = img.src.replace.("assets/icons/volume-level-1.svg");
     else if (33 <= range.value < 67) document.querySelector('img[alt="Volume level 2"]') = img.src.replace.("assets/icons/volume-level-2.svg");
     else if (67 <= range.value) document.querySelector('img[alt="Volume level 2"]') = img.src.replace.("assets/icons/volume-level-3.svg");  
    
  });
  
  range.addEventListener('input', changeVolume() {
                         
     audio.volume = (range.value)/100;
                         
  });
