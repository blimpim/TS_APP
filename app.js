"use strict";
const sun = document.getElementById('sun');
const rain = document.getElementById('rain');
const snow = document.getElementById('snow');
const background = document.getElementById('background');
const audioSun = new Audio("/assets/sounds/summer.mp3");
const audioRain = new Audio("/assets/sounds/rain.mp3");
const audioSnow = new Audio("/assets/sounds/winter.mp3");
let volume = document.getElementById("volume-control");
volume.addEventListener("change", function (event) {
    const target = event.currentTarget;
    const value = +target.value;
    audioSun.volume = value / 100;
    audioRain.volume = value / 100;
    audioSnow.volume = value / 100;
});
class Button {
    constructor(background) {
        this.back = background;
    }
    changeBack(backPath) {
        this.back.style.background = backPath;
    }
}
const sunBtn = new Button(background);
const rainBtn = new Button(background);
const snowBtn = new Button(background);
sun.addEventListener('click', () => {
    const isPlaying = sun.classList.contains('checked');
    sunBtn.changeBack('url(/assets/summer-bg.jpg)');
    if (isPlaying) {
        audioSun.pause();
        sun.classList.remove("checked");
    }
    else {
        audioSun.play();
        audioRain.pause();
        audioSnow.pause();
        sun.classList.add("checked");
        rain.classList.remove("checked");
        snow.classList.remove("checked");
        console.log('mak');
    }
});
rain.addEventListener('click', () => {
    const isPlaying = rain.classList.contains('checked');
    rainBtn.changeBack('url(/assets/rainy-bg.jpg)');
    if (isPlaying) {
        audioRain.pause();
        rain.classList.remove("checked");
    }
    else {
        audioRain.play();
        audioSun.pause();
        audioSnow.pause();
        rain.classList.add("checked");
        sun.classList.remove("checked");
        snow.classList.remove("checked");
        console.log('mak');
    }
});
snow.addEventListener('click', () => {
    const isPlaying = snow.classList.contains('checked');
    snowBtn.changeBack('url(/assets/winter-bg.jpg)');
    if (isPlaying) {
        audioSnow.pause();
        snow.classList.remove("checked");
    }
    else {
        audioSnow.play();
        audioRain.pause();
        audioSun.pause();
        snow.classList.add("checked");
        rain.classList.remove("checked");
        sun.classList.remove("checked");
        console.log('mak');
    }
});
// sun.onclick = function () {
//     sunBtn.changeBack('url(/assets/summer-bg.jpg)')
//     audioSun.play()
//     audioRain.pause()
//     audioSnow.pause()
//     sun.classList.add("checked")
//     console.log('mak')
// }
// rain.onclick = function () {
//     rainBtn.changeBack('url(/assets/rainy-bg.jpg)')
//     audioRain.play()
//     audioSun.pause()
//     audioSnow.pause()
//     rain.classList.add("checked")
//     console.log('mak')
// }
// snow.onclick = function () {
//     snowBtn.changeBack('url(/assets/winter-bg.jpg)')
//     audioSnow.play()
//     audioRain.pause()
//     audioSun.pause()
//     snow.classList.add("checked")
//     console.log('mak')
// }
