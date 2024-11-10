import React from "react";
import "../navigation/navbar.css";
import { logoImg } from "../../utils";
import { navLists } from "../../constants";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <header>
      <nav>
        <div className="nav-logo-container">
          <a href="#home">
            <img src={logoImg} alt="" height={60} width={60} />
          </a>
        </div>
        <div className="navbar-links-container">
          <a href="#intro">Giới thiệu</a>
          <a href="#courses">Chương trình học</a>
          <a href="#environment">Cơ sở vật chất</a>
          <a href="#teachers">Giáo Viên</a>
          <a href="#contact">Liên Hệ</a>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {navLists.map((nav) => (
                <ListItem key={nav} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={nav} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
    </header>
  );
};

export default Navbar;
