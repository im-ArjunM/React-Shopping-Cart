import './App.css';
import Header from './Components/Header.jsx';
import Basket from './Components/Basket.jsx';
import Main from './Components/Main.jsx';
import data from '../src/data.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const {product} = data;

  const [cartItems,setcartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setcartItems(cartItems.map(x=>x.id===product.id ? {...exist, qty: exist.qty +1} : x))
    }else{
      setcartItems([...cartItems, {...product, qty: 1}])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist.qty === 1){
      setcartItems(cartItems.filter(x =>x.id !== product.id))
    }else{
      setcartItems(cartItems.map(x=>x.id===product.id ? {...exist, qty: exist.qty -1} : x))
    }
  }
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/basket">
            <Header countcart={cartItems.length}/>
            <Basket product={product} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
          </Route>
          <Route path="/">
            <Header countcart={cartItems.length}/>
            <Main product={product} onAdd={onAdd}/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
