import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductsPage from './Components/ProductsPage';
import SearchResults from './Components/SearchResults';
import { SearchProvider } from './SearchContext';
import SliderComponent from './Components/SliderComponent';
import Cards from './Components/Cards';
import Home from './Pages/Home';
import Product from './Pages/Product';
import bgPic from "./Assets/Images/background1.webp"
//import bgPic2 from "./Assets/Images/Background2.jpg"
//import bgPic3 from "./Assets/Images/farcry.jpg"
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


function BackgroundImages() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className='absolute opacity-25'>
      <img className={` object-cover ${isActive('/') || isActive('/product') || isActive('/contact-us') ? 'h-screen' : 'min-h-[120vh]'}`} src={bgPic} alt="background" />
      {/*<img className={`${isActive('/about-us') || isActive('/contact-us') || isActive('/edit-profile') || isActive('/edit-password') || isActive('/order-details') || isActive('/login') || isActive('/orders') || isActive('/cart') || isActive('/profile') || isActive('/checkout') ? 'hidden' : ''}`} src={bgPic2} alt="background2" />
      <img className={`${isActive('/') ? '' : 'hidden'}`} src={bgPic3} alt="background2" />*/}
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
              <BackgroundImages/>
              <Navbar/>
              <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/product" element={<Product/>}>
                  <Route path='/product' element={<>
                    <SliderComponent />
                    <Cards />
                    </>} />
                    <Route path="/product/:productId" element={<ProductDescription />} />
                    <Route path="/product/products/:subCategoryName" element={<ProductsPage />} />
                    <Route path="search" element={<SearchResults />} />
                </Route>
                <Route path="/about-us" element={<About/>} />
                <Route path="/contact-us" element={<Contact/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/orders" element={<Orders/>} />
                <Route path="/order-details" element={<OrderDetails/>} />
                <Route path="/edit-profile" element={<EditProfile/>} />
                <Route path="/edit-password" element={<EditPassword/>} />
              </Routes>
              <Footer2/>
            </Router>
          </div>
        </CartProvider>
      </SearchProvider>
    </PrimeReactProvider>
  );
}

export default App;
