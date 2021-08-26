import React from 'react';
import './Main.css';
import Product from './Product';

export default function Main({ product, onAdd}){
    return(
        <section className="products">
            <div className="container">
                <h1 className="heading">Discover</h1>
                <div className="product-grid">
                   {product.map((product) => (
                       <Product product = {product} onAdd={onAdd} ></Product>
                   ))} 
                </div>
            </div>
        </section>
    )
};