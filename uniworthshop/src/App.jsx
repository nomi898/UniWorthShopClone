import { BrowserRouter, Routes, Route } from "react-router"; 
import HomePage from './Pages/HomePage';
import Layout from './Components/Layout/Layout';
import ProductDetail from './Pages/ProductDetail';
import CategoryPage from './Pages/CategoryPage'; 
import CartPage from './Pages/CartPage';
import ScrollToTop from "./Components/Layout/ScrollToTop";
import Signup from './Pages/Signup';
import Signin from "./Pages/Signin";
import Checkout from './Pages/Checkout';
import SearchResults from './Pages/SearchResults';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page */}
          <Route index element={<HomePage />} />
          {/* Product detail page */}
          <Route path="product/:productId" element={<ProductDetail />} />
          {/* Category page */}
          <Route path="category/:categoryName" element={<CategoryPage />} />
          {/* Cart page */}
          <Route path="cart" element={<CartPage />} />
          {/* Checkout page */}
          <Route path="checkout" element={<Checkout />} />
          {/* Search results */}
          <Route path="search" element={<SearchResults />} />
        </Route>

        {/* auth  */}
        <Route path='/register' element={<Signup />}></Route>
        <Route path= '/signin' element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
