import React from "react";
import './App.css';
import {Header} from "../Navigation/Header/Header";
import {Footer} from "../Navigation/Footer/Footer";
import {Homepage} from "../Home/Homepage";
import {Catalog} from "../Home/Catalog";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
                <Route path={'/'} element={<Homepage />} />
                <Route path={'/catalog'} element={<Catalog />} />
                <Route path={'/cart'} element={<h1>Hello cart</h1>} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
)

export default App;