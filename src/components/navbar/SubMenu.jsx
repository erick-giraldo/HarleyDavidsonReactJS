import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

const SubMenu = (props) => {
  const { items, handleClose, anchorEl } = props;

  const getSubMenu = items.find((f) => f.name === "Productos").subMenu;

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PopoverClasses={{
        vertical: "bottom",
        horizontal: "center",
      }}
      className="sub-menu"
    >
      {getSubMenu.map((p) => {
        const newRoute = p.link.toLowerCase().replaceAll(" ", "-");
        return (
          <NavLink to={`category/${newRoute}`}>
            <MenuItem onClick={handleClose}>{p.name}</MenuItem>
          </NavLink>
        );
      })}
    </Menu>
  );
};

export default SubMenu;
