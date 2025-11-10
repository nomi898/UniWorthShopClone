import React from "react";
import { NavLink } from "react-router";
import cat1 from "../../assets/Images/cat1.jpg";
import cat2 from "../../assets/Images/cat2.jpg";
import cat3 from "../../assets/Images/cat3.jpg";
import cat4 from "../../assets/Images/cat4.jpg";
import cat5 from "../../assets/Images/cat5.jpg";
import cat6 from "../../assets/Images/cat6.jpg";

const heroLinks = [
  { category: "WINTER COLLECTION", subcategory: "Sweaters", image: cat1 },
  { category: "WINTER COLLECTION", subcategory: "SweatShirts", image: cat2 },
  { category: "WINTER COLLECTION", subcategory: "Hoodies", image: cat3 },
  { category: "Shirts", subcategory: "Formal Shirts", image: cat4 },
  { category: "ACCESSORIES", subcategory: "Fragrances", image: cat5 },
  { category: "ACTIVE WEAR", subcategory: "Gym Wear", image: cat6 },
];

const CategoryGrid = () => {
  return (
    <div style={{ padding: "10px", margin: "0 auto" }}>
      <div className="category-grid">
        {heroLinks.map((item, index) => (
          <NavLink
            key={index}
            to={`/category/${encodeURIComponent(item.category)}?subcategory=${encodeURIComponent(item.subcategory)}`}
            style={{ textDecoration: "none" }}
          >
            <div className="category-card">
              <img src={item.image} alt={item.subcategory} className="category-image" />
              <div className="overlay">
                <div className="text-white font-semibold text-xl mb-2.5 uppercase px-2 category-label transparent">
                  {item.subcategory}
                </div>
                <button className="shop-btn">Shop Now</button>
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .category-grid {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 768px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .category-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .category-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
          transition: background 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 30px 20px;
        }
        .category-label {
          color: white;
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 2px solid white;
          padding: 8px 25px;
          background-color: transparent;
        }
        .shop-btn {
          color: white;
          border: none;
          padding: 0;
          font-weight: 500;
          background-color: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          text-decoration: underline;
        }
        .category-card:hover img {
          transform: scale(1.05);
        }
        .category-card:hover .overlay {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
        }
        .shop-btn:hover {
          color: #cccccc;
        }
      `}</style>
    </div>
  );
};

export default CategoryGrid;
