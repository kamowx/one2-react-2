import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './screens/about'
import Hhome from './screens/hhome'
import Home from './screens/home'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {


    return (
        <>

            <BrowserRouter>

                

                <Routes>
                    <Route path='/' element={<Hhome />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/hhome' element={<Hhome />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App

