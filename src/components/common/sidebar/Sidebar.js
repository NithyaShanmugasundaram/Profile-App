import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Drawer, Divider, Box, AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from '../../profile/Profile';
import UpdateProfile from '../../updateProfile/UpdateProfile';
import styled from '@emotion/styled';
import Language from '../../language/Language';

const StyledLink = styled(NavLink)(({ theme }) => ({
  fontWeight: 600,
  textDecoration: 'none',
  color: theme.palette.common.black

}))
const drawerWidth = 240;
export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menu_list = [{ label: "Create Profile", to: "/" }, { label: "Update/Delete Profile", to: "update" }, { label: "Language", to: "/language " }]
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menu_list.map((text, index) => {
          return (
            <StyledLink to={text.to} key={text.label} sx={{ textDecoration: 'none', linethrough: 'none' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <PersonAddIcon /> : <EditLocationAltIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.label} />
                </ListItemButton>
              </ListItem>
            </StyledLink>
          )
        })}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Assignment Project
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}

      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

        <Toolbar />
        <Routes>
          <Route path="/" exact element={<Profile />}></Route>
          <Route path="update" element={<UpdateProfile />}></Route>
          <Route path="language" element={<Language />}></Route>
        </Routes>

      </Box>
    </Box >
  );
}
