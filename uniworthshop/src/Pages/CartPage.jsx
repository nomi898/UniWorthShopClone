import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '../store/slices/cartlist';

// MUI-like components
const Box = ({ children, sx, ...props }) => {
  return <div style={sx} {...props}>{children}</div>;
};

const Typography = ({ children, variant, sx, ...props }) => {
  const variantStyles = {
    h1: { fontSize: '24px', fontWeight: '500' },
    h3: { fontSize: '15px', fontWeight: '400' },
    body1: { fontSize: '15px' },
    body2: { fontSize: '13px' },
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
  const cartList = useSelector((state) => state.cart.items || []);

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
      dispatch(deleteFromCart(item));
    }
  };

  return (
    <Box sx={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px 50px', borderBottom: '1px solid #e0e0e0' }}>
        <Box sx={{ fontSize: '13px', color: '#333', fontWeight: '400' }}>
          <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Home</a> | <span style={{ fontWeight: '500' }}>SHOPPING CART</span>
        </Box>
      </Box>

      <Box sx={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '50px 50px', flex: 1 }}>
        <Typography variant="h1" sx={{ textAlign: 'center', marginBottom: '50px', color: '#000', letterSpacing: '1px' }}>
          MY SHOPPING BAG
        </Typography>

        <Box sx={{ backgroundColor: '#fff', overflow: 'hidden', marginBottom: '40px' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '200px 2fr 1fr 1fr 80px 1fr', padding: '20px 30px', backgroundColor: '#fff', fontWeight: '600', fontSize: '13px', color: '#000', textTransform: 'uppercase', borderBottom: '1px solid #e0e0e0', letterSpacing: '0.5px' }}>
            <Box>IMAGE</Box>
            <Box>ITEM NAME</Box>
            <Box>PRICE</Box>
            <Box>QUANTITY</Box>
            <Box>ACTION</Box>
            <Box sx={{ textAlign: 'right' }}>TOTAL</Box>
          </Box>

          {cartList.length === 0 ? (
            <Box sx={{ padding: '60px', textAlign: 'center', color: '#666' }}>
              <Typography variant="body1">Your cart is empty</Typography>
            </Box>
          ) : (
            cartList.map((item) => (
              <Box key={item.id} sx={{ display: 'grid', gridTemplateColumns: '200px 2fr 1fr 1fr 80px 1fr', padding: '35px 30px', alignItems: 'center', borderBottom: '1px solid #e0e0e0' }}>
                <Box>
                  <Box sx={{ width: '120px', height: '120px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    {item.image ? (
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <rect x="20" y="15" width="40" height="50" rx="2" fill="#34495e"/>
                        <rect x="20" y="15" width="40" height="8" fill="#5a6c7d"/>
                        <circle cx="30" cy="20" r="2" fill="#fff"/>
                        <circle cx="50" cy="20" r="2" fill="#fff"/>
                        <rect x="25" y="30" width="30" height="3" rx="1" fill="#7f8c8d"/>
                        <rect x="25" y="37" width="25" height="2" rx="1" fill="#7f8c8d"/>
                        <rect x="25" y="43" width="20" height="2" rx="1" fill="#7f8c8d"/>
                      </svg>
                    )}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ marginBottom: '8px', color: '#000' }}>
                    {item.name || item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', margin: 0 }}>
                    {item.size && `Size: ${item.size}`}
                    {item.category && `Category: ${item.category}`}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: '400', color: '#000' }}>
                    {formatPrice(item.price)}
                  </Typography>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '0px', border: '1px solid #ddd', width: 'fit-content' }}>
                    <IconButton 
                      onClick={() => handleDecrease(item)}
                      sx={{ width: '40px', height: '40px', backgroundColor: '#fff', fontSize: '18px', borderRight: '1px solid #ddd', fontWeight: '300' }}
                    >
                      −
                    </IconButton>
                    <Box sx={{ width: '50px', textAlign: 'center', fontSize: '15px', fontWeight: '400', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.quantity}
                    </Box>
                    <IconButton 
                      onClick={() => handleIncrease(item)}
                      sx={{ width: '40px', height: '40px', backgroundColor: '#fff', fontSize: '18px', borderLeft: '1px solid #ddd', fontWeight: '300' }}
                    >
                      +
                    </IconButton>
                  </Box>
                </Box>
                <Box>
                  <IconButton 
                    onClick={() => handleRemove(item)}
                    sx={{ fontSize: '28px', color: '#666', fontWeight: '300' }}
                  >
                    ×
                  </IconButton>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontWeight: '400', color: '#e74c3c' }}>
                    {formatPrice(calculateItemTotal(item))}
                  </Typography>
                </Box>
              </Box>
            ))
          )}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '30px' }}>
          <Button sx={{ backgroundColor: '#000', color: '#fff', padding: '16px 45px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>
            CONTINUE SHOPPING
          </Button>

          <Box sx={{ backgroundColor: '#fff', padding: '0px', minWidth: '450px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ fontSize: '15px', color: '#000', fontWeight: '400' }}>Subtotal :</Typography>
              <Typography variant="body1" sx={{ fontSize: '15px', color: '#000', fontWeight: '400' }}>{formatPrice(calculateSubtotal())}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ fontSize: '15px', color: '#000', fontWeight: '400' }}>Shipping :</Typography>
              <Typography variant="body1" sx={{ fontSize: '15px', color: '#000', fontWeight: '400' }}>RS.0.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '400', paddingTop: '20px', borderTop: '1px solid #e0e0e0', marginTop: '10px', marginBottom: '30px' }}>
              <Typography variant="body1" sx={{ fontWeight: '400', color: '#000' }}>Total :</Typography>
              <Typography variant="body1" sx={{ fontWeight: '400', color: '#000' }}>{formatPrice(calculateSubtotal())}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '15px' }}>
              <Button sx={{ flex: 1, backgroundColor: '#d4a574', color: '#fff', padding: '16px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>
                UPDATE CART
              </Button>
              <a href="/checkout" style={{ flex: 1, textDecoration: 'none' }}>
                <Button sx={{ width: '100%', backgroundColor: '#e74c3c', color: '#fff', padding: '16px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>
                CHECKOUT
              </Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}