import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer.jsx';
import { Products } from './pages/Products.jsx';
import { Navbar } from './components/Navbar.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={ <Products /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
