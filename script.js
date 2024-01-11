/* Introduction to JavaScript */
//Basics of JavaScript

console.log("Thanks for watching, please like comment and subscribe.");

/* Variables and Data Types */
//Variables
var name = "ABM";
var lastName = "Code";
console.log(name + lastName);

let fullName = "ABM CODE";
console.log(fullName);
fullName = "ABM CODE TEST";
console.log(fullName);

const gender = "male";
console.log(gender);

let string = "ABMC";
let integer = 20;
let floa5 = 20.5;
let booleans = true;
let array = [];
let object = {};

/* Operators */
//Arithmetic operators
let productAQuantity = 4; //Quantity
let productAPrice = 400;
let productATotal = productAPrice * productAQuantity;
console.log("Product A: ", productATotal);

let productBPrice = 500;
let productBQuantity = 5;
let productBTotal = productBPrice * productBQuantity;
console.log("Product B: ", productBTotal);

let totalAmount = productATotal + productBTotal;
console.log("Total: ", totalAmount);

//Comparison operators
let compareProductQuantity = productAQuantity == productBQuantity;
console.log(
  "Compare",
  productAQuantity,
  "==",
  productBQuantity,
  compareProductQuantity
);

let compareisEqual = "5" == 5;
console.log("Compare with ===", compareisEqual);
let compareNotEqual = 4 != 5;
console.log("Compare not equal !=", compareNotEqual);

//Logical operators
//&& // AND
//|| // OR
let andOperator = 5 == 5 && 4 == 5;
console.log("andOperator", andOperator);

let orOperator = 5 == 5 || 4 == 5;
console.log("orOperator", orOperator);

/* Control Flow */
//Conditional statements (if, else if, else)
if (totalAmount > 5000) {
  console.log(totalAmount, "You are eligible for free delivery");
} else if (totalAmount > 4000) {
  let deliveryCharges = 200;
  totalAmount = totalAmount + deliveryCharges;
  console.log(totalAmount, "You are not eligible for free delivery");
} else {
  let deliveryCharges = 500;
  totalAmount = totalAmount + deliveryCharges;
  console.log(totalAmount, "You are not eligible for free delivery");
}
//Switch statements
console.log("Current Amount", totalAmount);
let today = "Tuesday";
let discount = 0;
switch (today) {
  case "Monday":
    discount = 200;
    break;
  case "Tuesday":
    discount = 100;
    break;
  default:
    discount = 0;
}
totalAmount = totalAmount - discount;
console.log("New Amount", totalAmount);
//Loops (for, while)
let date1 = 1;
let date2 = 2;
for (let i = 1; i <= 31; i++) {
  console.log("LoopValue", i);
}

let x = 1;
while (x <= 31) {
  console.log("WhileValue", x);
  x++;
}

/* Functions */
//Declaring functions
function getDiscount() {
  return 500;
}
let currentDiscount = getDiscount();
console.log("Current Discount", currentDiscount);
//Parameters and return values
function applyDiscount(totalAmount) {
  let currentDiscount = getDiscount();
  totalAmount = totalAmount - currentDiscount;
  return totalAmount;
}
let newAmount = applyDiscount(totalAmount);
console.log("new Amount", totalAmount, newAmount);
//Function expressions
let newDiscount = function () {
  return 1000;
};
console.log("new discount", newDiscount());
/* Arrays */

//Creating arrays
let products = ["apple", "samsung", "google"];
console.log("products", products);

console.log("get one product", products[1]);

let productWithDetails = [["apple", 5000], "samsung", "google"];
console.log("get one product", productWithDetails);
console.log("product name", productWithDetails[0][0]);
console.log("product price", productWithDetails[0][1]);

//Accessing and modifying array elements
products[1] = "MI";
console.log("new products", products);
productWithDetails[0][1] = 10000;
console.log(productWithDetails);
//Array methods
products.push("One Plus");
console.log("Array Method", products);
console.log("Array 3", products[3]);

/* Objects */

//Creating objects
let productInfo = { name: "Apple", price: 9000 };
console.log("productInfo", productInfo);
console.log("Product Name:", productInfo.name);
console.log("Product Price:", productInfo.price);

let productWithMoreDetails = [
  { name: "Apple", price: 6000 },
  { name: "Samsung", price: 4000 },
  { name: "Google", price: 4000 },
];
console.log("productWithMoreDetails", productWithMoreDetails);
console.log("Samsung Price", productWithMoreDetails[1]["price"]);

//Accessing and modifying object properties
console.log("productInfo", productInfo);
console.log("Product Name:", productInfo.name);
console.log("Product Price:", productInfo.price);
productInfo.name = "Google";
productInfo.price = 6000;
console.log("Product Name:", productInfo.name);
console.log("Product Price:", productInfo.price);
//Object methods
let calculate = {
  add: function (x, y) {
    return x + y;
  },
};
console.log("calculate", calculate);
console.log("calculate", calculate.add(2, 3));

/* Events */
function addToCart() {
  console.log("Button Clicked");
}
document.getElementById("subscribe").addEventListener("click", function () {
  console.log("Subcribe Button Clicked.");
});

document.getElementById("myId").addEventListener("click", function () {
  console.log("Clicked");
});

/* DOM Manipulation */
function changeText() {
  let textContent = document.getElementById("myContent").textContent;
  console.log(">>", textContent);
  document.getElementById("myContent").textContent = "New Text";
}
