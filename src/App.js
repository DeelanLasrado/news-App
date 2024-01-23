
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>

        <Routes>
        <Route path="/"  element={<News key="home" pageSize={12} country="us" category=""/>} />
        <Route path="/business"  element={<News key="business" pageSize={12} country="us" category="business"/>} />
        <Route path="/sports"  element={<News key="sports" pageSize={12} country="us" category="sports"/>} />
        <Route path="/entertainment"  element={<News key="entertainment" pageSize={12} country="us" category="entertainment"/>} />
        <Route path="/health"  element={<News key="health" pageSize={12} country="us" category="health"/>} />
        <Route path="/science"  element={<News key="science" pageSize={12} country="us" category="science"/>} />
        <Route path="/technology"  element={<News key="technology" pageSize={12} country="us" category="technology"/>} />
        <Route path="/general"  element={<News key="general" pageSize={12} country="us" category="general"/>} />

      </Routes>



        
        </BrowserRouter>


      </div>

    )
  }
}



