import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon class="fas" icon={faStar} />

export default function Product({product, onAdd}){
    return(
         <div className="product-card">
             <img src={product.image} alt={product.name} className="product-img" />
             <div className="desc">
                 <h1 className="p-info">{product.desc}</h1>
                 <h1 className="p-name">{product.name}</h1>
                 <h1 className="p-rate">
                     {product.rating}
                     {element}
                 </h1>
                 <h1 className="p-price">₹ {product.price}</h1>
             </div>
             <button onClick={() => onAdd(product)}>Add to Cart</button>
         </div>   
    )
};