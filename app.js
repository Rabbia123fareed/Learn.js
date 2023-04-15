// Task 01 \\
// let Zakatpercentage = 0.025
// let userInput = +prompt ("Enter any amount");
// let Result = userInput * Zakatpercentage
// alert("Your Zakat value is" + Result);


// Task 02 \\
// Fitra Amount 
var Weat = 320 ;
var Barly = 450;
var Dates = 2100;
var Raisins = 2800;

var Userinput1 = +prompt ("Enter your Familymember");

// Calculation \\
var Userinput2 = prompt ("Select any one method \n a.Weat : 320 \n b.Barly : 450 \n c.Dates : 2100 \n d.Raisins : 2800");
if (Userinput2=="a") {
    var total = Userinput1 * Weat
    alert ("your fitra amount is :" + total)
} else if ( Userinput2=="b") {
    var total = Userinput1 * Barly
    alert ("your fitra amount is :" + total)
} else if (Userinput2=="c") {
    var total = Userinput1 * Dates
    alert ("your fitra amount is :" + total)
} else if (Userinput2=="d") {
    var total = Userinput1 * Raisins
    alert ("your fitra amount is :" + total)
}
