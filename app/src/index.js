import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Create from './pages/Create';
import Cart from './pages/Cart';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Catalog from './pages/Catalog';
import Item from './pages/Item';

import { AnimalProvider } from './animal_context';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/item/:id",
    element: <Item />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AnimalProvider>
          <RouterProvider router={router} />
        </AnimalProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
