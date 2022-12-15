import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import MainLayout from './components/layout/MainLayout';
import Products from './components/content/Products';
import About from './components/content/About';
import Notfound from './components/content/Notfound';
import Notification from './components/Notification';

function App() {
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
