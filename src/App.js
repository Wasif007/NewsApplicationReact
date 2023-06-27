
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import React, { Component } from 'react'
 import NewsComponent from './Components/NewsComponent';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
      <Navbar/>
      <Routes>
      <Route path='/'   
element={<NewsComponent exact key="general" pageSize={3} country="in" category="general"/>} /> 
      <Route path='/business' 
element={<NewsComponent  exact key="business"pageSize={3} country="in" category="business"/>} /> 
<Route path='/entertainment'  
element={<NewsComponent exact key="entertainment" pageSize={3} country="in" category="entertainment"/>} /> 
<Route path='/general'  
element={<NewsComponent exact key="general" pageSize={3} country="in" category="general"/>} /> 
<Route path='/health'   
element={<NewsComponent exact key="health" pageSize={3} country="in" category="health"/>} /> 
<Route path='/science'  
element={<NewsComponent exact key="science" pageSize={3} country="in" category="science"/>} /> 
<Route path='/sports'  
element={<NewsComponent exact key="sports" pageSize={3} country="in" category="sports"/>} /> 
<Route path='/technology'  
element={<NewsComponent exact key="technology" pageSize={3} country="in" category="technology"/>} />  
    		</Routes>
      </Router>
      </div>
    )
  }
}


