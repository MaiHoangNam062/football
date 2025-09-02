import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Products } from './pages/Products.jsx';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={ <Products /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
