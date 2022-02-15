import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from "./SignIn";
import Home from "./Home";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Mens from "./Mens";
import Womens from "./Womens";
import Kids from "./Kids";
import Watches from "./Watches";
import Accessories from "./Accessories";
import Error from "./Error";

const App = () => {
 return(
   <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<Error/>}></Route>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/signin' exact element={<SignIn />}></Route>
        <Route path='/categories' exact element={<Categories />}></Route>
        <Route path='/categories/mens' exact element={<Mens />}></Route>
        <Route path='/categories/womens' exact element={<Womens />}></Route>
        <Route path='/categories/kids' exact element={<Kids />}></Route>
        <Route path='/categories/watches' exact element={<Watches />}></Route>
        <Route path='/categories/accessories' exact element={<Accessories />}></Route>
      </Routes>
    </Router>
   </div>
 ) 
}

export default App