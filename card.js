const getProducts = () => {
  const product = document.getElementById("product-name");
  const quantity = document.getElementById("product-quantity");

  const getProduct = product.value;
  const getQuantity = quantity.value;
  product.value = "";
  quantity.value = "";
  displayProduct(getProduct, getQuantity);
  saveProductToLocalStorage(getProduct, getQuantity);
};

const displayProduct = (getProduct, getQuantity) => {
  const listContainer = document.getElementById("productList");
  const li = document.createElement("li");
  li.innerText = `${getProduct}${getQuantity}`;
  listContainer.appendChild(li);
};

// for checking 

const getStoredShoppingCart = ()=>{
    let cart = {}
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}


const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringyfied = JSON.stringify(cart);
    console.log(cartStringyfied);
    localStorage.setItem('cart', cartStringyfied);
};

const displayProductFromLocalStorage=()=>{
    const savedCart = getStoredShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}

displayProductFromLocalStorage()