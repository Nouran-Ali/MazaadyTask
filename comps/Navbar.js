import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/router';
import styles from "../styles/navbar.module.css";
import Link from 'next/link';
// import Image from 'next/image';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { MainBtn } from "./Buttons";
import TextField from '@mui/material/TextField';

const pages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Gifts',
    href: '/gifts',
  },
];

const profileSettings = ['Profile', 'Account', 'Logout'];

function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [active, setActive] = useState()
  const router = useRouter();

  const { pathname } = router;

  const handleActiveLink = (href) => {
    if (pathname == '/' && href == '/') {
      return true;
    } else if (pathname.includes(href) && href !== '/') {
      return true;
    } else {
      return false;
    }
  }

  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', width: "100%" }} className='navbar '>
      <Container fixed>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }
            }
          >
            <img src='../logo.png' width="100px" alt="logo"/>
          </Typography>

          {/* nav phone screen */}
          <Box sx={{
            flexGrow: 1, display: { xs: 'flex', md: 'none' },
            alignItems: 'center', textAlign: 'center'
          }} className="ml-5 max-xl:ml-0 max-xl:mr-0">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ title, title_ar, href }, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link href={href} className={`${styles.link} ${handleActiveLink(href) ? styles.active : ' '}`}>
                    {title}
                  </Link>
                </MenuItem>
              ))}
              <div className='flex items-center px-7 pb-3'>
                <Link href="/" className='mr-2'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </Link>
                <p
                  className={`${styles.lang_text} pl-2`}
                >
                  EN
                </p>
              </div>
            </Menu>
          </Box>

          {/* logo phone screen */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'flex-start',
            }}
          >
            <img src='../logo.png' width="80px" alt="logo"/>
          </Typography>

          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            textAlign: 'center',
          }}>
            {pages.map(({ title, title_ar, href }, index) => (
              <Link key={index} href={href} className={`${styles.link} ${handleActiveLink(href) ? styles.active : ' '}`} style={{ align: "center" }}>
                {title}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="" className='text-[#777] flex items-center'>
              {searchOpen && (
                <Box>
                  <TextField
                    id="standard-basic"
                    label="Search"
                    type="search"
                    variant="standard"
                    size="small"
                    color="warning"
                  />
                </Box>
              )}

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleSearch}
                sx={{ backgroundColor: "white !important" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4" d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </IconButton>

              <Link href="/" className={`${styles.left_line} px-5 max-xl:px-1`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                  <path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4" d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.9 21.18C9.36 20.64 9.02 19.88 9.02 19.06" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" />
                </svg>
              </Link>

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, backgroundColor: "white !important" }} className={styles.left_line}>
                <Avatar alt="Hala" src="../users/hala.png" className='mx-5' />
              </IconButton>

              <div className='d_none'>
                <MainBtn icon={<ControlPointIcon sx={{ fontSize: 18 }} />} label="Add New Product" />
              </div>

              <Link href="/" className='mx-5 d_none'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </Link>
              <p
                className={`${styles.lang_text} d_none pl-4`}
              >
                EN
              </p>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {profileSettings.map((profileSetting) => (
                <MenuItem key={profileSetting} onClick={handleCloseUserMenu}>
                  <Link href="/" sx={{ textTransform: "capitalize" }} className='font-medium capitalize'>{profileSetting}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Navbar;