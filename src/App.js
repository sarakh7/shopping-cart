import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import MainLayout from './components/layout/MainLayout';
import Products from './components/content/Products';
import About from './components/content/About';
import Notfound from './components/content/Notfound';
import Notification from './components/Notification';
import { useDispatch } from 'react-redux';
import { cartActions } from './store/entities/cart/cartSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
        dispatch(cartActions.setCart(cart));
    }
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <Routes>
        <Route path='/' element={<MainLayout><Products /></MainLayout>} />
        <Route path='/cart' element={<MainLayout><Cart /></MainLayout>} />
        <Route path='/about' element={<MainLayout><About /></MainLayout>} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
