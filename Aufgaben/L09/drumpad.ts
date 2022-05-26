

window.addEventListener("load", function (): void {

    var sound: HTMLAudioElement[] = [
        new Audio("A.mp3"), //0
        new Audio("C.mp3"), //1
        new Audio("F.mp3"), //2
        new Audio("G.mp3"), //3
        new Audio("hihat.mp3"), //4
        new Audio("kick.mp3"), //5
        new Audio("laugh-1.mp3"), //6
        new Audio("laugh-2.mp3"), //7
        new Audio("snare.mp3") //8
    ];

    var activIndex: string;

    document.querySelector(".blau1").addEventListener("click", playSample);
    document.querySelector(".blau2").addEventListener("click", playSample);
    document.querySelector(".blau3").addEventListener("click", playSample);
    document.querySelector(".pink1").addEventListener("click", playSample);
    document.querySelector(".pink2").addEventListener("click", playSample);
    document.querySelector(".pink3").addEventListener("click", playSample);
    document.querySelector(".pink4").addEventListener("click", playSample);
    document.querySelector(".orange1").addEventListener("click", playSample);
    document.querySelector(".orange2").addEventListener("click", playSample);

    function playSample(): void {

        activIndex = document.querySelector(".taste:hover").getAttribute("id");
        playaudio(sound[activIndex]);
    }

    document.getElementById("playbu").addEventListener("click", playlist);

    var intervalid: number = -1;
    function playlist(): void {


        if (document.getElementById("playbu").classList.contains("fa-play")) {
            intervalid = setInterval(list, 1000);
        }
        else {
            clearInterval(intervalid);
        }
        playundstop();
    }

    var counter: number = 0;

    var playlist1: HTMLAudioElement[] = [
        new Audio("hihat.mp3"),
        new Audio("kick.mp3"),
        new Audio("snare.mp3")
    ];
    function list(): void {
        playaudio(playlist1[counter]);
        counter++;
        console.log(counter);
        if (counter == playlist1.length) {
            counter = 0;
        }

    }

    function playundstop(): void {
        if (document.getElementById("playbu").classList.contains("fa-play")) {
            document.getElementById("playbu").classList.remove("fa-play");
            document.getElementById("playbu").classList.add("fa-stop");

        }
        else {
            document.getElementById("playbu").classList.remove("fa-stop");
            document.getElementById("playbu").classList.add("fa-play");

        }

    }


    function playaudio(audioToPlay: HTMLAudioElement): void {
        audioToPlay.play();

    }
    document.getElementById("shuffel").addEventListener("click", remix);
    function remix(): void {

        if (document.getElementById("playbu").classList.contains("fa-stop")) {
            playlist();
        }

        var remixCounter: number = 0;
        var remixIntervalId: number = setInterval(function (): void {
            remixCounter++;
            playaudio(sound[getRandomInt(0, 9)]);
            if (remixCounter >= 3) {
                clearInterval(remixIntervalId);
            }
        },                                        1000);

    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()
            * (max - min)) + min;
    }
//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random#erzeugt_eine_ganze_zufallszahl_zwischen_zwei_zahlen

});