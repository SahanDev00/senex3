import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductsPage from './Components/ProductsPage';
import SearchResults from './Components/SearchResults';
import { SearchProvider } from './SearchContext';
import SliderComponent from './Components/SliderComponent';
import Home from './Pages/Home';
import Product from './Pages/Product';
import bgPic from "./Assets/Images/BackgroundPic.jpg";
import Login from './Pages/Login';
import ProductDescription from './Components/ProductDescription';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';
import Checkout from './Components/Checkout';
import Profile from './Components/Profile';
import Orders from './Components/Orders';
import OrderDetails from './Components/OrderDetails';
import EditProfile from './Components/EditProfile';
import EditPassword from './Components/EditPassword';
import { PrimeReactProvider } from 'primereact/api';
import Footer2 from './Components/Footer2';
import Tabs from './Components/Tabs';
import OurPolicies from './Pages/OurPolicies';

function BackgroundImages() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className='absolute opacity-25'>
      <img 
        className={`object-cover ${isActive('/') ||  isActive('/product') ||  isActive('/edit-password') ||  isActive('/edit-profile') || isActive('/order-details') || isActive('/orders') || isActive('/cart') || isActive('/login') || isActive('/checkout') || isActive('/about-us') || isActive('/profile') || isActive('/contact-us') ? 'h-screen w-screen' : 'min-h-[120vh] w-screen'}`} 
        src={bgPic} 
        alt="background" 
      />
    </div>
  );
}

function App() {
  return (
    <PrimeReactProvider>
      <SearchProvider>
        <CartProvider>
          <div className="App bg-black">
            <Router>
              <BackgroundImages />
              <Navbar />
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/product" element={<Product />}>
                  <Route path='/product' element={<>
                      <SliderComponent />
                      <Tabs />
                      </>} />
                  <Route path="/product/products/:categoryName" element={<ProductsPage />} />
                  <Route path="/product/products/:categoryName/:subCategoryID" element={<ProductsPage />} />
                  <Route path="/product/:productId" element={<ProductDescription />} />
                  <Route path="/product/search" element={<SearchResults />} />
                </Route>
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/order-details/:orderID" element={<OrderDetails />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/edit-password" element={<EditPassword />} />
                <Route path="/our-policies" element={<OurPolicies />} />
              </Routes>
              <Footer2 />
            </Router>
          </div>
        </CartProvider>
      </SearchProvider>
    </PrimeReactProvider>
  );
}

export default App;
