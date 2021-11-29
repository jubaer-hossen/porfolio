import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Project/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <div>
            <Router>
                <Home></Home>
                <Routes>
                    <Route path="#home" element={<Home></Home>}></Route>
                    <Route
                        path="#projects"
                        element={<Projects></Projects>}
                    ></Route>
                    <Route path="#about" element={<About></About>}></Route>
                    <Route
                        path="#contact"
                        element={<Contact></Contact>}
                    ></Route>
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
