// Simple code to calculate the total price by combning the tax 
const prices = [20, 40, 60];
const tax = price => price * 0.5;
const totalPrice = prices.map(price => tax(price));

console.log("The initial price is $" + price);
concole.log("Prices with tax: $"+totalPrice);