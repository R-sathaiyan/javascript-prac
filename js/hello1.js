//begining of javascript
console.log("----------- Intro ------------- "+"\nsathaiyan R");
// Variable declarations
var x = 10;     // Function/global scope
let y = 20;     // Block scope
const z = 30;   // Block scope, cannot reassign
console.log("numbers")
console.log(x, y, z);  // Output: 10 20 30
x = 40; y = 50; // Reassigning x and y 
console.log(x, y, z);  // Output: 40 50 30
console.log(x)// Output: 40
// 1. String - text in quotes
let name = "Alice";
let greeting = 'Hello';        // single quotes
let template = `Hi ${greeting}!`;  // template literals (backticks)
console.log(template);    // "string"
let welcome;
var sun=true;
console.log("----------Data Types learning--------------")
//datatypes
console.log(typeof name);//output:string
console.log(typeof x);//output:nuber
console.log(typeof welcome);//output:undefined
console.log(typeof sun);//output:boolean
//concatenation
console.log("----------concatenation learning------------");
let a="hi"
let b=89
let c=a+b;
console.log(c);//output:hi89
//operators learning
console.log("----------operators learning------------");
const d= 90;
const e=1;
console.log(e+d + "(Addition)");//output:91Addition
//equality operators
console.log(d===e +"(equatlity)");//output:false
//notequality operators
console.log("---------notequality operators----------------");
console.log(d!==e);//output:true
// String methods
console.log("----------------String methods---------------------");
console.log("length of greeting: " + greeting.length+" "+"Greeting");//output:5
console.log("Iam a great person in this world".length);//output:36
console.log(greeting.length);//output:5
console.log(greeting.toUpperCase()+" " +"upper case changed");//output:HELLO
console.log(greeting.toLowerCase()+" "+"lower case changed");//output:hello
console.log("------CharAt()-----");
console.log(greeting.charAt(0)+" "+"first character of greeting");//output:H
console.log(greeting.indexOf("l"));
console.log("slice operation");
console.log(greeting.slice(0,4));
console.log("includes() method");
console.log(greeting.includes('ee'));
console.log("----------------If else statement------------------------");
let viewers="show your house"
var show
if(viewers){
    console.log(`enjoy my ${viewers}`);
}
else{
    show="sorry im not able to show you the house";
}
console.log("/n---------------------Tasks---------------------");
// Task 1: Student marks 
const score = prompt("Enter your mark:");
if (score >= 90) {
    console.log("Grade: A");
} else if (score <=75 && score >=89){
    console.log("Grade: B");
} else if (score <=74 && score >=50){
    console.log("Grade: C");
}
else{
    console.log("Grade: Fail");
}
let currentNumber = 0;
let choice;

do {
  choice = prompt(
    "Menu:\n1 → Say Hello\n2 → Enter & Show Current Number\n3 → Exit\n\nEnter your choice (1-3):"
  );

  switch (choice) {
    case "1":
      alert("Hello!");
      break;

    case "2":
      let userInput = prompt("Enter a number:");
      currentNumber = Number(userInput); // store user input
      if (!isNaN(currentNumber)) {
        alert("Current Number is: " + currentNumber);
      } else {
        alert("Invalid number. Please try again.");
      }
      break;

    case "3":
      alert("Exiting program... Goodbye!");
      break;

    default:
      alert("Invalid input. Please enter 1, 2, or 3.");
      break;
  }
} while (choice !== "3");
