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
import { R as React, B as BrowserRouter, u as useNavigate, r as react, C as Card, a as CardActionArea, T as Typography, b as CardMedia, c as CardContent, s as styled, P as Paper, d as Box, G as Grid, e as Container, f as Button, g as useRoutes, h as CssBaseline, A as AppBar, i as Toolbar, D as Drawer, j as Divider, L as List, k as ListSubheader, l as ListItem, m as ListItemIcon, n as ListItemText, o as ListItemButton, p as default_1, q as default_1$1, t as default_1$2, v as Collapse, w as default_1$3, O as Outlet, x as default_1$4, y as ReactDOM } from "./vendor.54c8173c.js";
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
  return /* @__PURE__ */ React.createElement(BrowserRouter, null, children);
};
const BasicCard = (props) => {
  const { title, description = "", href = "", path = "" } = props;
  const navigate = useNavigate();
  return /* @__PURE__ */ react.exports.createElement(Card, {
    sx: { minWidth: 275 }
  }, /* @__PURE__ */ react.exports.createElement(CardActionArea, {
    onClick: () => navigate(path)
  }, /* @__PURE__ */ react.exports.createElement(Typography, {
    gutterBottom: true,
    variant: "h5",
    component: "div",
    align: "center"
  }, title), /* @__PURE__ */ react.exports.createElement(CardMedia, {
    component: "img",
    height: "194",
    image: "/images/MahjonggSolitaire.png",
    alt: "Paella dish"
  }), /* @__PURE__ */ react.exports.createElement(CardContent, null, /* @__PURE__ */ react.exports.createElement(Typography, {
    variant: "body2",
    color: "text.secondary"
  }, description, /* @__PURE__ */ react.exports.createElement("br", null)))));
};
styled(Paper)(({ theme }) => __spreadProps(__spreadValues({}, theme.typography.body2), {
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
const Home = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, {
    component: "main",
    sx: { flexGrow: 1, bgcolor: "background.paper", p: 3 }
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4",
    gutterBottom: true,
    component: "div",
    align: "center"
  }, "\u4F5C\u3063\u305F\u30B2\u30FC\u30E0\u3084\u30E9\u30A4\u30D6\u30E9\u30EA")), /* @__PURE__ */ React.createElement(Box, {
    component: "main",
    sx: { flexGrow: 1, bgcolor: "#fafafa", p: 3 }
  }, /* @__PURE__ */ React.createElement(Box, {
    sx: {
      padding: "16px"
    }
  }, /* @__PURE__ */ React.createElement(Typography, {
    gutterBottom: true,
    variant: "h4",
    component: "div"
  }, "Games"), /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: { xs: 2, md: 3 },
    columns: { xs: 4, sm: 8, md: 12 }
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 2,
    sm: 4,
    md: 4
  }, /* @__PURE__ */ React.createElement(BasicCard, {
    title: "Mahjongg Solitaire",
    description: "\u7A4D\u307F\u4E0A\u3052\u3089\u308C\u305F\u9EBB\u96C0\u724C\u306E\u5C71\u304B\u3089\u3001\u3042\u308B\u4E00\u5B9A\u306E\u30EB\u30FC\u30EB\u306B\u5F93\u3063\u3066\u724C\u3092\u53D6\u308A\u9664\u3044\u3066\u3044\u304F\u3001\u30D1\u30BA\u30EB\u30B2\u30FC\u30E0\u3002",
    href: "https://mystifying-leakey-44c457.netlify.app/",
    path: "/mahjongg-solitaire"
  }))))), /* @__PURE__ */ React.createElement(Container, {
    maxWidth: "sm"
  }));
};
const ReferenceCard = (props) => {
  const { url = "", image } = props;
  return /* @__PURE__ */ react.exports.createElement(Card, {
    sx: { maxWidth: 345 }
  }, /* @__PURE__ */ react.exports.createElement(CardMedia, {
    component: "img",
    height: "140",
    image,
    alt: "image"
  }), /* @__PURE__ */ react.exports.createElement(CardContent, null, /* @__PURE__ */ react.exports.createElement(Box, {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pl: 1,
      pb: 1
    }
  }, /* @__PURE__ */ react.exports.createElement(Button, {
    variant: "contained",
    onClick: () => {
      window.open(url);
    }
  }, "\u30B2\u30FC\u30E0\u3092\u30D7\u30EC\u30A4\u3059\u308B")), /* @__PURE__ */ react.exports.createElement(Typography, {
    variant: "body2",
    color: "text.secondary",
    align: "center"
  }, "\u6CE8\u610F: \u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u5225\u306E\u30BF\u30D6\u304C\u958B\u304D\u307E\u3059")));
};
const MahjonggSolitaire = () => {
  return /* @__PURE__ */ React.createElement(Box, {
    component: "main",
    sx: { flexGrow: 1, bgcolor: "background.paper", p: 3 }
  }, /* @__PURE__ */ React.createElement(Typography, {
    gutterBottom: true,
    variant: "h4",
    component: "div",
    align: "center"
  }, "Mahjongg Solitaire"), /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(ReferenceCard, {
    image: "/images/MahjonggSolitaire.png",
    url: "https://mystifying-leakey-44c457.netlify.app/"
  })), /* @__PURE__ */ React.createElement(Box, {
    sx: { p: 4 }
  }, /* @__PURE__ */ React.createElement(Typography, {
    gutterBottom: true,
    variant: "h4",
    component: "div"
  }, "\u904A\u3073\u65B9"), /* @__PURE__ */ React.createElement(Typography, {
    gutterBottom: true,
    variant: "body1",
    component: "div"
  }, "\u540C\u3058\u724C\u3092\u30BF\u30C3\u30C1\u3057\u30662\u500B1\u7D44\u3067\u6D88\u3057\u3066\u3044\u304F\u3002\u305F\u3060\u3057\u3001\u5DE6\u53F3\u306B\u724C\u304C\u3042\u308B\u724C\u3068\u3001\u724C\u306E\u4E0B\u306B\u3042\u308B\u724C\u306F\u6D88\u53BB\u3067\u304D\u306A\u3044\u3002")));
};
const drawerWidth = 240;
const App$1 = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [open, setOpen] = React.useState(true);
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
      icon: /* @__PURE__ */ React.createElement(default_1$4, null),
      index: 0
    }
  ];
  const gamePages = [
    {
      name: "Mahjongg Solitaire",
      path: "/mahjongg-solitaire",
      index: 0
    }
  ];
  const navigate = useNavigate();
  const createListItem = (name, path, icon, index2) => /* @__PURE__ */ React.createElement(ListItem, {
    button: true,
    key: name,
    selected: index2 === selectedIndex,
    onClick: (event2) => {
      navigate(path);
      handleListItemClick(event2, index2);
    }
  }, /* @__PURE__ */ React.createElement(ListItemIcon, null, icon), /* @__PURE__ */ React.createElement(ListItemText, {
    primary: name
  }));
  const createSubListItem = (name, path, index2) => /* @__PURE__ */ React.createElement(ListItemButton, {
    sx: { pl: 4 },
    onClick: () => {
      navigate(path);
      handleListItemClick(event, index2);
    }
  }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(default_1$3, null)), /* @__PURE__ */ React.createElement(ListItemText, {
    primary: name
  }));
  return /* @__PURE__ */ React.createElement(Box, {
    sx: { display: "flex" }
  }, /* @__PURE__ */ React.createElement(CssBaseline, null), /* @__PURE__ */ React.createElement(AppBar, {
    position: "fixed",
    sx: { width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }
  }, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    noWrap: true,
    component: "div"
  }, "Ishikawa Masashi"))), /* @__PURE__ */ React.createElement(Drawer, {
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
  }, /* @__PURE__ */ React.createElement(Toolbar, null), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListSubheader, {
    component: "div",
    id: "nested-list-subheader"
  }, "Index"), homePages.map((page, index2) => createListItem(page.name, page.path, page.icon, index2))), /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListItemButton, {
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(default_1, null)), /* @__PURE__ */ React.createElement(ListItemText, {
    primary: "Games"
  }), open ? /* @__PURE__ */ React.createElement(default_1$1, null) : /* @__PURE__ */ React.createElement(default_1$2, null)), /* @__PURE__ */ React.createElement(Collapse, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, gamePages.map((page, index2) => createSubListItem(page.name, page.path, index2 + homePages.length))))), /* @__PURE__ */ React.createElement(Box, {
    component: "main",
    sx: { flexGrow: 1, bgcolor: "background.default" }
  }, /* @__PURE__ */ React.createElement(Toolbar, null), /* @__PURE__ */ React.createElement(Outlet, null)));
};
const rootPath = [
  {
    path: "/",
    element: /* @__PURE__ */ React.createElement(App$1, null),
    children: [
      { path: "/", element: /* @__PURE__ */ React.createElement(Home, null) },
      { path: "/mahjongg-solitaire", element: /* @__PURE__ */ React.createElement(MahjonggSolitaire, null) }
    ]
  }
];
const AppRoutes = () => {
  const routes = rootPath;
  const element = useRoutes([...routes]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, element);
};
function App() {
  return /* @__PURE__ */ React.createElement(AppProvider, null, /* @__PURE__ */ React.createElement(AppRoutes, null));
}
var index = "";
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
