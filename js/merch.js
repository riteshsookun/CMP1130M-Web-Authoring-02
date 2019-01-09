// JavaScript Document
if (document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
} 
	else
		{
			ready();
		}

function ready(){
	var removeCartItemButtons = document.getElementsByClassName("btn btn-danger");
console.log(removeCartItemButtons);

for (var i = 0 ; i < removeCartItemButtons.length; i++) {
	var button = removeCartItemButtons[i];
	button.addEventListener('click', removeCartItem);
	}
	
	var qtyInputs = document.getElementsByClassName("cart-quantity-input");
	for (var i = 0 ; i < qtyInputs.length; i++) {
		var input = qtyInputs[i];
		input.addEventListener('change', qtyChanged);
	}
	
	var addToCartButtons = document.getElementsByClassName("merch-price-box");
	for (var i = 0 ; i < addToCartButtons.length; i++) {
		var button = addToCartButtons[i];
		button.addEventListener('click', addToCartClicked);
	}
	
	document.getElementsByClassName("btn btn-primary btn-purchase")[0].addEventListener("click", completedPurchase);
	
}

function removeCartItem(event){
	var buttonClicked = event.target; 
		buttonClicked.parentElement.parentElement.remove();
		updateCartTotal();	
}

function qtyChanged(event){
	var input = event.target;
	if (isNaN(input.value) || input.value <= 0){
		input.value = 1;
	}
	updateCartTotal();
}

function addToCartClicked(event){
	var button = event.target;
	var merchItem = button.parentElement.parentElement;
	var itemTitle = merchItem.getElementsByClassName("merch-item-title")[0].innerText;
	var itemPrice = merchItem.getElementsByClassName("merch-price-box")[0].innerText;
	var itemImgSrc = merchItem.getElementsByClassName("merch-item-img")[0].src;
	addItemToCart(itemTitle, itemPrice, itemImgSrc);
	updateCartTotal();
}

function addItemToCart(itemTitle, itemPrice, itemImgSrc){
	var cartRow = document.createElement('div');
	
	var cartItems = document.getElementsByClassName("cart-items")[0];
	cartRow.classList.add("cart-row");
	var allCartItems = cartItems.getElementsByClassName("cart-item-title")
		for (var i = 0; i<allCartItems.length; i++){
			if (allCartItems[i].innerText == itemTitle){
				alert("This item already in your cart. Please use the quantity selectors if you wish to purchase more than one");
				return;
			}
		}
	var NewCartRow = `
	
				<div class="cart-item cart-column">
				<img class="cart-item-image" src="${itemImgSrc}">
					<span class="cart-item-title"> ${itemTitle}</span>
				</div>
				<span class="cart-price cart-column"> ${itemPrice} </span>
				<div class="cart-quantity cart-column">
				<input class="cart-quantity-input" type="number" value="1">
				<button class="btn btn-danger" type="button">REMOVE</button>
				</div>
         ` ;
	
	cartRow.innerHTML= NewCartRow;
	
	cartItems.append(cartRow);
	
	cartRow.getElementsByClassName("btn btn-danger")[0].addEventListener("click", removeCartItem);
	cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", qtyChanged);
	
}

function updateCartTotal(){
	var cartItemContainer = document.getElementsByClassName("cart-items") [0];
	var cartRows = cartItemContainer.getElementsByClassName("cart-row");
	var total = 0;
	
	for (var i = 0 ; i < cartRows.length; i++) {
		var cartRow = cartRows[i];
		var priceElement = cartRow.getElementsByClassName("cart-price")[0];
		var qtyElement = cartRow.getElementsByClassName("cart-quantity-input") [0];
		var price = parseFloat(priceElement.innerText.replace('£',''));
		var qty = qtyElement.value;
		total = total + (price * qty);
	}
	total = Math.round(total * 100 )/100;
	document.getElementsByClassName("cart-total-price")[0].innerText = "£" + total;
}

function completedPurchase(){
	alert("Thank you for your purchase.");
	var allCartItems = document.getElementsByClassName('cart-items')[0];
	while (allCartItems.hasChildNodes()){
		allCartItems.removeChild(allCartItems.firstChild);
	}
	updateCartTotal();
}