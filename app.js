 // Task 01 \\
var Zakatpercentage = 0.025 
var userInput = +prompt ("Enter any amount");
var Result = userInput * Zakatpercentage
alert("Your Zakat value is" + Result); 


// // Task 02 \\
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


// Task 03 \\ 

var secretNumber = 8

var userInput = +prompt ("Guess any secretNumber between 1 to 10");
if (userInput === 8) {
    alert("'Congratulation'  you won! you guess secretNumber")
} else if (userInput>8) {
    alert ("You Lose ! your guess number is too high : 'Guess Again' ")
} else if (userInput<8) {
    alert ("you Lose ! your guess number is too low : 'Guess Again'")
}


// Task 04 \\
var userInput= prompt("Enter Your Name");
var userName = userInput.toLowerCase();
var capitalized = userName.slice(0,1);
var capital = capitalized.toUpperCase();
alert (capital+userName.slice(1));



// Task 05 \\
var ContactNumbers= []        
var ContactNames= []

var Name1 = prompt ("Enter your First Name"); 
var Number1= +prompt("Enter your First Number");

var Name2 = prompt ("Enter your Second Name"); 
var Number2= +prompt("Enter your Second Number");

var Name3 = prompt ("Enter your Third Name");
var Number3= +prompt("Enter your Third Number");

 ContactNames.push(Name1,Name2,Name3);
 ContactNumbers.push(Number1,Number2,Number3);

alert ("Names " + ContactNames + " Numbers " + ContactNumbers);


// Task 06 \\
var Products= ["Face Primer" , "Foundation" , "Concealer" , "Eyebrow Pencils" , "Eye Primer" , "Contour Powder" ]
var userInput= +prompt ("Enter the number of Makeup Products you want to remove  \n 1.Face primer  \n 2.Foundation  \n 3.Concealer \n 4.Eyebrow pencils  \n 5.Eye primer  \n 6.Contour powder"  )       
var removeitem = Products.splice(userInput -1 ,1);
alert ("you removed item is " + removeitem);
alert ("you remaining items are " + Products);
alert ("your number of remaining Prducts is " + Products.length);

// Task 07 \\
var Nationality = prompt("Enter Your Nationality");
var Gender = prompt("Enter Your Gender");
var Age = +prompt("Enter Your Age");

Nationality= Nationality.toLocaleLowerCase();
Gender = Gender.toLocaleLowerCase();

if(
    Nationality === "Pakistani" || Nationality === "Pakistani" && Nationality === "Indian" || Nationality === "Indian");
{
    if( Gender === "Male" || Gender=== "Male" && Age >= 18)
    alert("you are Eligible for Vote")
}
if (Gender === "Female"|| Gender === "Female" && Age >=18){
    var maritalStatus = prompt("Enter your marital status");
    if (maritalStatus=="married") {
    alert("You are eligible to vote.");
  } 
  else  {
    alert("You are not eligible to vote.");
 }
}
else{
    alert("You Are Not Eligiable ");
}




// Task 08 \\
var WorldCupSquad= ["\n1.Babar Azam" , "\n2.M.Rizwan" , "\n3.M.Nawaz" , "\n4.Fakhar Zaman" , "\n5.Sarfaraz Ahmed" , "\n6.Haris Rauf" , "\n7.Azhar Ali" , "\n8.Rumman Raees" , "\n9.Mohammad Hasnain" , "\n10.Shadab Khan" , "\n11.Hassan Ali" , "\n12.Mohammad Wasim" , "\n13.Naseem Shah" , "\n14.Shaheen Shah Afridi" , "\n15.Shan Masood" ];
alert ("World Cup Squad: \n\n"+ WorldCupSquad + "\\n\ntomorrow's match players");
var FinalPlayers = WorldCupSquad.slice(0,11);
alert("Tomorrow's match players are: \n\n"+ FinalPlayers );


