import { React, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";

const SideBar = (props) => {
  const { handleDrawerToggle, container, mobileOpen, navItems } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleDrawerToggle();
  };

  const drawerWidth = 240;
  const drawer = (
    <Box className="side-bar" sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        HARLEY
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink to={item.link} onClick={item.dropdown ? handleClick : ""}>
            <ListItem
              key={item}
              disablePadding
              onClick={item.dropdown ? "" : handleDrawerToggle}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <SubMenu items={navItems} handleClose={handleClose} anchorEl={anchorEl} />
    </>
  );
};

export default SideBar;
