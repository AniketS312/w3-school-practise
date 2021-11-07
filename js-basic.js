const defaultText = document.getElementById('text');
const defaultTextTwo = document.getElementById('text-two');
const button = document.getElementById('button');

//////////// Write a JavaScript program to display the current day and time in the following format
// const time = new Date();
// console.log(time)

// const weekdays = ['Monday',
// 'Tuesday',
// 'Wednesday',
// 'Thursday',
// 'Friday',
// 'Saturday',
// 'Sunday']

// defaultText.innerText = `Today is: ${weekdays[time.getDay()]}`;

// const hour = time.getHours() > 12 ? `${time.getHours() - 12} PM`: `${time.getHours > 12} AM`;
// const minutes = time.getMinutes();
// const seconds = time.getSeconds();

// console.log(hour)

// defaultTextTwo.innerText = `Current time is:${hour}: ${minutes}: ${seconds} `

/////////////////  Write a JavaScript program to print the contents of the current window.

// button.addEventListener('click', function() {
//     window.print();
// })

// ///////// Write a JavaScript program to get the current date. 

// const time = new Date();
// console.log(time)

// const day = time.getUTCDate();
// const month = time.getUTCMonth() + 1;
// const year = time.getUTCFullYear();

// defaultText.innerText = `${day}/${month}/${year}`;

///////////// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

// button.addEventListener('click', function() {
//     defaultTextTwo.innerText = (5 + 6 + 7) / 2;
// })

//*********** */ Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 

// defaultTextTwo.innerText = 'W3resource'

// button.addEventListener('click', function () {
//     const newText = defaultTextTwo.innerText;
//     const letter = newText.split('').pop();
//     newText.split('').unshift(letter).join('')
//     console.log(letter, newText)

// })

// ///////// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

// const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber)

// const showPromt = prompt('Please enter a number between 1 - 10')

// if(+showPromt === randomNumber) {
//     defaultText.innerText = 'Your guessed right!'
// } else {
//     defaultText.innerText = 'You are wrong'
//     console.log(+randomNumber, +showPromt);
// }

///////////////// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100

// function checkTwoNumbers(a, b) {
//     if ((a <= 60 && a >= 40) && (b >= 40 && b <= 60)) return true;
//     return false
// }

// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string. 

// function checkChar(str, char) {
//     ctr = 0
//     for (let i = 0; i < str.length; i++) {
//         if((str.charAt(i) == char) && (i >= 1 && i <= 3)) {
//            ctr = 1;
//            break;
//         }
//     }
//         if (ctr == 1) return true;
//             return false;
// }

// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case. 
function convertString(passedString) {
    if (passedString.length < 3 ) {
        return passedString.toUpperCase();
    }
    frontPrt = (passedString.subString(0, 3))
}