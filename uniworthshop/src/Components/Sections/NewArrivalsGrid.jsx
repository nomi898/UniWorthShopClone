import React from "react";
import products from "../../DummyData/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Pagination } from "swiper/modules";
import { Box } from "@mui/material";

const NewArrivalsGrid = () => {
  const newArrivals = products.flatMap((category) =>
    category.subcategories.flatMap((sub) =>
      sub.products.filter((product) => product.isNewArrival)
    )
  );

  return (
    <Box sx={{ marginInline: { xs: 2, sm: 4, md: 8, lg: 30 } }}>
      <Swiper
        autoplay={{
            delay: 3000,      // 3 seconds between slides
            disableOnInteraction: false, // keeps autoplay even after user interacts
          }}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 8 },
          768: { slidesPerView: 2, spaceBetween: 12 },
          1280: { slidesPerView: 3, spaceBetween: 10 },
        }}
        className="mySwiper"
      >
        {newArrivals.map((product) => (
          <SwiperSlide key={product.id}>
            <Box>
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  mb: 2,
                  borderRadius: 1,
                }}
              />
              <p className="">{product.name}</p>
              <h5 className="text-black-400">PKR {product.price}</h5>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default NewArrivalsGrid;