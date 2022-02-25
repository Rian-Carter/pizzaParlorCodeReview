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