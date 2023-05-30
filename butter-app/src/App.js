import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MyWalletPage from './pages/MyWalletPage/MyWalletPage';
import SocialPage from './pages/SocialPage/SocialPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="wallet" element={<MyWalletPage />} />
        <Route path="social" element={<SocialPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
