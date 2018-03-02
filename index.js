var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  // write your code here
  var itemPrice = Math.floor(Math.random() * 100) + 1;
 
  var item = {[itemName]: itemPrice};
  
  cart.push([item]);
  
  console.log(itemName + " has been added to your cart.");
  return cart;
}

function viewCart() {
  // write your code here
  var cartItems = "";
  if (cart.length === 0) {
    cartItems = "Your shopping cart is empty.";
  }
  else if (cart.length ===  1){
    cartItems = "In your cart, you have " + 
    cart[0] + " at $" + cart.hasOwnProperty(cart[0]) +".";
  }
  else {
    cartItems = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      cartItems = cartItems + cart[i] + " at " + cart[i] + ".";
    }
  }
  console.log(cartItems);
}

function total() {
  // write your code here
  var cartValue = 0;
  for (let i=0; i<cart.length; i++) {
    cartValue = cartValue + cart[i];
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
