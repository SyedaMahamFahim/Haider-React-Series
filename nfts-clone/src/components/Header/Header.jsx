import React from "react";
import {
  Box,
  Toolbar,
  AppBar,
  Typography,
  InputBase,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  HeaderBox,
    HeaderLeftBox,
    HeaderRightBox,
    HeaderRightBoxList,
    Search,
    SearchIconWrapper,
    StyledInputBase
} from './HeaderStyle'


const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#1A1A25",
          }}
        >
          <Toolbar>
            <HeaderBox>
              <HeaderLeftBox>
                <Box
                  component="img"
                  sx={{
                    height: 50,
                  }}
                  alt="Logo"
                  src="/assests/images/logo.svg"
                />

                <Typography
                  variant="h6"
                  component="p"
                  mx={3}
                  fontSize="16px"
                  lineHeight="25px"
                  fontWeight={600}
                  color="white"
                  fontFamily={"Montserrat"}
                >
                  NFTNerds
                </Typography>

                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </HeaderLeftBox>

              <HeaderRightBox>
                <Box>
                  <HeaderRightBoxList>
                    <ListItem>
                      <ListItemText
                        sx={{
                          color: "balck",
                        }}
                      >
                        hey
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>hey</ListItemText>
                    </ListItem>
                  </HeaderRightBoxList>
                </Box>
              </HeaderRightBox>
            </HeaderBox>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
