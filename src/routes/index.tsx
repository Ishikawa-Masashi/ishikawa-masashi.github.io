import React from 'react';
import { useNavigate, Outlet, useRoutes } from 'react-router-dom';
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
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import { Home } from '../components/Home';

const drawerWidth = 240;

const App: React.VFC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleListItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
  };

  const homePages = [
    {
      name: 'Home',
      path: '/',
      index: 0,
    },
  ];

  const gamePages = [
    {
      name: 'Mahjongg Solitaire',
      path: '/cubes-with-vertex-arrays',
      index: 0,
    },
  ];

  const navigate = useNavigate();

  const createListItem = (name: string, path: string, index: number) => (
    <ListItem
      button
      key={name}
      selected={index === selectedIndex}
      onClick={(event) => {
        navigate(path);
        handleListItemClick(event, index);
      }}
    >
      <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );

  const createSubListItem = (name: string, path: string, index: number) => (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText
        primary={name}
        onClick={() => {
          navigate(path);
          handleListItemClick(event, index);
        }}
      />
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
          {homePages.map((page, index) =>
            createListItem(page.name, page.path, index)
          )}
        </List>
        {/* <Divider /> */}
        <List>
          {/* <ListSubheader component="div" id="nested-list-subheader">
            Games
          </ListSubheader> */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Games" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {gamePages.map((page, index) =>
              createSubListItem(page.name, page.path, index + homePages.length)
            )}
          </Collapse>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
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
      //   {
      //     path: 'stocks/*',
      //     element: <Stock />,
      //     children: [
      //       { path: '/:id', element: <StockDetail /> },
      //       { path: '/', element: <StockList /> },
      //     ],
      //   },
      //   { path: '/', element: <Navigate to="/stocks" /> },
      { path: '/', element: <Home /> },
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
