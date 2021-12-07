import React from "react";
import './App.css';
import {Header} from "../containers/Navigation/Header/Header";
import {Footer} from "../containers/Navigation/Footer/Footer";
import {Homepage} from "../containers/Pages/Home/Homepage";
import {Catalog} from "../containers/Pages/Catalog/Catalog";
import {ItemPage} from "../containers/Pages/ItemPage/ItemPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
                <Route path={'/'} element={<Homepage />} />
                <Route path={'/catalog'}>
                    <Route path='' element={<Catalog />} />
                    <Route path='item/:itemId' element={<ItemPage/>} />
                </Route>
                <Route path={'/cart'} element={<h1>Hello cart</h1>}/>
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
)

export default App;