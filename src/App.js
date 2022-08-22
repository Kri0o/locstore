import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from '../src/component/Footer';
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";

function App() {
  return (
    <>
 <Navbar/>
<Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/products" element={<Products/>} />
 <Route path="/products/:id" element={<Product/>} />
 <Route path ="/panier" element={<Cart/>} />
 </Routes>
 <Footer/>
    </>
  );
}

export default App;
