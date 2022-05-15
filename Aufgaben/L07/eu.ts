

var deutschland: string = "Deutschland (2021)";
var frankreich: string = "Frankreich (2021)";
var italien: string = "Italien (2021)";
var malta: string = "Malta (2021)";


var deutschland_einwohner: number = 83.16;
var frankreich_einwohner: number = 67.44;
var italien_einwohner: number = 59.26;
var malte_einwohner: number = 0.52;

var gesamtzahl: string = "relativ zur Gesamtzahl der EU";
var gesamtzahl_eu: number = 447.01;

var deutschland_2008: number = 82;
var frankreich_2008: number = 62.14;
var italien_2008: number = 59;
var malta_2008: number = 0.408;

var deutschland_1: string = "Deutschland:";
var frankreich_1: string = "Frankreich:";
var italien_1: string = "Italien:";
var malta_1: string = "Malta:";

var geamtzahl_eu2008: number = 497.7;

console.log("Gesamtzahl der Einwohnerinen und Einwohner in " + deutschland + ":" + deutschland_einwohner + " " + "Mio.");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in " + frankreich + ":" + frankreich_einwohner + " " + "Mio.");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in " + italien + ":" + italien_einwohner + " " + "Mio.");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in " + malta + ":" + malte_einwohner + " " + "Mio.");

console.log("Gesamtzahl der Einwohnerinen und Einwohner in " + deutschland + gesamtzahl + ":" + deutschland_einwohner / gesamtzahl_eu * 100 + "%");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in " + frankreich + gesamtzahl + ":" + frankreich_einwohner / gesamtzahl_eu * 100 + "%");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in " + italien + gesamtzahl + ":" + italien_einwohner / gesamtzahl_eu * 100 + "%");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in " + malta + gesamtzahl + ":" + malte_einwohner / gesamtzahl_eu * 100 + "%");

console.log("Wachstumsrate seit 2008 in " + deutschland_1 + (((deutschland_einwohner - deutschland_2008) / deutschland_2008) * 100) + "%");
console.log("Wachstumsrate seit 2008 in " + frankreich_1 + (((frankreich_einwohner - frankreich_2008) / frankreich_2008) * 100) + "%");
console.log("Wachstum seit 2008 in " + italien_1 + (((italien_einwohner - italien_2008) / italien_2008) * 100) + "%");
console.log("Wachstumsrate seit 2008 in " + malta_1 + (((malte_einwohner - malta_2008) / malta_2008) * 100) + "%");

console.log("Wachstumsrate gesamt zwischen 2008 und 2021 in " + deutschland_1 + (deutschland_einwohner - deutschland_2008) + " " + "Mio.");
console.log("Wachstumsrate gesamt zwischen 2008 und 2021 in " + frankreich_1 + (frankreich_einwohner - frankreich_2008) + " " + "Mio.");
console.log("Wachstumsrate gesamt zwischen 2008 und 2021 in " + italien_1 + (italien_einwohner - italien_2008) + " " + "Mio.");
console.log("Wachstumsrate gesamt zwischen 2008 und 2021 in " + malta_1 + (malte_einwohner - malta_2008) + " " + "Mio.");



