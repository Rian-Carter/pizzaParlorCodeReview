function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculate = function() {
  let pizzaTotal = 0;
  if (this.size === "small") {
    pizzaTotal += 10;
    console.log(pizzaTotal)
  } else if (this.size === "medium") {
    pizzaTotal += 15;
  } else if (this.size === "large") {
    pizzaTotal += 20;
  }
  pizzaTotal += this.toppings.length * 1;
  return pizzaTotal;
};

$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();
  })
});