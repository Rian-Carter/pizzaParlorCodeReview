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

$(document).ready(function() {
  $("#pizzaFormSubmit").click(function(event) {
    event.preventDefault();
    let nameInput = $("#customerNameInput").val();
    let sizeInput = $("#pizzaSizeInput").val();
    let toppingsInput = [];
    $("#pizzaToppings input:checkbox[name=toppings]:checked").each(function() {
      toppingsInput.push($(this).val())
    });

    let onePizza = new Pizza(sizeInput, toppingsInput);
    let customerOne = new Customer(nameInput);
    customerOne.order.push(onePizza);

    $(".output").show()
    $(".outName").text(customerOne.name);
    for (let i = 0; i < customerOne.order.length; i++) {
      let i;
      $(".outOrder").append("One " + customerOne.order[i].size + " pizza with " + customerOne.order[i].numberOfToppings + " toppings." + '<br>');
    }
    $(".outputTotal").text(customerOne.orderCost);
  });
});

