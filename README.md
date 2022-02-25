# Planet Pizza

#### Created by Rian Carter

## An application for ordering pizzas

## Link to Planet Pizza

* https://github.com/Rian-Carter/pizzaParlorCodeReview.git

## Technologies Used

* HTML
* CSS
* Javascript
* jQuery

## This application will take user input based on selections made and return a value amount based on pizza size and selected toppings.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Open index.html in a browser

## Tests:

#### Describe: Pizza()

* Test: "It should return a Pizza object with two properties for toppings and size"
* Code: myPizza = new Pizza(["anchovies", "pineapple"], "medium");
* Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

#### Describe: Customer()

* Test: "It should return a Customer object with customer name"
* Code: myCustomer = new Customer("Rian");
* Expected Output: Customer {name: 'Rian'}

* Test: "It should return a Customer object with two properties for customer name and empty array of pizzas"
* Code: myCustomer = new Customer("Rian");
* Expected Output: Customer { name: 'Rian', order: Array(0) }

* Test: "It should return a Customer object with customer name, order, and orderCost"
* Code: myCustomer = new Customer("Rian", ["small", "medium"]);
* Expected Output: Custer {name: 'Rian', order: Array(0), orderCost: 0}

## Known Bugs

* There are no known bugs at this time
* Please forward any bugs to R.Carter86@hotmail.com

## License

* MIT https://en.wikipedia.org/wiki/MIT_License
* Copyright (c) 2/25/2022 Rian Carter