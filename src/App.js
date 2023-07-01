import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import {Navbar} from './components/navbar'
import { Home } from "./pages/home";
import {BrandA} from './pages/brand-a'
import {BrandB} from './pages/brand-b'
import {BrandC} from './pages/brand-c'
import {ShopContextProvider} from './context/shopcontext'
import { Cart } from "./pages/cart";
import {Signin} from "./pages/sign-in"
import { Signup } from "./pages/sign-up";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand-a" element={<BrandA />} />
            <Route path="/brand-b" element={<BrandB />} />
            <Route path="/brand-c" element={<BrandC />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
