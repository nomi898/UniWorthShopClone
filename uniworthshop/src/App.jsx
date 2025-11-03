import { BrowserRouter, Routes, Route } from "react-router"; 
import HomePage from './Pages/HomePage';
import Layout from './Components/Layout/Layout';
import ProductDetail from './Pages/ProductDetail';
import CategoryPage from './Pages/CategoryPage'; 
import ScrollToTop from "./Components/Layout/ScrollToTop";
import Signup from './Pages/Signup';
import Signin from "./Pages/Signin";

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
        </Route>

        {/* auth  */}
        <Route path='/register' element={<Signup />}></Route>
        <Route path= '/signin' element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
