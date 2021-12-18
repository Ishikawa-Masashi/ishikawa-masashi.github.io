var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import * as React from "react";
import React__default from "react";
import ReactDOM__default from "react-dom";
import { B as BrowserRouter, C as Card, a as CardContent, T as Typography, b as CardActions, c as Button, s as styled, P as Paper, G as Grid, u as useRoutes, d as useNavigate, e as Box, f as CssBaseline, A as AppBar, g as Toolbar, D as Drawer, h as Divider, L as List, i as ListSubheader, j as ListItem, k as ListItemIcon, l as default_1, m as default_1$1, n as ListItemText, o as ListItemButton, p as default_1$2, q as default_1$3, r as Collapse, t as default_1$4, O as Outlet } from "./vendor.64c80e11.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const AppProvider = ({ children }) => {
  return /* @__PURE__ */ React__default.createElement(BrowserRouter, null, children);
};
const BasicCard = (props) => {
  const { title } = props;
  return /* @__PURE__ */ React.createElement(Card, {
    sx: { minWidth: 275 }
  }, /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h5",
    component: "div"
  }, title)), /* @__PURE__ */ React.createElement(CardActions, null, /* @__PURE__ */ React.createElement(Button, {
    size: "small"
  }, "Learn More")));
};
styled(Paper)(({ theme }) => __spreadProps(__spreadValues({}, theme.typography.body2), {
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
const Home = () => {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(Typography, {
    variant: "h4",
    component: "div"
  }, "Games"), /* @__PURE__ */ React__default.createElement(Grid, {
    container: true,
    spacing: { xs: 2, md: 3 },
    columns: { xs: 4, sm: 8, md: 12 }
  }, /* @__PURE__ */ React__default.createElement(Grid, {
    item: true,
    xs: 2,
    sm: 4,
    md: 4
  }, /* @__PURE__ */ React__default.createElement(BasicCard, {
    title: "Mahjongg Solitaire"
  }))));
};
const drawerWidth = 240;
const App$1 = () => {
  const [selectedIndex, setSelectedIndex] = React__default.useState(0);
  const [open, setOpen] = React__default.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleListItemClick = (event2, index2) => {
    setSelectedIndex(index2);
  };
  const homePages = [
    {
      name: "Home",
      path: "/",
      index: 0
    }
  ];
  const gamePages = [
    {
      name: "Mahjongg Solitaire",
      path: "/cubes-with-vertex-arrays",
      index: 0
    }
  ];
  const navigate = useNavigate();
  const createListItem = (name, path, index2) => /* @__PURE__ */ React__default.createElement(ListItem, {
    button: true,
    key: name,
    selected: index2 === selectedIndex,
    onClick: (event2) => {
      navigate(path);
      handleListItemClick(event2, index2);
    }
  }, /* @__PURE__ */ React__default.createElement(ListItemIcon, null, index2 % 2 === 0 ? /* @__PURE__ */ React__default.createElement(default_1, null) : /* @__PURE__ */ React__default.createElement(default_1$1, null)), /* @__PURE__ */ React__default.createElement(ListItemText, {
    primary: name
  }));
  const createSubListItem = (name, path, index2) => /* @__PURE__ */ React__default.createElement(ListItemButton, {
    sx: { pl: 4 }
  }, /* @__PURE__ */ React__default.createElement(ListItemIcon, null, /* @__PURE__ */ React__default.createElement(default_1$4, null)), /* @__PURE__ */ React__default.createElement(ListItemText, {
    primary: name,
    onClick: () => {
      navigate(path);
      handleListItemClick(event, index2);
    }
  }));
  return /* @__PURE__ */ React__default.createElement(Box, {
    sx: { display: "flex" }
  }, /* @__PURE__ */ React__default.createElement(CssBaseline, null), /* @__PURE__ */ React__default.createElement(AppBar, {
    position: "fixed",
    sx: { width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }
  }, /* @__PURE__ */ React__default.createElement(Toolbar, null, /* @__PURE__ */ React__default.createElement(Typography, {
    variant: "h6",
    noWrap: true,
    component: "div"
  }, "Ishikawa Masashi"))), /* @__PURE__ */ React__default.createElement(Drawer, {
    sx: {
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box"
      }
    },
    variant: "permanent",
    anchor: "left"
  }, /* @__PURE__ */ React__default.createElement(Toolbar, null), /* @__PURE__ */ React__default.createElement(Divider, null), /* @__PURE__ */ React__default.createElement(List, null, /* @__PURE__ */ React__default.createElement(ListSubheader, {
    component: "div",
    id: "nested-list-subheader"
  }, "Index"), homePages.map((page, index2) => createListItem(page.name, page.path, index2))), /* @__PURE__ */ React__default.createElement(List, null, /* @__PURE__ */ React__default.createElement(ListItemButton, {
    onClick: handleClick
  }, /* @__PURE__ */ React__default.createElement(ListItemIcon, null, /* @__PURE__ */ React__default.createElement(default_1, null)), /* @__PURE__ */ React__default.createElement(ListItemText, {
    primary: "Games"
  }), open ? /* @__PURE__ */ React__default.createElement(default_1$2, null) : /* @__PURE__ */ React__default.createElement(default_1$3, null)), /* @__PURE__ */ React__default.createElement(Collapse, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, gamePages.map((page, index2) => createSubListItem(page.name, page.path, index2 + homePages.length))))), /* @__PURE__ */ React__default.createElement(Box, {
    component: "main",
    sx: { flexGrow: 1, bgcolor: "background.default", p: 3 }
  }, /* @__PURE__ */ React__default.createElement(Toolbar, null), /* @__PURE__ */ React__default.createElement(Outlet, null)));
};
const rootPath = [
  {
    path: "/",
    element: /* @__PURE__ */ React__default.createElement(App$1, null),
    children: [
      { path: "/", element: /* @__PURE__ */ React__default.createElement(Home, null) }
    ]
  }
];
const AppRoutes = () => {
  const routes = rootPath;
  const element = useRoutes([...routes]);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, element);
};
function App() {
  return /* @__PURE__ */ React__default.createElement(AppProvider, null, /* @__PURE__ */ React__default.createElement(AppRoutes, null));
}
var index = "";
ReactDOM__default.render(/* @__PURE__ */ React__default.createElement(App, null), document.getElementById("root"));
