// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { 
    name: 'pepperoni',
    price: 1,
    state: true,
    btnSelector: ".btn.btn-pepperoni",
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1,
    state: true,
    btnSelector: ".btn.btn-mushrooms",
  },
  greenPeppers: { 
    name: 'Green Peppers',
    price: 1,
    state: true,
    btnSelector: ".btn.btn-green-peppers",
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3,
    state: false,
    btnSelector: ".btn.btn-sauce",
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5,
    state: false,
    btnSelector: ".btn.btn-crust",
  }
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (ingredients.pepperoni.state) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((node) => {
    if (ingredients.mushrooms.state) {
      node.style.visibility = 'visible'
    } else {
      node.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((node) => {
    if (ingredients.greenPeppers.state) {
      node.style.visibility = 'visible'
    } else {
      node.style.visibility = 'hidden'
    }
  })
}
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (ingredients.whiteSauce.state) {
    document.querySelector(".sauce").classList.add("sauce-white")
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white")
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (ingredients.glutenFreeCrust.state) {
    document.querySelector(".crust").classList.add("crust-gluten-free")
  } else {
    document.querySelector(".sauce").classList.remove("crust-gluten-free")
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  for (let i in  ingredients) {
    if (ingredients[i].state) {
      document.querySelector(ingredients[i].btnSelector).classList.add('active')
    } else {
      document.querySelector(ingredients[i].btnSelector).classList.remove('active')
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = basePrice;
  let ingredientBilling = document.querySelector(".panel.price ul")

  ingredientBilling.innerHTML = ""

  for (let i in ingredients) {
    if (ingredients[i].state) {
      let ingredientLi = document.createElement("li")
      ingredientLi.innerText = `$${ingredients[i].price} ${ingredients[i].name}`

      ingredientBilling.appendChild(ingredientLi)

      total += ingredients[i].price
    }
  }

  document.querySelector(".panel.price strong").innerHTML = `$${total}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
for (let i in ingredients) {
  document.querySelector(ingredients[i].btnSelector).addEventListener('click', function () {
    ingredients[i].state = !ingredients[i].state;
    renderEverything();
  })
}

