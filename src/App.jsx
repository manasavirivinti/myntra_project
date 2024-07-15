import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Products } from './Components/Product';
import { Route, Routes } from 'react-router-dom';
import { ProductDetails } from './Components/ProductDetails';
import  Cart  from './Components/Cart';
import Login from './Components/login';
import Done from './Components/Done';
import Coins from './Components/coins';
import { PointsProvider } from './Components/pointsContext';
import { AuthProvider } from './Components/AuthContext';
import { CartProvider } from './Components/CartContext';
import Reels from './Components/reels';
function App() {
    return (
        <PointsProvider>
            <CartProvider>
            <AuthProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetails />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/done" element={<Done />} />
                        <Route path="/coins" element={<Coins />} />
                        <Route path="/reels" element={<Reels />} />
                    </Routes>
                    </AuthProvider>
                </CartProvider>
            
        </PointsProvider>
    );
}

export default App;
