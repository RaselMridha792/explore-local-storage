const getShoppingCart = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
    
}

const saveProductToLocalStorage = (product, quantity)=>{
    const cart = getShoppingCart();
    cart[product] = quantity;
    const stringify = JSON.stringify(cart);
    console.log(stringify);
    localStorage.setItem('cart', stringify);
}