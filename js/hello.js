// //begining of javascript
// console.log("----------- Intro ------------- "+"\nsathaiyan R");
// // Variable declarations
// var x = 10;     // Function/global scope
// let y = 20;     // Block scope
// const z = 30;   // Block scope, cannot reassign
// console.log("numbers")
// console.log(x, y, z);  // Output: 10 20 30
// x = 40; y = 50; // Reassigning x and y 
// console.log(x, y, z);  // Output: 40 50 30
// console.log(x)// Output: 40
// // 1. String - text in quotes
// let name = "Alice";
// let greeting = 'Hello';        // single quotes
// let template = `Hi ${greeting}!`;  // template literals (backticks)
// console.log(template);    // "string"
// let welcome;
// var sun=true;
// console.log("----------Data Types learning--------------")
// //datatypes
// console.log(typeof name);//output:string
// console.log(typeof x);//output:nuber
// console.log(typeof welcome);//output:undefined
// console.log(typeof sun);//output:boolean
// //concatenation
// console.log("----------concatenation learning------------");
// let a="hi"
// let b=89
// let c=a+b;
// console.log(c);//output:hi89
// //operators learning
// console.log("----------operators learning------------");
// const d= 90;
// const e=1;
// console.log(e+d + "(Addition)");//output:91Addition
// //equality operators
// console.log(d===e +"(equatlity)");//output:false
// //notequality operators
// console.log("---------notequality operators----------------");
// console.log(d!==e);//output:true
// // String methods
// console.log("----------------String methods---------------------");
// console.log("length of greeting: " + greeting.length+" "+"Greeting");//output:5
// console.log("Iam a great person in this world".length);//output:36
// console.log(greeting.length);//output:5
// console.log(greeting.toUpperCase()+" " +"upper case changed");//output:HELLO
// console.log(greeting.toLowerCase()+" "+"lower case changed");//output:hello
// console.log("------CharAt()-----");
// console.log(greeting.charAt(0)+" "+"first character of greeting");//output:H
// console.log(greeting.indexOf("l"));
// console.log("slice operation");
// console.log(greeting.slice(0,4));
// console.log("includes() method");
// console.log(greeting.includes('ee'));
// console.log("----------------If else statement------------------------");
// let viewers
// var show
// if(viewers){
//     console.log(`enjoy my ${viewers}`);
// }
// else{
//     show="sorry im not able to show you the house"; 
// }
// console.log("/n-------------------switch case statement-------------------");
// console.log("/n---------------------Tasks---------------------");
// // Task 1: Student marks 
// const score = prompt("Enter your mark:");
// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score <=75 && score >=89){
//     console.log("Grade: B");
// } else if (score <=74 && score >=50){
//     console.log("Grade: C");
// }
// else{
//     console.log("Grade: Fail");
// }
// //The second task is to print numbers from 1 to n using for loop
// console.log("/n---------------------Task 2---------------------");
// const n=prompt("Enter a number:");
// for(let i=1;i<=n;i++){
//     console.log(i);
// }
// console.log("-----------------------in While loop-------------------------");
// let i=1;
// while(i<=n){
  
//   console.log(i);
//   i+=1;
// }
// // The third task is to switch statement
// let currentNumber = 0;
// let choice;

// do {
//   choice = prompt(
//     "Menu:\n1 → Say Hello\n2 → Enter & Show Current Number\n3 → Exit\n\nEnter your choice (1-3):"
//   );

//   switch (choice) {
//     case "1":
//       alert("Hello!");
//       break;

//     case "2":
//       let userInput = prompt("Enter a number:");
//       currentNumber = Number(userInput); // store user input
//       if (!isNaN(currentNumber)) {
//         alert("Current Number is: " + currentNumber);
//       } else {
//         alert("Invalid number. Please try again.");
//       }
//       break;

//     case "3":
//       alert("Exiting program... Goodbye!");
//       break;

//     default:
//       alert("Invalid input. Please enter 1, 2, or 3.");
//       break;
//   }
// } while (choice !== "3");


// console.log("--------------------------switch case statement-------------------------");
// switch(2){
//     case 1:
//         console.log("greeting");
//         break;
//     default:
//         console.log("not a greeting");
// }

// console.log("---------------------functions------");
// // Function declaration with default parameter
// function calculateGrade(scores, passingScore = 50) {
//   // Calculate average
//   let total = 0;
//   for (let score of scores) {
//     total += score;
//   }
//   let average = total / scores.length;

//   // Determine letter grade
//   let grade;
//   if (average >= 90) {
//     grade = "A";
//   } else if (average >= 70) {
//     grade = "B";
//   } else if (average >= 50) {
//     grade = "C";
//   } else {
//     grade = "F";
//   }

//   // Check pass/fail
//   let passed = average >= passingScore;

//   // Return an object
//   return {
//     average: average,
//     passed: passed,
//     grade: grade
//   };
// }

// // Example usage:
// console.log(calculateGrade([80, 90, 70])); 
// // { average: 80, passed: true, grade: 'B' }

// //Array methods
// console.log("---------------------Array methods------------------");
// const sath=["sathaiyan","R","kumar"];
// console.log(sath.length);//output:3
// console.log(sath.concat(" is  a good person"));//output:[ 'sathaiyan', 'R', 'kumar', ' is  a good person' ]
// console.log(sath[4]);
// console.log(sath.shift());//output:sathaiyan
// console.log(sath);//output:[ 'R', 'kumar', ' is  a good person' ]


