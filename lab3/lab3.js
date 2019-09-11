
var x = 6;
var y = 3;

var begingetal = prompt("vul een begincijfer in",);// vraag om een begincijfer

for (var i = 1;i <= 10; i++) {
	document.write(i + " x " + x + " = " + i * x + "<br>");
} 
document.write("<br>")

for (var i = 1;i <= 10; i++) {
	document.write(i + " x " + y + " = " + i * y + "<br>");
} 
document.write("<br>")

var getal = parseInt(begingetal);

getal = getal + 6;
getal = getal * 10;
getal = getal / 5;
getal = getal - 12;

document.write(begingetal + "som" + getal )
