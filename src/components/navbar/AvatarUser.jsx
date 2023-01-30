import React, { useState } from "react";
import Box from "@mui/material/Box";
import CartItem from "./CartItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import AvatarImg from "../../assets/images/avatar.webp";
import { useAuth } from "../../context/AuthContext";

const AvatarUser = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, logout } = useAuth();

  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = async () => {
    console.log("1111");
    await logout();
  };
  const userLogin = (user.displayName === null) ? user.email : user.displayName
  return (
    <Box sx={{ flexGrow: 0 }}>
      <CartItem />
      <Tooltip title={`Bienvenido ${userLogin}`}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={AvatarImg} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        className="avatar-menu"
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
        {settings.map((p) => (
          <MenuItem key={p} onClick={handleCloseUserMenu}>
            <Typography
              textAlign="center"
              onClick={p === "Logout" ? handleLogout : ""}
            >
              {p}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AvatarUser;
