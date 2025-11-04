import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, DeletefromCart } from './store/slices/cartlist';

// Import your existing components
import Header from './Header';
import Footer from './Footer';

// MUI-like components
const Box = ({ children, sx, ...props }) => {
  return <div style={sx} {...props}>{children}</div>;
};

const Typography = ({ children, variant, sx, ...props }) => {
  const variantStyles = {
    h1: { fontSize: '28px', fontWeight: '500' },
    h3: { fontSize: '16px', fontWeight: '600' },
    body1: { fontSize: '16px' },
    body2: { fontSize: '14px' },
  };
  
  const style = { ...variantStyles[variant], ...sx };
  const Tag = variant?.startsWith('h') ? variant : 'p';
  
  return <Tag style={style} {...props}>{children}</Tag>;
};

const Button = ({ children, sx, onClick, ...props }) => {
  return (
    <button 
      style={{ 
        border: 'none', 
        cursor: 'pointer', 
        fontWeight: '500',
        ...sx 
      }} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const IconButton = ({ children, sx, onClick }) => {
  return (
    <button 
      style={{ 
        background: 'none', 
        border: 'none', 
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx 
      }} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.CartList);

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateSubtotal = () => {
    return cartList.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const formatPrice = (price) => {
    return `RS.${price.toLocaleString()}.00`;
  };

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleRemove = (item) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      dispatch(DeletefromCart(item));
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Box sx={{ backgroundColor: '#f9f9f9', padding: '15px 50px' }}>
        <Box sx={{ fontSize: '14px', color: '#666' }}>
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Home</a> | <span>SHOPPING CART</span>
        </Box>
      </Box>

      <Box sx={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '40px 50px', flex: 1 }}>
        <Typography variant="h1" sx={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          MY SHOPPING BAG
        </Typography>

        <Box sx={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', marginBottom: '30px' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '150px 2fr 1fr 1fr 1fr 1fr', padding: '20px', backgroundColor: '#f9f9f9', fontWeight: 'bold', fontSize: '14px', color: '#333', textTransform: 'uppercase' }}>
            <Box>IMAGE</Box>
            <Box>ITEM NAME</Box>
            <Box>PRICE</Box>
            <Box>QUANTITY</Box>
            <Box>ACTION</Box>
            <Box>TOTAL</Box>
          </Box>

          {cartList.length === 0 ? (
            <Box sx={{ padding: '40px', textAlign: 'center', color: '#888' }}>
              <Typography variant="body1">Your cart is empty</Typography>
            </Box>
          ) : (
            cartList.map((item) => (
              <Box key={item.id} sx={{ display: 'grid', gridTemplateColumns: '150px 2fr 1fr 1fr 1fr 1fr', padding: '30px 20px', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
                <Box>
                  <Box sx={{ width: '100px', height: '100px', backgroundColor: '#2c3e50', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    {item.image ? (
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <rect x="15" y="10" width="30" height="35" fill="#34495e"/>
                        <rect x="15" y="10" width="30" height="5" fill="#fff"/>
                        <polygon points="20,15 25,20 20,25" fill="#fff"/>
                      </svg>
                    )}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ marginBottom: '5px', color: '#333' }}>
                    {item.name || item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#888', margin: 0 }}>
                    {item.size && `Size: ${item.size}`}
                    {item.category && `Category: ${item.category}`}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: '600', color: '#333' }}>
                    {formatPrice(item.price)}
                  </Typography>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <IconButton 
                      onClick={() => handleDecrease(item)}
                      sx={{ width: '35px', height: '35px', border: '1px solid #ddd', backgroundColor: '#fff', fontSize: '18px', borderRadius: '4px' }}
                    >
                      −
                    </IconButton>
                    <Box sx={{ width: '50px', textAlign: 'center', fontSize: '16px', fontWeight: '500' }}>
                      {item.quantity}
                    </Box>
                    <IconButton 
                      onClick={() => handleIncrease(item)}
                      sx={{ width: '35px', height: '35px', border: '1px solid #ddd', backgroundColor: '#fff', fontSize: '18px', borderRadius: '4px' }}
                    >
                      +
                    </IconButton>
                  </Box>
                </Box>
                <Box>
                  <IconButton 
                    onClick={() => handleRemove(item)}
                    sx={{ fontSize: '24px', color: '#888' }}
                  >
                    ×
                  </IconButton>
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#e74c3c' }}>
                    {formatPrice(calculateItemTotal(item))}
                  </Typography>
                </Box>
              </Box>
            ))
          )}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '30px' }}>
          <Button sx={{ backgroundColor: '#2c3e50', color: '#fff', padding: '15px 40px', borderRadius: '4px', fontSize: '14px', textTransform: 'uppercase' }}>
            CONTINUE SHOPPING
          </Button>

          <Box sx={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', minWidth: '400px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <Typography variant="body1">Subtotal :</Typography>
              <Typography variant="body1">{formatPrice(calculateSubtotal())}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <Typography variant="body1">Shipping :</Typography>
              <Typography variant="body1">RS.0.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold', paddingTop: '15px', borderTop: '2px solid #f0f0f0', marginTop: '15px' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Total :</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{formatPrice(calculateSubtotal())}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              <Button sx={{ flex: 1, backgroundColor: '#d4a574', color: '#fff', padding: '15px', borderRadius: '4px', fontSize: '14px', textTransform: 'uppercase' }}>
                UPDATE CART
              </Button>
              <Button sx={{ flex: 1, backgroundColor: '#e74c3c', color: '#fff', padding: '15px', borderRadius: '4px', fontSize: '14px', textTransform: 'uppercase' }}>
                CHECKOUT
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}