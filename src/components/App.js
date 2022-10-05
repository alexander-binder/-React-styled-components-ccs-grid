import React,{ useState, useEffect} from 'react';
import { createGlobalStyle as GlobalStyle} from "styled-components";
import ReactDOM from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import Home from './pages/Home';
import { PageLayout } from './common/PageLayout';
import {BrowserRouter , Routes , Route} from 'react-router-dom'


const App = () => {

    return( 
          <>
       <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home/>} />
       
       
      </Routes>
  </BrowserRouter>
          
     
          </>
    ); 

  };

export default App;