import React from 'react';
// import {
//   BrowserRouter,
//   Route,
//   Switch,
//   useParams,
//   useHistory,
//   useLocation,
// } from 'react-router-dom';

import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';

// import { PermanentDrawerLeft } from './components/Home';

// export const App: React.VFC = () => {
//   return (
//     <BrowserRouter>
//       <PermanentDrawerLeft />
//     </BrowserRouter>
//   );
// };

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
