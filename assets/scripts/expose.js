// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const hornSelect= document.querySelector("select");
  const audio = document.querySelector("audio");
  const volume = document.querySelector('#volume');
  const hornImg = document.getElementsByTagName("img")[0];
  const volumeImg = document.getElementsByTagName("img")[1];
  const button = document.querySelector("button");
  const jsConfetti = new JSConfetti(); 

  // Change the image and audio sources
  hornSelect.addEventListener('input', function() {
    if(hornSelect.value != "select") {
      hornImg.src = "assets/images/" + hornSelect.value + ".svg";
      audio.src = "assets/audio/" + hornSelect.value + ".mp3";
    }
  });

  // Change the volume image source
  volume.addEventListener('input', function() {

    console.log(volume.value);
    if(volume.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume.value >= 1 && volume.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume.value >= 33 && volume.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else if (volume.value >= 67) {
      volumeImg.src = "assets/icons/volume-level-3.svg";  
    }
    
  });

  // Change the volume
  volume.addEventListener('input', function() {
      audio.volume = (volume.value)/100;
  });

  // Play the sound & shoot confetti
  button.addEventListener('click', function() {
      if (hornSelect.value == "party-horn") {
        jsConfetti.addConfetti();
      }
      audio.play();
  });

}
