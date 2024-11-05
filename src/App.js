import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // تأكد من أن هذا هو الاستيراد الوحيد لـ Footer
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';
import ProductDetail from './pages/ProductDetail'; 
const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" component={ProductDetail} />
      </Routes>
    </main>
    <Footer /> {/* استخدم Footer هنا */}
  </Router>
);

export default App;
