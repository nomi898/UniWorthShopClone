import React from "react";
import cat1 from "../../assets/Images/cat1.jpg";
import cat2 from "../../assets/Images/cat2.jpg";
import cat3 from "../../assets/Images/cat3.jpg";
import cat4 from "../../assets/Images/cat4.jpg";
import cat5 from "../../assets/Images/cat5.jpg";
import cat6 from "../../assets/Images/cat6.jpg";

const CategoryGrid = () => {
  const featuredCategories = [
    { name: "Sweaters", label: "Sweaters", image: cat1 },
    { name: "Sweatshirts", label: "Sweatshirts", image: cat2 },
    { name: "Hoodies", label: "Hoodies", image: cat3 },
    { name: "Formal Shirts", label: "Formal Shirts", image: cat4 },
    { name: "Fragrance", label: "Fragrances", image: cat5 },
    { name: "Gym Wear", label: "Gym Wear", image: cat6 },
  ];

  return (
    <div style={{ padding: "10px", margin: "0 auto" }}>
      {/* Grid Container */}
      <div className="category-grid">
        {featuredCategories.map((category, index) => (
          <div key={index} className="category-card ">
            {/* Category Image */}
            <img
              src={category.image}
              alt={category.label}
              className="category-image"
            />

            {/* Overlay */}
            <div className="overlay ">
              <div className="text-white font-semibold text-xl mb-2.5 uppercase px-2 category-label transparent">
                {category.label}
              </div>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style>{`
       .category-grid {
       display: grid;
       gap: 10px;
       grid-template-columns: repeat(3, 1fr); /* Desktop: 3 per row */
       }

/* Mobile: 2 columns */
      @media (max-width: 768px) {
      .category-grid {
       grid-template-columns: repeat(2, 1fr);
       }
      }
        .category-card {
          position: relative;
          // height: 600px; /* Desktop height */
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

        /* ✅ Mobile Design - 2 columns stacked vertically */
        @media (max-width: 768px) {
          .category-grid {
            grid-template-columns: rimport React from 'react';
      `}</style>
    </div>
  );
};

export default CategoryGrid;
