import { createRoot } from 'react-dom/client'
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
import Logout from './routes/login/logout.tsx'
import Signup from './routes/login/signup.tsx'
import Contact from './routes/contact-us.tsx'
import FAQ from './routes/faq.tsx'

import './index.css'


import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/home-page.tsx'

const root = createRoot(document.getElementById('root')!);

root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Root/>} />
        <Route path='home' element={<Home/>} />
        <Route path='personal' element={<Personal/>} />
        <Route path='business' element={<Business/>} />
        <Route path='enterprise' element={<Enterprise/>} />
        <Route path='about' element={<About/>} />
        <Route path='privacy' element={<Privacy/>} />
        <Route path='security' element={<Security/>} />
        <Route path='legal' element={<Legal/>} />
        <Route path='help' element={<Help/>} />
        <Route path='accessibility' element={<Accessibility/>} />
        <Route path='login' element={<Login/>} />
        <Route path='logout' element={<Logout/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='faq' element={<FAQ/>} />
    </Routes>
    </BrowserRouter>
)


