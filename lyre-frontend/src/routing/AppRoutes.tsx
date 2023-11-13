/*
    About: Settings for Page Routing
*/

import React from 'react';

// * Routing
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// * Material-UI Components
import { Breadcrumbs, Typography } from '@mui/material';

// * Components
import Home from '../pages/Home';
import Comprehension from '../pages/Comprehension';
import Expression from '../pages/Expression';


const routes = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/comprehension',
        component: <Comprehension />
    },
    {
        path: '/expression',
        component: <Expression />
    }
];


const AppRoutes: React.FC = () => {
    // Location Data
    const location = useLocation();
    const currentPath = (location.pathname || '').replace('/', '');
    console.log("🚀 ~ file: AppRoutes.tsx:39 ~ currentPath:", currentPath)


    return (
        <>
            {currentPath &&
                <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ mb: 4 }}>
                    <Link to='/'>
                        Home
                    </Link>
                    <Typography color="text.primary">{currentPath[0].toUpperCase() + currentPath.slice(1,)}</Typography>
                </Breadcrumbs>
            }
            <Routes>
                {routes.map(route => <Route key={route.path} path={route.path} element={route.component} />)}
            </Routes>
        </>

    )
};

export default AppRoutes; 