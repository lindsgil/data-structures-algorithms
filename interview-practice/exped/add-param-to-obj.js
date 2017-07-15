//Write a function that takes in fruit and its price

let myFruitArray = [];

function addFruit(name, price) {
  myFruitArray.push({ 'name': name, 'price': price});
}

addFruit('orange', 5);
addFruit('strawberr', 7);
console.log(myFruitArray);
