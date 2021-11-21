// alert("helo world");

// Q#1

// var number1=+prompt("enter  a number:");
// var number2 =+prompt("enter the power for that number:");
// function power(a , b) {
//     var power = a ** b;
//     return power;
//   } 
//   alert("Value of  a raised to b." +power(number , number2)  );


// Q#2

// var year = prompt("Enter a year to check ")
// function checkLeapYear(year) {
//     if (year % 5 === 0) {
//       return year + " is a Leap year";
//     } else {
//       return year + " is not a Leap year";
//     }
//   }
// alert((checkLeapYear(year)));

// Q#3

// var j=+prompt("enter 1st side length of the triangle:")
// var k=+prompt("enter 2nd side length of the triangle:")
// var l=+prompt("enter 3rd side length of the triangle:")
// function areaOfTriangle(a, b, c) {
//     var S = (a + b + c) / 2;
//     var area = S * (S - a) * (S - b) * (S - c);
//     return area;
//   }
//   alert("Area of triangle is"+ areaOfTriangle(j, k, l));

// Q#4

// var a =+prompt("enter marks of English:")
// var b =+prompt("enter marks of Urdu:")
// var c =+prompt("enter marks of Math:")
// var totalmarks=300;
// function main(){
//     function average(a,b,c){
//         var ave= a+b+c;
//         return ave;
//     }
//     function percentage(){
//         var per=(average(a,b,c)/totalmarks)*100;
//         return per;
//     }
//     alert("your average marks is: "+average(a,b,c)+"\n"+" your percentage is :"+percentage()+" %")
// }
// main()

// Q#5



// Q#6

// var str = prompt("enter a sentence that is not more than 25 characters long.");
// str.toLowerCase();
// function deleteVowels(sentence) {
//   sentence = sentence.replace(/a/g, "");
//   sentence = sentence.replace(/e/g, "");
//   sentence = sentence.replace(/i/g, "");
//   sentence = sentence.replace(/o/g, "");
//   sentence = sentence.replace(/u/g, "");
//   return sentence;
// }
// document.write("Orignal String: " + str + "<br>");
// document.write("Without Vowels: " + deleteVowels(str) );

// Q#8

// var distance = +prompt("Enter distance beween two cities in kilo meter(Km):")
// function meter(w) {
//     var met = w * 1000;
//     return met;
// }
// function feet(x) {
//     var fet = x *3.28084 ;
//     return fet;
// }
// function inches(y) {
//     var inc = y * 39370.1;
//     return inc;
// }
// function centimeter(z) {
//     var cen = z * 100000;
//     return cen;
// }
// alert("the distance in meter is : " + meter(distance) + "meter\n" +
//  "the distance in feet is : " + feet(distance) + "feet\n" + "the distance in inches is : " + inches(distance) + " inches\n" + 
//  "the distance in centimeter is : " + centimeter(distance) + "cm");

//  Q#9

// function overtimePay() {
// var numOfHour=+prompt("enter number of hours above 40 each employee worked:")
// if(numOfHour>40){
// numOfHour=numOfHour-40;
// var totalPay=numOfHour*12;
// alert("your over time pay is : "+totalPay)
// }else{
//  alert("you did not work on overtime... ")
//    }
//   }
//     overtimePay();

// Q#10

// var cash=+prompt("enter amount you want to withdrawn:")
// function currencyDenomination(cash) {
// var hundred = parseInt(cash / 100);
// var fifty = parseInt((cash % 100) / 50);
// var ten = parseInt(((cash % 100) % 50) / 10);
// alert(
// "You will have "+
//  hundred+
// " hundred notes "+
//  fifty+
//  " fifty notes "+
//  ten+
//  " ten notes."
//     );
//   }
//   currencyDenomination(cash);

// chapter # 43 to 48
 
// Q#1

// function showAlert(){
// alert("hello guys \nhave a nice day");
// }

// Q#2

// function showAlert() {
//  alert("Thanks for purchasing a phone from us");
//   }

//  Q#4 



// Q#5

// var counter = document.getElementById("counter");

// var counter = 0;

// function countIncrease() {
//   count++;
//   counter.innerHTML = count;
// }

// function countDecrease() {
//   count--;
//   counter.innerHTML = count;
// }

// var counterR = document.getElementById("counterR");
// var counter = 0;
// function counterDecrease() {
//   counter--;
//   counterR.innerHTML = counter;
// }
// function counterIncrease() {
//     counter++;
//     counterR.innerHTML = counter;
//   }


// chapter 49 to 52

// var userId = document.getElementById("userid");
// var userPassword = document.getElementById("userpassword");
// var userInformation = document.getElementById("userinformation");
// function submit(){
//     userInformation.innerHTML = "User Name: " +userId.value+" and Password is: "+userPassword.value+""
// }

var userid = document.getElementById("userid");
var passw = document.getElementById("passw");
var userinfo = document.getElementById("userinfo");
function submit1(){
    userinfo.innerHTML = "User Name: "+userid.value+" and Password is: "+passw.value+""
}