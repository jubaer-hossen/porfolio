import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import Footer from './components/Footer/Footer';
import Camera from './components/Project/Camera/Camera';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courier from './components/Project/Courier/Courier';
import Pharmacies from './components/Project/Pharmacies/Pharmacies';
import Vlogs from './components/Vlogs/Vlogs';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/camera" element={<Camera></Camera>}></Route>
                    <Route
                        path="/courier"
                        element={<Courier></Courier>}
                    ></Route>
                    <Route
                        path="/pharmacies"
                        element={<Pharmacies></Pharmacies>}
                    ></Route>
                    <Route path="/vlog" element={<Vlogs></Vlogs>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
