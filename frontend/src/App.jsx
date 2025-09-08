import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer.jsx';
import { Products } from './pages/Products.jsx';
import { NavbarShop } from './components/NavbarShop.jsx';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { LandingPage } from './pages/LandingPage.jsx';

function App() {
  return (
    <>
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <Router>
          <NavbarShop />
          <Routes>
            <Route path="*" element={ <Products /> } />
          </Routes>
          <Footer />
        </Router>
      </SignedIn>
    </>
  )
}
export default App
