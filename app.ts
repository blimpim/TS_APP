const sun = document.getElementById('sun')as HTMLElement
const rain = document.getElementById('rain')as HTMLElement
const snow = document.getElementById('snow')as HTMLElement
const background = document.getElementById('background')as HTMLElement


const audioSun: HTMLAudioElement = new Audio("assets/sounds/summer.mp3")
const audioRain: HTMLAudioElement = new Audio("assets/sounds/rain.mp3")
const audioSnow: HTMLAudioElement = new Audio("assets/sounds/winter.mp3")

let volume = document.getElementById("volume-control")as HTMLElement


volume.addEventListener("change", function(event: Event) {
    const target = event.currentTarget as HTMLInputElement
    const value = +target.value
    audioSun.volume = value / 100
    audioRain.volume = value / 100
    audioSnow.volume = value / 100
   

})

class Button {
    back: HTMLElement
   
    constructor(background: HTMLElement) {
        this.back = background
    }

    changeBack(backPath: string) {
        this.back.style.background = backPath
    }

}

const sunBtn = new Button(background)
const rainBtn = new Button(background)
const snowBtn = new Button(background)

sun.addEventListener('click', () => {
    
    const isPlaying = sun.classList.contains('checked');
    sunBtn.changeBack('url(assets/summer-bg.jpg)')
    
  
    if (isPlaying) {
        audioSun.pause()
        sun.classList.remove("checked")
    } else {
        audioSun.play()
        audioRain.pause()
        audioSnow.pause()
        sun.classList.add("checked")
        rain.classList.remove("checked")
        snow.classList.remove("checked")
        
    }

  });

rain.addEventListener('click', () => {

const isPlaying = rain.classList.contains('checked');
rainBtn.changeBack('url(assets/rainy-bg.jpg)')


if (isPlaying) {
    audioRain.pause()
    rain.classList.remove("checked")
} else {
    audioRain.play()
    audioSun.pause()
    audioSnow.pause()
    rain.classList.add("checked")
    sun.classList.remove("checked")
    snow.classList.remove("checked")
    
}

});

snow.addEventListener('click', () => {

const isPlaying = snow.classList.contains('checked');
snowBtn.changeBack('url(assets/winter-bg.jpg)')


if (isPlaying) {
    audioSnow.pause()
    snow.classList.remove("checked")
} else {
    audioSnow.play()
    audioRain.pause()
    audioSun.pause()
    snow.classList.add("checked")
    rain.classList.remove("checked")
    sun.classList.remove("checked")
    
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









