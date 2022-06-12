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
        new Audio("snare.mp3") //8
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
        playundstop();
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
    function playundstop() {
        if (document.getElementById("playbu").classList.contains("fa-play")) {
            document.getElementById("playbu").classList.remove("fa-play");
            document.getElementById("playbu").classList.add("fa-stop");
        }
        else {
            document.getElementById("playbu").classList.remove("fa-stop");
            document.getElementById("playbu").classList.add("fa-play");
        }
    }
    function playaudio(audioToPlay) {
        audioToPlay.play();
    }
    document.getElementById("shuffel").addEventListener("click", remix);
    function remix() {
        if (document.getElementById("playbu").classList.contains("fa-stop")) {
            playlist();
        }
        var remixCounter = 0;
        var remixIntervalId = setInterval(function () {
            remixCounter++;
            playaudio(sound[getRandomInt(0, 9)]);
            if (remixCounter >= 3) {
                clearInterval(remixIntervalId);
            }
        }, 1000);
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()
            * (max - min)) + min;
    }
    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random#erzeugt_eine_ganze_zufallszahl_zwischen_zwei_zahlen
});
//# sourceMappingURL=drumpad.js.map