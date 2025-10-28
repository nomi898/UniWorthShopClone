import React from 'react'
import TopBar from './TopBar'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button } from '@mui/material';
import logo from '../../assets/Images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {
  return (
    <>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px' }}>
        {/* menu icon & text */}
          <Box >
            <MenuIcon sx={{fontSize:30, color:'white'}}/>  {/*make it white later*/}
            <span className='text-white'>Menu</span>
          </Box>
          {/* logo in middle  */}
          <Box>
              <img src={logo} alt="" style={{ width: 150, height: 'auto' }} />
          </Box>
          {/* search & Cart  */}
          <Box className='flex gap-4'>
            {/* search button  */}
            <Button className='bg-red text-white px-4 py-2 rounded-md'>
              <SearchIcon/>
              Search
              </Button>

               {/* Cart button  */}
            <Button className='bg-red text-white px-4 py-2 rounded-md'>
              <AddShoppingCartIcon/>
              Bag
              </Button>
          </Box>
      </Box>
    </>
  )
}

export default Header