window.addEventListener("load", function () {
    document.querySelector(".germany").addEventListener("click", clickgermany);

    function clickgermany() {
        document.querySelector(".text1").innerHTML = "Gesamtzahl der Einwohnerinen und Einwohner in Deutschland in 2021";
        document.querySelector(".number1").innerHTML = deutschland_einwohner.toFixed(2) + " " + "Mio.";
        document.querySelector(".number2").innerHTML = relativde.toFixed(2) + "%";
        document.querySelector(".number3").innerHTML = seitde.toFixed(2) + "%";
        document.querySelector(".number4").innerHTML = wazwde.toFixed(2) + " "+"Mio.";
        document.querySelector(".chart").setAttribute("style","height:"+relativde+"%");
    }

    document.querySelector(".france").addEventListener("click", clickfrance);

    function clickfrance() {
        document.querySelector(".text1").innerHTML = "Gesamtzahl der Einwohnerinen und Einwohner in Frankreich in 2021";
        document.querySelector(".number1").innerHTML = frankreich_einwohner.toFixed(2) + " " + "Mio.";
        document.querySelector(".number2").innerHTML = relativfr.toFixed(2) + "%";
        document.querySelector(".number3").innerHTML = seitfr.toFixed(2) + "%";
        document.querySelector(".number4").innerHTML = wazufr.toFixed(2) + " "+"Mio.";
        document.querySelector(".chart").setAttribute("style","height:"+relativfr+"%");
    }

    document.querySelector(".italy").addEventListener("click", clickitaly);

    function clickitaly() {
        document.querySelector(".text1").innerHTML = "Gesamtzahl der Einwohnerinen und Einwohner in Italien in 2021";
        document.querySelector(".number1").innerHTML = italien_einwohner.toFixed(2) + " " + "Mio.";
        document.querySelector(".number2").innerHTML = relativit.toFixed(2) + "%";
        document.querySelector(".number3").innerHTML = seitit.toFixed(2) + "%";
        document.querySelector(".number4").innerHTML = wazuit.toFixed(2) + " "+"Mio.";
        document.querySelector(".chart").setAttribute("style","height:"+relativit+"%");
    }

    document.querySelector(".malta").addEventListener("click", clickmalta);
    function clickmalta() {
        document.querySelector(".text1").innerHTML = "Gesamtzahl der Einwohnerinen und Einwohner in Malta in 2021";
        document.querySelector(".number1").innerHTML = malte_einwohner.toFixed(2) + " " + "Mio.";
        document.querySelector(".number2").innerHTML = relativma.toFixed(2) + "%";
        document.querySelector(".number3").innerHTML = seitma.toFixed(2) + "%";
        document.querySelector(".number4").innerHTML = wazuma.toFixed(2) + " "+"Mio.";
        document.querySelector(".chart").setAttribute("style","height:"+relativma+"%");

    }

    document.querySelector(".stars").addEventListener("click", clickstar);
    function clickstar() {
        document.querySelector(".text1").innerHTML = "Gesamtzahl der Einwohnerinen und Einwohner in der EU in 2021";
        document.querySelector(".number1").innerHTML = gesamtzahl_eu.toFixed(2) + " " + "Mio.";
        document.querySelector(".number3").innerHTML = seiteu.toFixed(2) + "%";
        document.querySelector(".number4").innerHTML = wazueu.toFixed(2) + " " + "Mio.";
        document.querySelector(".number2").innerHTML = relativeu.toFixed(2) + "%";
        document.querySelector(".text2").innerHTML="";
        document.querySelector(".chart").setAttribute("style","height:"+relativeu+"%");
    }


   


    function gesamteeu(gesamtzahl_eu: number, einwohner: number) {
        var relativ: number = (einwohner / gesamtzahl_eu * 100);
        return relativ;
    }

    var relativde: number = gesamteeu(gesamtzahl_eu, deutschland_einwohner);
    var relativfr: number = gesamteeu(gesamtzahl_eu, frankreich_einwohner);
    var relativit: number = gesamteeu(gesamtzahl_eu, italien_einwohner);
    var relativma: number = gesamteeu(gesamtzahl_eu, malte_einwohner);
    var relativeu: number = gesamteeu(gesamtzahl_eu, gesamtzahl_eu);



    var seitde: number = waseit(deutschland_einwohner, deutschland_2008);
    var seitfr: number = waseit(frankreich_einwohner, frankreich_2008);
    var seitit: number = waseit(italien_einwohner, italien_2008);
    var seitma: number = waseit(malte_einwohner, malta_2008);
    var seiteu: number = waseit(gesamtzahl_eu, geamtzahl_eu2008)

    function waseit(einwohner: number, _2008: number) {
        var seit: number = (((einwohner - _2008) / _2008) * 100);
        return seit;
    }

    function wazw(einwohner, _2008) {
        var wazw: number = (einwohner - _2008)
        return wazw;
    }

    var wazwde: number = wazw(deutschland_einwohner, deutschland_2008);
    var wazufr: number = wazw(frankreich_einwohner, frankreich_2008);
    var wazuit: number = wazw(italien_einwohner, italien_2008);
    var wazuma: number = wazw(malte_einwohner, malta_2008);
    var wazueu: number = wazw(gesamtzahl_eu, geamtzahl_eu2008);



});