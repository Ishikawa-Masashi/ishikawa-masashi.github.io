import React from 'react';
import { useNavigate, Outlet, useRoutes, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import HomeIcon from '@mui/icons-material/Home';

import { Home } from '../components/Home';
import { MahjonggSolitaire } from '../components/MahjonggSolitaire';
import { ConversionEulerToMatrix } from '../components/Articles/ConversionEulerToMatrix';

const drawerWidth = 240;

const App: React.VFC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [open, setOpen] = React.useState(true);
  const [openGamePages, setOpenGamePages] = React.useState(true);
  const location = useLocation();

  // console.log(location);

  const handleClick = () => {
    setOpen(!open);
  };
  // const handleListItemClick = (event: any, index: number) => {
  //   setSelectedIndex(index);
  // };

  const homePages = [
    {
      name: 'Home',
      path: '/',
      icon: <HomeIcon />,
    },
  ];

  const gamePages = [
    {
      name: 'Mahjongg Solitaire',
      path: '/mahjongg-solitaire',
    },
  ];

  const articlePages = [
    {
      name: 'オイラー角と行列',
      path: '/articles/conversion-euler-to-matrix',
    },
  ];

  const navigate = useNavigate();

  const createListItem = (name: string, path: string, icon: JSX.Element) => (
    <ListItem
      button
      key={name}
      selected={path === location.pathname}
      onClick={(event) => {
        navigate(path);
        // handleListItemClick(event, index);
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );

  const createSubListItem = (name: string, path: string) => (
    <ListItemButton
      sx={{ pl: 4 }}
      onClick={() => {
        navigate(path);
        // handleListItemClick(event, index);
      }}
      selected={path === location.pathname}
      key={name}
    >
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Ishikawa Masashi
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListSubheader component="div" id="nested-list-subheader">
            Index
          </ListSubheader>
          {homePages.map((page) =>
            createListItem(page.name, page.path, page.icon)
          )}
        </List>
        {/* <Divider /> */}
        <List>
          <ListItemButton onClick={() => setOpenGamePages(!openGamePages)}>
            <ListItemIcon>
              <VideogameAssetIcon />
            </ListItemIcon>
            <ListItemText primary="Games" />
            {openGamePages ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openGamePages} timeout="auto" unmountOnExit>
            {gamePages.map((page, index) =>
              createSubListItem(page.name, page.path)
            )}
          </Collapse>
        </List>
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <VideogameAssetIcon />
            </ListItemIcon>
            <ListItemText primary="記事" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {articlePages.map((page, index) =>
              createSubListItem(page.name, page.path)
            )}
          </Collapse>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export const rootPath = [
  //   {
  //     path: '/',
  //     element: <App />,
  //     children: [{ path: '/about', element: <About /> }],
  //   },

  {
    path: '/',
    element: <App />,
    children: [
      {
        // path: 'articles/*',
        // element: <div />,
        // element: <Stock />,
        // element: <ConversionEulerToMatrix />,
        children: [
          // { path: '/:id', element: <StockDetail /> },
          {
            path: 'articles/conversion-euler-to-matrix',
            element: <ConversionEulerToMatrix />,
          },
        ],
      },
      //   { path: '/', element: <Navigate to="/stocks" /> },
      { path: '/', element: <Home /> },
      { path: '/mahjongg-solitaire', element: <MahjonggSolitaire /> },
      { path: '/mahjongg-solitaire', element: <MahjonggSolitaire /> },
    ],
  },
  //   { path: '/about', element: <About /> },
];

export const AppRoutes = () => {
  //   const auth = useAuth();

  //   const commonRoutes = [{ path: '/', element: <Landing /> }];

  //   const routes = auth.user ? protectedRoutes : publicRoutes;
  const routes = rootPath;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
