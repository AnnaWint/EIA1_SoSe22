var deutschland = "Deutschland (2021)";
var frankreich = "Frankreich (2021)";
var italien = "Italien (2021)";
var malta = "Malta (2021)";
var deutschland_einwohner = 83.16;
var frankreich_einwohner = 67.44;
var italien_einwohner = 59.26;
var malte_einwohner = 0.52;
var gesamtzahl = "relativ zur Gesamtzahl der EU";
var gesamtzahl_eu = 447.01;
var deutschland_2008 = 82;
var frankreich_2008 = 62.14;
var italien_2008 = 59;
var malta_2008 = 0.408;
var deutschland_1 = "Deutschland:";
var frankreich_1 = "Frankreich:";
var italien_1 = "Italien:";
var malta_1 = "Malta:";
var geamtzahl_eu2008 = 497.7;
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
        document.querySelector(".number4").innerHTML = wazwde.toFixed(2) + " " + "Mio.";
        document.querySelector(".chart").setAttribute("style", "height:" + relativde + "%");
    }
    document.querySelector(".france").addEventListener("click", clickfrance);
    function clickfrance() {
        document.querySelector(".text1").innerHTML = "Gesamtzahl der Einwohnerinen und Einwohner in Frankreich in 2021";
        document.querySelector(".number1").innerHTML = frankreich_einwohner.toFixed(2) + " " + "Mio.";
        document.querySelector(".number2").innerHTML = relativfr.toFixed(2) + "%";
        document.querySelector(".number3").innerHTML = seitfr.toFixed(2) + "%";
        document.querySelector(".number4").innerHTML = wazufr.toFixed(2) + " " + "Mio.";
        document.querySelector(".chart").setAttribute("style", "height:" + relativfr + "%");
    }
    document.querySelector(".italy").addEventListener("click", clickitaly);
    function clickitaly() {
        document.querySelector(".text1").innerHTML = "Gesamtzahl der Einwohnerinen und Einwohner in Italien in 2021";
        document.querySelector(".number1").innerHTML = italien_einwohner.toFixed(2) + " " + "Mio.";
        document.querySelector(".number2").innerHTML = relativit.toFixed(2) + "%";
        document.querySelector(".number3").innerHTML = seitit.toFixed(2) + "%";
        document.querySelector(".number4").innerHTML = wazuit.toFixed(2) + " " + "Mio.";
        document.querySelector(".chart").setAttribute("style", "height:" + relativit + "%");
    }
    document.querySelector(".malta").addEventListener("click", clickmalta);
    function clickmalta() {
        document.querySelector(".text1").innerHTML = "Gesamtzahl der Einwohnerinen und Einwohner in Malta in 2021";
        document.querySelector(".number1").innerHTML = malte_einwohner.toFixed(2) + " " + "Mio.";
        document.querySelector(".number2").innerHTML = relativma.toFixed(2) + "%";
        document.querySelector(".number3").innerHTML = seitma.toFixed(2) + "%";
        document.querySelector(".number4").innerHTML = wazuma.toFixed(2) + " " + "Mio.";
        document.querySelector(".chart").setAttribute("style", "height:" + relativma + "%");
    }
    document.querySelector(".stars").addEventListener("click", clickstar);
    function clickstar() {
        document.querySelector(".text1").innerHTML = "Gesamtzahl der Einwohnerinen und Einwohner in der EU in 2021";
        document.querySelector(".number1").innerHTML = gesamtzahl_eu.toFixed(2) + " " + "Mio.";
        document.querySelector(".number3").innerHTML = seiteu.toFixed(2) + "%";
        document.querySelector(".number4").innerHTML = wazueu.toFixed(2) + " " + "Mio.";
        document.querySelector(".number2").innerHTML = relativeu.toFixed(2) + "%";
        document.querySelector(".text2").innerHTML = "";
        document.querySelector(".chart").setAttribute("style", "height:" + relativeu + "%");
    }
    function gesamteeu(gesamtzahl_eu, einwohner) {
        var relativ = (einwohner / gesamtzahl_eu * 100);
        return relativ;
    }
    var relativde = gesamteeu(gesamtzahl_eu, deutschland_einwohner);
    var relativfr = gesamteeu(gesamtzahl_eu, frankreich_einwohner);
    var relativit = gesamteeu(gesamtzahl_eu, italien_einwohner);
    var relativma = gesamteeu(gesamtzahl_eu, malte_einwohner);
    var relativeu = gesamteeu(gesamtzahl_eu, gesamtzahl_eu);
    var seitde = waseit(deutschland_einwohner, deutschland_2008);
    var seitfr = waseit(frankreich_einwohner, frankreich_2008);
    var seitit = waseit(italien_einwohner, italien_2008);
    var seitma = waseit(malte_einwohner, malta_2008);
    var seiteu = waseit(gesamtzahl_eu, geamtzahl_eu2008);
    function waseit(einwohner, _2008) {
        var seit = (((einwohner - _2008) / _2008) * 100);
        return seit;
    }
    function wazw(einwohner, _2008) {
        var wazw = (einwohner - _2008);
        return wazw;
    }
    var wazwde = wazw(deutschland_einwohner, deutschland_2008);
    var wazufr = wazw(frankreich_einwohner, frankreich_2008);
    var wazuit = wazw(italien_einwohner, italien_2008);
    var wazuma = wazw(malte_einwohner, malta_2008);
    var wazueu = wazw(gesamtzahl_eu, geamtzahl_eu2008);
});
//# sourceMappingURL=eu.js.map