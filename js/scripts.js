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

$("order-form").submit(function(event) {
  event.preventDefault();
  let nameInput = $("#customerNameInput").val();
  let customer = new Customer(nameInput);
  $(this).find(".pizzaToppings input:checkbox[name=topping]:checked").each(function() {
    toppingsInput.push($(this).val());
  });
  let Pizza = new Pizza(sizeInput, toppingsInput);
  customer.order.push(Pizza);

  newPizza.countToppings();
  newPizza.onePizzaCost();
  Customer.orderCost += newPizza.cost;
});