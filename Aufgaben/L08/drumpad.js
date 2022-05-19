window.addEventListener("load", function () {
    var sound = [
        new Audio('A.mp3'),
        new Audio('C.mp3'),
        new Audio('F.mp3'),
        new Audio('G.mp3'),
        new Audio('hihat.mp3'),
        new Audio('kick.mp3'),
        new Audio('laugh-1.mp3'),
        new Audio('laugh-2.mp3'),
        new Audio('snare.mp3'), //8
    ];
    var activIndex;
    document.querySelector('.blau1').addEventListener('click', playSample);
    document.querySelector('.blau2').addEventListener('click', playSample);
    document.querySelector('.blau3').addEventListener('click', playSample);
    document.querySelector('.pink1').addEventListener('click', playSample);
    document.querySelector('.pink2').addEventListener('click', playSample);
    document.querySelector('.pink3').addEventListener('click', playSample);
    document.querySelector('.pink4').addEventListener('click', playSample);
    document.querySelector('.orange1').addEventListener('click', playSample);
    document.querySelector('.orange2').addEventListener('click', playSample);
    function playSample() {
        activIndex = document.querySelector('.taste:hover').getAttribute('id');
        sound[activIndex].play();
    }
    ;
    document.querySelector('.play').addEventListener('click', playlist);
    function playlist() {
        setInterval(list, 500);
    }
    ;
    function list() {
        sound[4].play();
        sound[5].play();
        sound[8].play();
    }
    ;
});
//# sourceMappingURL=drumpad.js.map