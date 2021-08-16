//1

// var first = prompt("first name");
// var last = prompt("last name");
// if(first.length > last.length){
//     console.log(first);
// }
// else if(last.length > first.length){
//     console.log(last);
// }
// else{
//     console.log("even");
// }

//2

// var first = prompt("first name");
// var last = prompt("last name");
// function printeLongerName(firstS, lastS){
//     if(firstS.length > lastS.length){
//         console.log(firstS);
//         return;
//     }
//     else if(lastS.length < firstS.length){
//         console.log(lastS);
//         return;
//     }
//     else{
//         console.log("even");
//         return;
//     }
// }

// console.log(printeLongerName(first,last));

//3

// var first = prompt("first name");
// var last = prompt("last name");
// function findFirstByLetter(firstS){
//     for(let i = 0; i < firstS.length;i++){
//         if(firstS[i] == 'a'){
//             console.log("have");
//             return
//         }

//     }
// }

// console.log(findFirstByLetter(first));

// var last = prompt("last name");
// function findLastByLetter(lastS){
//     let counterA=0;
//     let counterP=0;
//     let counterI=0;
//     for(let i = 0; i < lastS.length;i++){
//         if(lastS[i] == 'a'){
//             counterA++;
//         }
//         if(lastS[i] == 'p'){
//             counterP++;
//         }
//         if(lastS[i] == 'i'){
//             counterI++;
//         } 
//     }
   
//     if (counterA) {
//         console.log("we have " + counterA + " a");
//     }else{
//         console.log("have not a");
//     }
//     if (counterP) {
//         console.log("we have " + counterP + " p");
//     }else{
//         console.log("have not p");
//     }
//     if (counterI) {
//         console.log("we have " + counterI + " i");
//     }else{
//         console.log("have not i");
//     }
// }
// findLastByLetter(last);

//3

// var fullName = prompt("enter full name");
// console.log(fullName.length);
// for (let i = 0; i < fullName.length; i++) {
//     var counter=0;
//     if(fullName[i] == " "){
//        counter++;
//     }    
// }


// var fullName = prompt("enter full name");

// function getLengthString(nameLength){
//     return fullName.length;
// }

// function isSpace(space){
//     if(space.indexOf(" ") > -1){
//         return true;
//     }
//     return false;
// }

// function printeFirstHelf(nameCheck){
//     var firstHalf = nameCheck.substring(0,nameCheck.indexOf(" "));
//     return
// }

// function printeLastHelf(nameCheck){
//     var firstHalf = nameCheck.substring(0,nameCheck.indexOf(" ")+1);
//     return
// }


// console.log(getLengthString(fullName));
// console.log(isSpace(fullName));
// console.log(printeFirstHelf(fullName));
// console.log(printeLastHelf(fullName));


// var firstName = "haim";
// console.log("hello "+ firstName);
// console.log('hello ${firstName}');

//4

// var fullName = prompt("enter full name");
// function getString(stringLength){
//     if(stringLength.length > 5){
//         return "long";
//     }
//     else{
//         return "short"
//     }
// }

// console.log(getString(fullName));

//5

// var cuntryName = prompt("enter cuntry name");
// function getCuntryName(cuntryLength){
//     if(cuntryLength.length >= 3){
//         return "yes";
//     }
//     else{
//         return "no";
//     }
// }

// console.log(getCuntryName(cuntryName));

//6


// var theString = prompt("enter the string");
// var theLetter = prompt("enter the latter");
// function getStringAndLetter(string ,letter){
//     if(string.length > 6){
//         return string;
//     }
//     return string.indexOf(letter)
// }

// console.log(getStringAndLetter(theString,theLetter));

//7

// var theString = prompt("enter the string");
// var theLetter = prompt("enter the latter");
// function getStringAndLetter(string, letter){
//     var count=0;
//     for (let i = 0; i < theString.length; i++) {
//         if(theLetter == theString[i]){
//         count++;
//         }   
//     }   
//     if(count){
//         return theString.indexOf(theLetter);
//     }
//     return string;
// }

// console.log(getStringAndLetter(theString, theLetter));


//8

// var FirstName = prompt("enter first name");
// var LastName = prompt("enter last name");
// function getFullName(first,last){
//     return FirstName[0] + ". " + LastName.toUpperCase();
// } 

// console.log(getFullName(FirstName,LastName));

//9

// var lastName1 = prompt("enter first name");
// var LastName2 = prompt("enter last name");
// function getLastsNames(lastOne,lastTwo){
//     if(lastOne.length > lastTwo.length){
//         console.log(lastTwo.toLowerCase());
//         return lastOne
//     }
//     if(lastOne.length < lastTwo.length){
//         console.log(lastOne.toLowerCase());
//         return lastTwo
//     }
// }

// console.log(getLastsNames(lastName1,LastName2));

//10

// var name1 = prompt("enter your name");
// var letter = prompt("enter the letter");
// function getNameAndLetter(theName,theLetter){
//     for (let i = 0; i < theName.length; i++) {
//     if(theName[i] == letter){
//         return theName;
//     }
    
//     }
//     console.log("not exist");
// }

// console.log(getNameAndLetter(name1,letter));