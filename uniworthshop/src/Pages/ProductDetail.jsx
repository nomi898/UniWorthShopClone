import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { NavLink, useParams } from 'react-router';
import products from '../DummyData/Products';

const ProductDetail = () => {
  const { productId } = useParams();

  // Find product, subcategory, and category dynamically by productId
  let product, subcategoryData, categoryData;

  for (const cat of products) {
    for (const sub of cat.subcategories) {
      const p = sub.products.find((prod) => prod.id.toString() === productId);
      if (p) {
        product = p;
        subcategoryData = sub;
        categoryData = cat;
        break;
      }
    }
    if (product) break;
  }

  const categoryLabel = categoryData?.name;
  const subcategoryLabel = subcategoryData?.name;
  const productLabel = product?.name;

  return (
    <Box sx={{ pt: '150px', pb: '50px', px: { xs: 2, md: 4 } }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'gray', fontSize: '14px' }}>
          Home
        </NavLink>

        {categoryLabel && (
          <>
            <Typography sx={{ color: 'gray', fontSize: '14px' }}>|</Typography>
            <NavLink
              to={`/category/${categoryLabel}`}
              style={{ textDecoration: 'none', color: 'gray', fontSize: '14px' }}
            >
              {categoryLabel}
            </NavLink>
          </>
        )}

        {subcategoryLabel && (
          <>
            <Typography sx={{ color: 'gray', fontSize: '14px' }}>|</Typography>
            <NavLink
              to={`/category/${categoryLabel}?subcategory=${subcategoryLabel}`}
              style={{ textDecoration: 'none', color: 'gray', fontSize: '14px' }}
            >
              {subcategoryLabel}
            </NavLink>
          </>
        )}

        {productLabel && (
          <>
            <Typography sx={{ color: 'gray', fontSize: '14px' }}>|</Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{productLabel}</Typography>
          </>
        )}
      </Box>

      {/* Product Content */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <Box
              component="img"
              src={product?.image || '/images/product-main.jpg'}
              alt={productLabel || 'Product'}
              sx={{ width: '100%', borderRadius: '8px', cursor: 'pointer' }}
            />
            <Typography variant="caption" sx={{ textAlign: 'center', display: 'block', mt: 1 }}>
              Tap or pinch to expand
            </Typography>
          </Box>

          {/* Thumbnail Images */}
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Box
                key={item}
                component="img"
                src={`/images/product-thumb-${item}.jpg`}
                alt={`Thumbnail ${item}`}
                sx={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  '&:hover': { border: '2px solid #D4A574' }
                }}
              />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
            {productLabel || 'Product Name'}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            SKU: {product?.sku || 'FS1114SF'}
          </Typography>

          {/* Social Share */}
          <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            {['Facebook', 'Twitter', 'Pinterest', 'Email'].map((social) => (
              <Button key={social} size="small" sx={{ minWidth: 'auto', px: 1, color: 'text.secondary' }}>
                {social}
              </Button>
            ))}
          </Box>

          {/* Price */}
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#D4A574' }}>
            Rs. {product?.price?.toLocaleString() || '0'}
          </Typography>

          {/* Rest of your ProductDetail code goes here (size, color, fit, add to cart, etc.) */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
