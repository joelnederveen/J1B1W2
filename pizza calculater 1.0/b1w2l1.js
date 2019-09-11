//Joel Nederveen
//pizza calculator 1.0
var small = prompt("Hoeveel small pizza's wilt u?",); //vraag hoeveel small pizza's de klant wilt
var medium = prompt("Hoeveel medium pizza's wilt u?",); //vraag hoeveel medium pizza's de klant wilt
var large = prompt("Hoeveel large pizza's wilt u?",); //vraag hoeveel large pizza's de klant wilt

var prijss = parseInt(small) * 3 //maakt het ingevulde aantal pizza's een cijfer voor de code
var prijsm = parseInt(medium) * 5 //maakt het ingevulde aantal pizza's een cijfer voor de code
var prijsl = parseInt(large) * 7 //maakt het ingevulde aantal pizza's een cijfer voor de code

document.write("Prijs voor "+small+" x €3,00 small pizza= " + " € "+ prijss+"<br>") //schrijft wat de gebruiker ziet op zijn scherm
document.write("Prijs voor "+medium+" x €5,00 medium pizza= " +" € "+ prijsm+"<br>") //schrijft wat de gebruiker ziet op zijn scherm
document.write("Prijs voor "+large+" x €7,00 large pizza= " + " € "+prijsl+"<br>") //schrijft wat de gebruiker ziet op zijn scherm
document.write("totale prijs= " +" € "+ (prijss + prijsm + prijsl)+"<br>") //schrijft wat de gebruiker ziet op zijn scherm




