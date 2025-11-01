import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const ProductDetail = () => {
  return (
    <Box sx={{ pt: '150px', pb: '50px', px: { xs: 2, md: 4 } }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" color="text.secondary">
          Home | Check Shirts | Black Check Tailored Smart Fit Shirt
        </Typography>
      </Box>
\

      <Grid container spacing={4}>
        {/* Left Side - Product Images */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <Box
              component="img"
              src="/images/product-main.jpg"
              alt="Product"
              sx={{
                width: '100%',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
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
                  '&:hover': {
                    border: '2px solid #D4A574'
                  }
                }}
              />
            ))}
          </Box>
        </Grid>

        {/* Right Side - Product Details & Purchase Options */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
            Formal Shirt
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            SKU: FS1114SF
          </Typography>

          {/* Social Share Icons */}
          <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            {['Facebook', 'Twitter', 'Pinterest', 'Email'].map((social) => (
              <Button
                key={social}
                size="small"
                sx={{
                  minWidth: 'auto',
                  px: 1,
                  color: 'text.secondary'
                }}
              >
                {social}
              </Button>
            ))}
          </Box>

          {/* Price */}
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#D4A574' }}>
            Rs. 5,995.00
          </Typography>

          {/* Size Chart */}
          <Box sx={{ mb: 3 }}>
            <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>
              Size Chart
            </Button>
          </Box>

          {/* Color Selection */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Select Color: Black
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {['Navy', 'Black', 'Grey', 'Sky', 'Orange'].map((color) => (
                <Box
                  key={color}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: color.toLowerCase(),
                    border: color === 'Black' ? '3px solid #000' : '2px solid #ddd',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Fit Selection */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Select Fit: Tailored Smart Fit
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant={false ? 'contained' : 'outlined'}
                sx={{
                  textTransform: 'none',
                  color: false ? 'white' : 'black',
                  bgcolor: false ? '#D4A574' : 'transparent'
                }}
              >
                CLASSIC FIT
              </Button>
              <Button
                variant={true ? 'contained' : 'outlined'}
                sx={{
                  textTransform: 'none',
                  color: true ? 'white' : 'black',
                  bgcolor: true ? '#D4A574' : 'transparent'
                }}
              >
                TAILORED SMART FIT
              </Button>
            </Box>
          </Box>

          {/* Size Selection */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Select Size:
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {['14½', '15', '15½', '16', '16½', '17', '17½', '18', '18½'].map((size) => (
                <Button
                  key={size}
                  variant={size === '16' ? 'contained' : 'outlined'}
                  disabled={parseInt(size) >= 17}
                  sx={{
                    textTransform: 'none',
                    minWidth: '50px',
                    color: size === '16' ? 'white' : 'black',
                    bgcolor: size === '16' ? '#D4A574' : 'transparent',
                    '&.Mui-disabled': {
                      bgcolor: '#f5f5f5',
                      color: '#ccc'
                    }
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Quantity Selector */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Quantity:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button variant="outlined" size="small">-</Button>
              <Typography variant="body1">1</Typography>
              <Button variant="outlined" size="small">+</Button>
            </Box>
          </Box>

          {/* Add to Cart Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: '#D4A574',
              color: 'white',
              py: 1.5,
              textTransform: 'none',
              fontWeight: 600,
              mb: 3,
              '&:hover': {
                bgcolor: '#B8956A'
              }
            }}
          >
            ADD TO CART
          </Button>

          {/* Need Help? */}
          <Box sx={{ borderTop: '1px solid #e0e0e0', pt: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Need Help?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +92 42 111 789 456
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mon-Sat: (10:00 AM to 06:00 PM)
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Product Description Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          PRODUCT DETAIL
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          This versatile version of men's Formal Shirts features subtle checks on the tonal base. 
          Made from soft cotton-blend fabric with a crease-resistant finish, this shirt exudes 
          elegance and leadership. Perfect for professional and formal occasions.
        </Typography>
        
        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
          Specifications:
        </Typography>
        <Grid container spacing={2}>
          {[
            { label: 'Sleeve', value: 'Full Sleeves' },
            { label: 'Cuff Style', value: 'Cut Cuff' },
            { label: 'Collar Style', value: 'Button Down Collar' },
            { label: 'Pattern', value: 'Check' },
            { label: 'Style', value: 'Formal Shirt' },
            { label: 'Fabric', value: '80% Cotton 20% Polyester' }
          ].map((spec) => (
            <Grid item xs={6} md={4} key={spec.label}>
              <Typography variant="body2"><strong>{spec.label}:</strong> {spec.value}</Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            SHIPPING & RETURNS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Free shipping available over Rs. 1500/- order. Easy returns within 7 days of purchase.
          </Typography>
        </Box>
      </Box>

      {/* Similar Products Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Similar Products
        </Typography>
        {/* Similar products grid can be added here */}
      </Box>
    </Box>
  );
};

export default ProductDetail;
