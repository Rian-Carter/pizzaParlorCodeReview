function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.numberOfToppings;
  this.cost;
}

function Customer(name) {
  this.name = name;
  this.order = [];
  this.orderCost = 0;
}

Pizza.prototype.countToppings = function() {
  this.numberOfToppings = this.toppings.length;
}

Pizza.prototype.onePizzaCost = function() {
  if (this.size === "small") {
    this.cost = 10 + this.numberOfToppings;
  } else if (this.size === "medium") {
    this.cost = 20 + this.numberOfToppings;
  } else {
    this.cost = 30 + this.numberOfToppings;
  }
}