import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Home from './screens/Home/Home.tsx';
import CountryDetails from './screens/CountryDetails/CountryDetails.tsx';

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

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
