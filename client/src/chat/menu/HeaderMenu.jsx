import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Box } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";

const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #aaaaaa;
`;

const HeaderMenu = ({ setOpenDrawer }) => {
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  return (
    <>
      <MoreVert onClick={handleClick} />

      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContainerEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={() => {handleClose(); setOpenDrawer(true)}}>Profile</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
