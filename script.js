// script.js

// =========================
// GET ELEMENTS
// =========================

const enterBtn =
document.getElementById("enterBtn");

const intro =
document.getElementById("intro");

const universe =
document.getElementById("universe");

const bgMusic =
document.getElementById("bgMusic");

const popupMusic =
document.getElementById("popupMusic");


// =========================
// ENTER UNIVERSE
// =========================

enterBtn.addEventListener("click", ()=>{

    // HIDE INTRO

    intro.classList.add("hidden");

    // SHOW UNIVERSE

    universe.classList.remove("hidden");

    // PLAY UNIVERSE MUSIC

    bgMusic.play();

});


// =========================
// OPEN POPUP
// =========================

function openPopup(id, musicFile){

    // OPEN POPUP

    document
    .getElementById(id)
    .classList.remove("hidden");


    // STOP UNIVERSE MUSIC

    bgMusic.pause();


    // RESET PREVIOUS POPUP MUSIC

    popupMusic.pause();

    popupMusic.currentTime = 0;


    // CHANGE MUSIC

    popupMusic.src = musicFile;


    // PLAY POPUP MUSIC

    popupMusic.play();

}


// =========================
// CLOSE POPUP
// =========================

function closePopup(id){

    // CLOSE POPUP

    document
    .getElementById(id)
    .classList.add("hidden");


    // STOP POPUP MUSIC

    popupMusic.pause();

    popupMusic.currentTime = 0;


    // RESUME UNIVERSE MUSIC

    bgMusic.play();

}