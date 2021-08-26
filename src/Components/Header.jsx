import React from 'react';
import './Header.css';
import {ReactComponent as Reactbag} from '../assets/abag.svg';
import {ReactComponent as Reactlogo} from '../assets/react.svg';
import {
    Link,
  } from "react-router-dom";

export default function Header({countcart}){
    return(
        <header>
            <div className="container">
                <div className="nav">
                <Link to ="/"> 
                    <div className="brand-logo">
                            <Reactlogo className="svg-brand"/>
                    </div>
                    </Link>
                    <Link to ="/basket"> 
                    <div className="shopping-bag">
                            <Reactbag className="svg-logo"/>
                            <span className="count">{countcart ? countcart : 0}</span>  
                    </div>
                    </Link>
                </div>
            </div>
        </header>
    )
};