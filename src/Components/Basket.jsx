import React from 'react';
import './Basket.css';

export default function Basket({onAdd , onRemove, cartItems}){

  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemTax = itemPrice * 0.14;
  const itemShip = itemPrice === 0 ? 0 : 50;
  const total = itemPrice + itemTax + itemShip;
    return(
        <section className="cart">
      <div className="container">
        <div className="cart-set">

          <div className="product-cart">
            <h1>Your Products</h1>
            {cartItems.length === 0 && <div><h2>Cart is empty</h2></div>}
            {
              cartItems.map((item) =>(
                <div className="cart-card">
                  <div className="card-desc flex">
                    <img src={item.image} alt={item.name} />
                    <h1 className="p-info">{item.name}</h1>
                  </div>
                  <div className="card-qty flex">
                  <button className="removebtns" onClick={() =>onRemove(item)}>-</button>
                    <h1>{item.qty}</h1>
                    <button className="addbtns" onClick={() => onAdd(item)}>+</button>
                  </div>
                  <div className="card-price">
                    <h1>₹ {item.price.toFixed(2)}</h1>
                  </div>
                  
                </div>
              ))
            }
 
          </div>
          <div className="summary-cart">
              <h1>Summary</h1>
              <div className="sum-cart">
                <div className="card">
                  <div className="Price col2">
                    <h3>ITEM PRICE</h3>
                    <h3>₹ {itemPrice.toFixed(2)}</h3>
                  </div>
                  <div className="Tax col2">
                    <h3>ITEM TAX</h3>
                    <h3>₹ {itemTax.toFixed(2)}</h3>
                  </div>
                  <div className="ship col2">
                    <h3>SHIPPING</h3>
                    <h3>₹ {itemShip.toFixed(2)}</h3>
                  </div>
                  <div className="total col2">
                    <h3>total amount</h3>
                    <h3>₹ {total.toFixed(2)}</h3>
                  </div>
                  <button className="btns">CheckOut</button>
                </div>

              </div>

          </div>
        </div>
      </div>
    </section>
    )
};