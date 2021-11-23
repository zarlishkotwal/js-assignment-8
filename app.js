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

// var str1 = "zarlish kotwal "
// function indexOfNew(str,element){
//     var resultIndex =-1;
//     for(var i=0; i<str.length;i++){
//         if(element==str[i]){
//             resultIndex = i;
//             break
//             // console.log(str[i])
//         }
//         else{
//             resultIndex = -1
//         }
//     }
//     return resultIndex
// }

// console.log(indexOfNew(str1,"s"));

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

// var studentNames = ["shono","utban","shan","ibrahim","ahmed","Aslam","Umair","hasnain","Usman","faiz"]
// var studentClass = [9,3,5,6,2,3,7,1,3,4]
// var tab;
// var tableCount = 10;

// function fillData(){
//     for(var i = 0; i<studentNames.length;i++){
//         tab = document.getElementById("tr"+String(i+1))
//         tab.innerHTML += "<td>"+i+"</td>";
//         tab.innerHTML += "<td>"+studentNames[i]+"</td>";
//         tab.innerHTML += "<td>"+studentClass[i]+"</td>";
//         tab.innerHTML += "<td><button onclick='deleteStudent("+i+")'>Delete</button></td>";      
//     }
// }
// fillData()

// function deleteStd(index)
// {
//     studentNames.shift(index)
//     studentClass.shift(index)
//     for(var i = 0; i<tableCount;i++){
//         var tab12 = document.getElementById("tr"+String(i+1))
//         tab12.innerHTML = ""
//     }
//     fillData()
// }

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

// Q#1

// var userId = document.getElementById("userid");
// var password = document.getElementById("password");
// var userinfo = document.getElementById("userinfo");
// function submit1(){
//     userinfo.innerHTML = "User id: "+userId.value+" and Password is: "+password.value+""
// }

// Q#2

// function seeMore(){
    //     var para = document.getElementById("para")
    //     para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore itaque fugiat beatae harum, repudiandae ipsa eius obcaecati voluptas corrupti cupiditate, odit at eaque maxime sed officia. Porro, numquam alias!"
    // }

Q#3

var studentNames = ["usama","taha","anas","shan","ibrahim"]
var studentClass = [10,7,8,4,1]
var tab;
var tableCount;

function fillData(){
    for(var i = 0; i<stdNames.length;i++){
        var str1 = String("tr"+(i+1))
        // alert(str1)
        tab = document.getElementById(str1)        
        tab.innerHTML += "<td>"+i+"</td>";
        tab.innerHTML += "<td>"+studentNames[i]+"</td>";
        tab.innerHTML += "<td>"+studentClass[i]+"</td>";
        tab.innerHTML += "<td><button onclick='deleteStd("+i+")'>Delete</button></td>";      
        tab.innerHTML += "<td><button onclick='editRecord("+i+")'>Edit</button></td>";      
            
    }
}
fillData()

function deleteStd(index)
{
    tableCount = studentNames.length
    studentNames.shift(index)
    studentClass.shift(index)
    for(var i = 0; i<tableCount;i++){
        var tab12 = document.getElementById("tr"+String(i+1))
        tab12.innerHTML = ""
    }
    fillData()

}
function addRecord(){
    tableCount = studentNames.length
    var studentName1 = document.getElementById("userName")
    var studentClass1 = document.getElementById("classNo")
    studentNames.push(studentName1.value)
    studentClass.push(studentClass1.value)
    for(var i = 0; i<tableCount;i++){
        var tab12 = document.getElementById("tr"+String(i+1))
        tab12.innerHTML = ""
    }
    fillData()
}

function editRecord(index1){
    alert("Student Name is: "+studentNames[index1]+"\nStudent Class: "+studentClass[index1])




