// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  let airHorn = document.getElementById("horn-select").selectedOptions[1].value;
  let carHorn = document.getElementById("horn-select").selectedOptions[2].value;
  let partyHorn = document.getElementById("horn-select").selectedOptions[3].value;
  
  airHorn.addEventListener(‘click’, changePicture() {

     document.getElementById("img").src=a;
     document.querySelector('img[src=""]');
  
  })
  
}
