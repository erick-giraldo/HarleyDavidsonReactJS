import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../assets/images/logo.webp";
import AvatarImg from "../../assets/images/avatar.webp";

import "../../assets/scss/index.scss";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const menuList = [
    {
      name: "Inicio",
      active: true,
      disabled: false,
      dropdown: false,
      link: "",
    },
    {
      name: "Nosotros",
      active: false,
      disabled: false,
      dropdown: false,
      link: "nosotros",
    },
    {
      name: "Blog",
      active: false,
      disabled: false,
      dropdown: false,
      link: "blog",
    },
    {
      name: "Productos",
      active: false,
      disabled: false,
      dropdown: true,
      link: "category",
      subMenu: [
        { name: "Sport", link: "Sport" },
        { name: "Grand American Touring", link: "Grand American Touring" },
        { name: "Cruiser", link: "Cruiser" },
      ],
    },
    {
      name: "Contacto",
      active: false,
      disabled: true,
      dropdown: false,
      link: "contacto",
    },
  ];

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getSubMenu = menuList.find((f) => f.name === "Productos").subMenu;

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} width="60px" alt="Logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              // anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              // transformOrigin={{ vertical: "top", horizontal: "center" }}
              // PaperProps={{
              //   style: {
              //     left: "50%",
              //     transform: "translateX(-77%) translateY(32%)"
              //   }
              // }}
              // MenuListProps={{
              //   style: {
              //     margin: "15px",
              //     padding: 0
              //   }
              // }}
              PopoverClasses={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              {getSubMenu.map((p) => {
                 const newRoute = p.link.toLowerCase().replaceAll(" ","-");
                return (
                  <NavLink to={`category/${newRoute}`}>
                    <MenuItem onClick={handleClose}>{p.name}</MenuItem>
                  </NavLink>
                );
              })}
            </Menu>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuList.map((page) => (
                <NavLink
                  key={page.name}
                  to={page.link}
                  onClick={page.dropdown ? handleClick : ""}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Harley
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuList.map((page) => (
              <NavLink
                onClick={page.dropdown ? handleClick : ""}
                to={page.link}
                key={page.name}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Box>
          {/* <Box>
          </Box>     */}
          <Box sx={{ flexGrow: 0 }}>
            <CartItem />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={AvatarImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
