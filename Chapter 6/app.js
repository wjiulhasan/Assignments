// qno1

const num = document.querySelector("#num")
const head = document.querySelector("#head")

 function rin(){ if( num.value%3==0){
     head.innerHTML= "The number i dicible by 3 " ;
 }
 else{
head.innerHTML=  "no thee number i not diviible by 3" ;
 }}

//  qno2

function check(){
    if(num.value%2==0){
        head.innerHTML = "the number i odd"
    }
    else{
        head.innerHTML="the number i even"
    }
}

// qno3
const num2 = document.querySelector("#age")
function age(){
    if(num2.value >= 18){
        head.innerHTML= "old enough"
    }
    else{
        head.innerHTML= "to young"
    }
}

// qno4


const name = document.querySelector("#name")
function nam(){
    if(name.value=="Wajih ul hasan"){
        head.innerHTML="hello ajih ul haan"
    }
    else{
        head.innerHTML="please enter correct name"
    }
}

// Q7 ANS
// Check Calculations /*-+


// let num1 = prompt("Enter num1")
// let num2 = prompt("Enter num2")

// function cal(){
//     console.log(num1 + num2);
// }
// cal()

// Q8 ANS
// Clock Format

// let time = prompt("Enter Time!")

// if (time >= 7 && time <= 11) {
//     console.log("Good Morning!");
// }
// else if (time >= 11 && time <= 1) {
//     console.log("Good After Noon!");
// } 
// else if (time >= 1 && time <= 6) {
//     console.log("Good Evening!");
// } 
// else {
//     console.log("Good Night!");
// }


// Q9 ANS
// Leap year

// let year = prompt("Enter Year!")

// if (year % 400 == 0) {
//     console.log(year + " is a leap Year");
    
// } else {
//     console.log(year + " is not a leap Year");
// }

// Q10 ANS
// Passowrd Checker
// let usersPass = prompt("Enter Passowrd!")
// let Passowrd = "123456"

// if (Passowrd == usersPass) {
//     console.log("Correct You Entered The conrrect Passowrd");
    
// } else {
//     console.log(alert("Please Enter The Correct Password!"));
    
// }

// Q11 ANS
// Name Checker

// let usersName = prompt("Enter Your Name!")

// if (usersName === "Wajid") {
//     document.write("hello " + usersName + "You Entered Correct Name ")
// } else {
//     document.write("You Entered Wrong Name " + usersName )
// }



//  Q13 ANS
// Intiger Equal

// let num1 = +prompt("Enter Num 1")
// let num2 = +prompt("Enter Num 2")

// if (num1 > num2) {
//     console.log(`The larger Number is ${num1}`);
    
// }else if(num1 < num2){
//     console.log(`The larger Number is ${num2}`);
// }else{
//     console.log(`Both Numbers Are Equal!`);
// }



// Q14 ANS
// Positive OR Negative 

// let num = prompt("Enter Any Number!")

// if (num  % 2 == 0) {
//     console.log("The number is Positive");
// }else{
//     console.log("The number is Negative");
// }

// Q15 ANS
// Food Timer

    // let time = prompt("Enter Time")

    // if (time >= 6 && time < 9) {
    //     console.log(`Its Time To BreakFast!`);
        
    // }
    // else if (time >= 11 && time < 14) {
    //     console.log(`Its Time To Lunch!`);
        
    // }
    // else if (time >= 14 && time < 18) {
    //     console.log(`Its Time To Dinner!`);
    // }
    // else {
    //     console.log(`Sorry, you'll have to wait, or go get a snack.`);
    // }





// Q16 ANS
// type Checker

// let a = "Hello"
// let b = 20
// let c = true
// let d =

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));


// Q17 ANS
// comparison operator

// let num = +prompt("Enter Number!")

// if (num == 10 ) {
//     console.log(`10 is Equal to ${num}`);
    
// } else {
//     console.log(`10 is NOT Equal to ${num}`);
// }


// Q20
// Check Age

// let age = prompt("Enter You Age!");

// if (age > 18) {
//     console.log("Old Enough");
    
// } else {
//     console.log("Young Enough");
// }


