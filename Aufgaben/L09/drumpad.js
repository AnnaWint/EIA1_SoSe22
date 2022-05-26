window.addEventListener("load", function () {
    var sound = [
        new Audio("A.mp3"),
        new Audio("C.mp3"),
        new Audio("F.mp3"),
        new Audio("G.mp3"),
        new Audio("hihat.mp3"),
        new Audio("kick.mp3"),
        new Audio("laugh-1.mp3"),
        new Audio("laugh-2.mp3"),
        new Audio("snare.mp3"), //8
    ];
    var activIndex;
    document.querySelector(".blau1").addEventListener("click", playSample);
    document.querySelector(".blau2").addEventListener("click", playSample);
    document.querySelector(".blau3").addEventListener("click", playSample);
    document.querySelector(".pink1").addEventListener("click", playSample);
    document.querySelector(".pink2").addEventListener("click", playSample);
    document.querySelector(".pink3").addEventListener("click", playSample);
    document.querySelector(".pink4").addEventListener("click", playSample);
    document.querySelector(".orange1").addEventListener("click", playSample);
    document.querySelector(".orange2").addEventListener("click", playSample);
    function playSample() {
        activIndex = document.querySelector(".taste:hover").getAttribute("id");
        playaudio(sound[activIndex]);
    }
    document.getElementById("playbu").addEventListener("click", playlist);
    var intervalid = -1;
    function playlist() {
        if (document.getElementById("playbu").classList.contains("fa-play")) {
            intervalid = setInterval(list, 1000);
        }
        else {
            clearInterval(intervalid);
        }
        playlist2();
    }
    var counter = 0;
    var playlist1 = [
        new Audio("hihat.mp3"),
        new Audio("kick.mp3"),
        new Audio("snare.mp3")
    ];
    function list() {
        playaudio(playlist1[counter]);
        counter++;
        console.log(counter);
        if (counter == playlist1.length) {
            counter = 0;
        }
    }
    function playlist2() {
        if (document.getElementById("playbu").classList.contains("fa-play")) {
            document.getElementById("playbu").classList.remove("fa-play");
            document.getElementById("playbu").classList.add("fa-stop");
        }
        else {
            document.getElementById("playbu").classList.remove("fa-stop");
            document.getElementById("playbu").classList.add("fa-play");
        }
    }
    ;
    function playaudio(audioToPlay) {
        audioToPlay.play();
    }
    document.getElementById("shuffel").addEventListener("click", remix);
    function remix() {
        if (document.getElementById("playbu").classList.contains("fa-stop")) {
            playlist();
        }
        var RemixCounter = 0;
        var RemixIntervalId = setInterval(function () {
            RemixCounter++;
            playaudio(sound[getRandomInt(0, 9)]);
            if (RemixCounter >= 3) {
                clearInterval(RemixIntervalId);
            }
        }, 1000);
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()
            * (max - min)) + min;
    }
});
//# sourceMappingURL=drumpad.js.map