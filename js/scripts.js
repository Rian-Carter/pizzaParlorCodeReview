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
    let customerName = $('.customerName').val();
    console.log(customerName);
    let pizzaSize = $('input:radio[name=pizzaSize]:checked').val();
    console.log(pizzaSize);
    let topping = [];
    $('input:checkbox[name=toppings]:checked').each(function() {
      const toppingList = $(this).val();
      toppings.push(toppingList)
    })
    console.log(topping);
    let pizzaPie = new Pizza(pizzaSize, toppings);
    console.log(pizzaPie);
    $('.name').text("Hello, ' + customerName + ', your order will be ready shortly!");
  })
});