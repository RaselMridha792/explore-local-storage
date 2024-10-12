const getProducts = () => {
  const product = document.getElementById("product-name");
  const quantity = document.getElementById("product-quantity");

  const getProduct = product.value;
  const getQuantity = quantity.value;
  product.value = "";
  quantity.value = "";
  displayProduct(getProduct, getQuantity);
  saveCartOnLocalStorage(getProduct, getQuantity);
};

const displayProduct = (getProduct, getQuantity) => {
  const listContainer = document.getElementById("productList");
  const li = document.createElement("li");
  li.innerText = `${getProduct}${getQuantity}`;
  listContainer.appendChild(li);
};



// get shopping cart from local storage is not give me an empty object 
const getShoppingCar=()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

// save cart on local storage to get item from input method 
const saveCartOnLocalStorage = (product, quantity)=>{
    cart = getShoppingCar();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


// display cart from local storage 

const displayCartFromLocalStorage = () =>{
    const storedCart = getShoppingCar();
    for(const products in storedCart){
        const quantity = storedCart[products];
        console.log(products, quantity);
        displayProduct(products, quantity)
    }
}

displayCartFromLocalStorage()