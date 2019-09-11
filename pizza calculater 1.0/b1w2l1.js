
var small = prompt("Hoeveel small pizza's wilt u?",); //vraag hoeveel small pizza's de klant wilt
var medium = prompt("Hoeveel medium pizza's wilt u?",); //vraag hoeveel medium pizza's de klant wilt
var large = prompt("Hoeveel large pizza's wilt u?",); //vraag hoeveel large pizza's de klant wilt

var prijss = parseInt(small) * 3 
var prijsm = parseInt(medium) * 5 
var prijsl = parseInt(large) * 7 

document.write("Prijs voor "+small+" x €3,00 small pizza= " + " € "+ prijss+"<br>")
document.write("Prijs voor "+medium+" x €5,00 medium pizza= " +" € "+ prijsm+"<br>")
document.write("Prijs voor "+large+" x €7,00 large pizza= " + " € "+prijsl+"<br>")
document.write("totale prijs= " +" € "+ (prijss + prijsm + prijsl)+"<br>")




