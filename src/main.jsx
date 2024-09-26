import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Home from './screens/Home/Home.jsx';
import CountryDetails from './screens/CountryDetails/CountryDetails.jsx';

import { store } from './store.js';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <div>404 element not found</div>,
    },
    {
        path: '/country/:countryId',
        element: <CountryDetails />,
        errorElement: <div>404 element not found</div>,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
