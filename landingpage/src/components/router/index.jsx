import React from "react"; 
import{ Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/index.jsx";

const RouterComponent = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;