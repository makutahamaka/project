var overlay = document.getElementsByClassName('video__overlay');
var vid = document.getElementsByClassName('main__video');

if(overlay.addEventListener){
    overlay.addEventListener("click", play, false)
}else if(overlay.attachEvent){
    overlay.attachEvent("onclick", play)
}

function play() {
    if (vid.paused){
        vid.play();
        overlay.className = "o";
    }else {
        vid.pause();
        overlay.className = "";
    }
}
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});