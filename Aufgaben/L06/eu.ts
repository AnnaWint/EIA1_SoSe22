var deutschland:string="Deutschland (2021)";
var frankreich:string="Frankreich (2021)";
var italien:string="Italien (2021)";
var malta:string="Malta (2021)";


var deutschland_einwohner:number=83.16;
var frankreich_einwohner:number=67.44;
var italien_einwohner:number=59.26;
var malte_einwohner:number=0.52;

var gesamtzahl:string="relativ zur Gesamtzahl der EU";
var gesamtzahl_eu:number=447.01;

var deutschland_2008:number=82;
var frankreich_2008:number=62.14;
var italien_2008:number=59;
var malta_2008:number=0.408;

var deutschland_1:string="Deutschland:";
var frankreich_1:string="Frankreich:";
var italien_1:string="Italien:";
var malta_1:string="Malta:";


console.log("Gesamtzahl der Einwohnerinen und Einwohner in "+ deutschland +":"+ deutschland_einwohner+" "+"Mio." );
console.log("Gesamtzahl der Einwohnerinen und Einwohner in "+ frankreich +":"+ frankreich_einwohner+" "+"Mio.");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in "+italien+":"+italien_einwohner+" "+"Mio.");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in "+malta+":"+malte_einwohner+" "+"Mio.");

console.log("Gesamtzahl der Einwohnerinen und Einwohner in "+deutschland+gesamtzahl+":"+deutschland_einwohner/gesamtzahl_eu*100+"%");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in "+frankreich+gesamtzahl+":"+frankreich_einwohner/gesamtzahl_eu*100+"%");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in "+italien+gesamtzahl+":"+italien_einwohner/gesamtzahl_eu*100+"%");
console.log("Gesamtzahl der Einwohnerinen und Einwohner in "+malta+gesamtzahl+":"+malte_einwohner/gesamtzahl_eu*100+"%");

console.log("Wachstumsrate seit 2008 in "+deutschland_1+(((deutschland_einwohner-deutschland_2008)/deutschland_2008)*100)+"%");
console.log("Wachstumsrate seit 2008 in "+frankreich_1+(((frankreich_einwohner-frankreich_2008)/frankreich_2008)*100)+"%");
console.log("Wachstum seit 2008 in "+italien_1+(((italien_einwohner-italien_2008)/italien_2008)*100)+"%");
console.log("Wachstumsrate seit 2008 in "+malta_1+(((malte_einwohner-malta_2008)/malta_2008)*100)+"%");

console.log("Wachstumsrate gesamt zwischen 2008 und 2021 in "+deutschland_1+(deutschland_einwohner-deutschland_2008)+" "+"Mio.");
console.log("Wachstumsrate gesamt zwischen 2008 und 2021 in "+frankreich_1+(frankreich_einwohner-frankreich_2008)+" "+"Mio.");
console.log("Wachstumsrate gesamt zwischen 2008 und 2021 in "+italien_1+(italien_einwohner-italien_2008)+" "+"Mio.");
console.log("Wachstumsrate gesamt zwischen 2008 und 2021 in "+malta_1+(malte_einwohner-malta_2008)+" "+"Mio.");