import React from 'react';
import NewList from './NewList';
//import ShowList from './ShowList';
import {
    Routes,
    Route } from 'react-router-dom';

import Home from './Home';



function Main() {
    
    return(
        <div>
      <Routes>
        <Route exact path="/" element={  <Home  />}/>
        <Route path="/AddList" element={ <NewList />}/>
        
    </Routes>

        </div>
    )
}

export default Main;