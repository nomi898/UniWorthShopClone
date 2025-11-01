import { BrowserRouter, Routes, Route } from "react-router"; 
import HomePage from './Pages/HomePage';
import Layout from './Components/Layout/Layout';
import ProductDetail from './Pages/ProductDetail';
import CategoryPage from './Pages/CategoryPage'; // <-- New category page
import ScrollToTop from "./Components/Layout/ScrollToTop";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
