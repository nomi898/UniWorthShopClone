import { useParams, useLocation } from "react-router";
import products from "../DummyData/Products"; // your products data

const CategoryPage = () => {
  const { categoryName } = useParams(); // e.g., "WINTER COLLECTION"
  const location = useLocation();

  // Parse query params
  const searchParams = new URLSearchParams(location.search);
  const subcategoryName = searchParams.get("subcategory"); // e.g., "Sweaters"
  
  // Filter products by category and subcategory
  const categoryData = products.find(
    (cat) => cat.name === categoryName
  );

  const subcategoryData = categoryData?.subcategories.find(
    (sub) => sub.name === subcategoryName
  );

  const productsToDisplay = subcategoryData?.products || [];

  return (
    <div>
      <h1>{subcategoryName}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {productsToDisplay.map((prod) => (
          <div key={prod.id} style={{ width: "200px" }}>
            <img src={prod.image} alt={prod.name} style={{ width: "100%" }} />
            <p>{prod.name}</p>
            <p>PKR {prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
