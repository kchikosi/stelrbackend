import React from 'react'
import ReactDOM from 'react-dom/client'
import Personal from './routes/top-nav/personal.tsx'
import Business from './routes/top-nav/business.tsx'
import Enterprise from './routes/top-nav/enterprise.tsx'
import About from './routes/top-nav/about.tsx'
import Root from './routes/root.tsx'
import Privacy from './routes/bottom-nav/privacy.tsx'
import Security from './routes/bottom-nav/security.tsx'
import Legal from './routes/bottom-nav/legal.tsx'
import Help from './routes/bottom-nav/help.tsx'
import Accessibility from './routes/bottom-nav/accessibility.tsx'
import Login from './routes/login/login.tsx'
import Signup from './routes/login/signup.tsx'
import Contact from './routes/contact-us.tsx'
import FAQ from './routes/faq.tsx'

import './index.css'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/home",
        element: <Root />,
    },
    {
        path: "/personal",
        element: <Personal />,
    },
    {
        path: "/business",
        element: <Business />,
    },
    {
        path: "/enterprise",
        element: <Enterprise />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/privacy",
        element: <Privacy />,
    },
    {
        path: "/security",
        element: <Security />,
    },
    {
        path: "/legal",
        element: <Legal />,
    },
    {
        path: "/help",
        element: <Help />,
    },
    {
        path: "/accessibility",
        element: <Accessibility />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/faq",
        element: <FAQ />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
