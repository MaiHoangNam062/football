import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer.jsx';
import { Products } from './pages/Products.jsx';
import { NavbarShop } from './components/NavbarShop.jsx';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { LandingPage } from './pages/LandingPage.jsx';

function App() {
  return (
    <>
      <Router>
        <NavbarShop />
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="*" element={ <Products /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
