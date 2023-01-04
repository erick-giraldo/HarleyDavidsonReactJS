import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../assets/images/logo.webp";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import AvatarUser from "./AvatarUser";
import SubMenu from "./SubMenu";

const navItems = [
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
    icon: "ExpandMoreIcon",
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

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState (false);
  const [anchorEl, setAnchorEl] = useState(null);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
          >
            <img src={Logo} width="60px" alt="Logo" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, width: 1700 }}>
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                onClick={item.dropdown ? handleClick : ""}
              >
                <Button key={item} sx={{ color: "#fff" }}>
                  {item.name}
                </Button>
              </NavLink>
            ))}
          </Box>
         <SubMenu items={navItems} handleClose={handleClose} anchorEl={anchorEl}/>
          <AvatarUser />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <SideBar
          handleDrawerToggle={handleDrawerToggle}
          container={container}
          mobileOpen={mobileOpen}
          navItems={navItems}
          
        />
      </Box>
    </Box>
  );
};

export default NavBar;