//16.04.2024
console.log(sath[sath.length-1]);//output: is  a good person
//deleting last elements from an array
console.log(sath.pop());//output: is  a good person
//Adding elements to an array
sath.push("hello");
console.log(sath);//output:[ 'R', 'kumar', 'hello' ]
//to addd elements at the beginning of an array
sath.unshift("welcome");
console.log(sath);//output:[ 'welcome', 'R', 'kumar', 'hello' ]
//to remove elements from the beginning of an array
sath.shift();
console.log(sath);//output:[ 'R', 'kumar', 'hello' ]  
//to find the length of an array
const lastitem=sath.push("hi");
console.log(lastitem);//output:4
console.log(sath.push());//output:5

//Task 3 in arrays
// Sample product list with name, price, and stock status
const products = [
  { name: "Laptop", price: 75000, inStock: true },
  { name: "Headphones", price: 1200, inStock: true },
  { name: "Mouse", price: 800, inStock: false },
  { name: "Keyboard", price: 1500, inStock: true },
  { name: "USB Cable", price: 250, inStock: true }
];

// 1) Filter only in-stock items
function filterInStock(items) {
  return items.filter(item => item.inStock);
}

// 2) Apply a 10% discount using map (returns new objects)
function applyDiscount(items, percent = 10) {
  const factor = 1 - percent / 100;
  return items.map(item => ({
    ...item,
    price: Math.round(item.price * factor) // round to nearest rupee
  }));
}

// 3) Calculate total price using reduce
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// 4) Check price conditions: some over ₹1000 and every under ₹10000
function checkPriceBounds(items) {
  const someOver1000 = items.some(item => item.price > 1000);
  const everyUnder10000 = items.every(item => item.price < 10000);
  return { someOver1000, everyUnder10000 };
}

// Pipeline: filter -> discount -> compute totals and checks -> print names
const inStock = filterInStock(products);
const discounted = applyDiscount(inStock, 10);
const totalPrice = calculateTotal(discounted);
const { someOver1000, everyUnder10000 } = checkPriceBounds(discounted);

// Loop through final list with for...of and print each name
for (const product of discounted) {
  console.log(product.name);
}

// Example console output for totals and checks
console.log("Discounted list:", discounted);
console.log("Total price (₹):", totalPrice);
console.log("Some item over ₹1000:", someOver1000);
console.log("Every item under ₹10000:", everyUnder10000);




//  document.getElementById("p1").textcontent =name;
// // documents.getElementById("p2").textcontent=`greeting`;
// // documents.getElementById("p3").textcontent=`template`;
 
let username=window.prompt("Enter the Username");
console.log("The user entered the user name as"+ " " +username);

//task 4
console.log("---------------------user dashboard=----------------------------");
// Initial user list
const users = [
  { id: 1, name: "Alice", age: 22, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 25, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 30 }, // email missing
];

// ✅ Destructuring + Optional chaining + Nullish coalescing
users.forEach(user => {
  const { name, age, email } = user; // destructuring
  console.log(`Name: ${name}, Age: ${age}, Email: ${email?.toLowerCase() ?? "No email provided"}`);
});

// ✅ Higher-order function with callback (filter users age > 23)
function filterUsers(users, callback) {
  return users.filter(callback);
}

const olderUsers = filterUsers(users, user => user.age > 23);

console.log("\nUsers older than 23:");
olderUsers.forEach(({ name, age }) => {
  console.log(`👤 ${name} is ${age} years old`);
});

// ✅ Spread operator to add a new user
const newUser = { id: 4, name: "Diana", age: 27, email: "diana@example.com" };
const updatedUsers = [...users, newUser];

console.log("\nUpdated User List:");
updatedUsers.forEach(({ name, age }) => {
  console.log(`- ${name} (${age} years old)`);
});


//task 2
console.log("-------------------------DOM------------------");
// ✅ Counter using closure
function createCounter() {
  let count = 0; // private variable (closure)

  return {
    increment() {
      count++;
      console.log(`Count after increment: ${count}`);
    },
    decrement() {
      count--;
      console.log(`Count after decrement: ${count}`);
    },
    getCount() {
      return count;
    },
    // Bonus: rest operator for multiple increments
    multiIncrement(...nums) {
      nums.forEach(num => {
        count += num;
      });
      console.log(`Count after multiIncrement: ${count}`);
    }
  };
}

// Create counter instance
const counter = createCounter();

// ✅ Using methods
counter.increment(); // Count = 1
counter.increment(); // Count = 2
counter.decrement(); // Count = 1

// ✅ Demonstrating 'this', call, apply, bind
const demoObj = {
  value: 10,
  showValue: function(extra) {
    console.log(`Value: ${this.value}, Extra: ${extra}`);
  }
};

// Using call (pass arguments one by one)
demoObj.showValue.call({ value: 20 }, "called");

// Using apply (pass arguments as array)
demoObj.showValue.apply({ value: 30 }, ["applied"]);

// Using bind (creates new function with fixed 'this')
const boundFunc = demoObj.showValue.bind({ value: 40 });
boundFunc("bound");

// ✅ Bonus: rest operator
counter.multiIncrement(2, 3, 5); // Adds 2+3+5 = 10
console.log(`Final Count: ${counter.getCount()}`);

console.log("object");



//17.04.2026

//Type conversion

let p = "123";
let t = Number(p);
t+=1;  
// let s1 = "12.34";
// let n1 = parseFloat(s1);  
console.log(t);
//creating an object
let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);

//creation using new object constructor
let obj1 = new Object();
obj1.name="sathaiyan";
obj1.score=499;
obj1.job="intern";

console.log(obj1);
