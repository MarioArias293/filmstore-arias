import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import OrderReview from './components/OrderReview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />;
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />;
          <Route path="/OrderReview/:id" element={<OrderReview />} />;
          <Route path="*" element={<NoPage />} />;
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
