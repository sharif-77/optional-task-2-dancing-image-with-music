document.getElementById("btn").addEventListener("click", () => {
    let audio = new Audio("audio/Jai pubg g song.mp3");
    audio.play();
    // to play audio infinite time
    // audio.setAttribute('loop',true)
    console.log(22);
    let bannerImage = document.getElementById("banner-img");
    bannerImage.src = "images/1abb69036fa376473d7bfa8fdf871b4b.gif";
    bannerImage.style.display = "block";

    // to hide the image when audio will stop
    audio.addEventListener("ended", () => {
      bannerImage.style.display = "none"; // Hide the image when music playback ends
    });
  });