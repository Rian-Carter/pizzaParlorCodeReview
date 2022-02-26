function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculate = function() {
  let pizzaTotal = 0;
  if (this.size === "small") {
    pizzaTotal += 10;
  } else if (this.size === "medium") {
    pizzaTotal += 15;
  } else if (this.size === "large") {
    pizzaTotal += 20;
  } else if (this.size === "colossal") {
    pizzaTotal += 25;
  }
  pizzaTotal += this.toppings.length * 1;
  return pizzaTotal;
};

$(document).ready(function() {
  $("form#orderPizza").submit(function(event) {
    event.preventDefault();
    let customerName = $('.customerName').val();
    let pizzaSize = $('input:radio[name=pizzaSize]:checked').val();
    let toppings = [];
    $('input:checkbox[name=toppings]:checked').each(function() {
      const toppingList = $(this).val();
      toppings.push(toppingList)
    })
    let pizzaPie = new Pizza(pizzaSize, toppings);
    let resultHold = pizzaPie.calculate();
    $('.name').text("Hello, " + customerName + ", your order will be ready shortly!");
    $('.total').text("$" + resultHold + " is your total");
  })
});
