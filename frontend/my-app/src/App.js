import logo from './logo.svg';
import './App.css';
import { Link, Route, Router,Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import {Provider} from "react-redux"
import {store}  from './redux/store';
import { useNavigate } from "react-router-dom";
import {Routing} from './components/routing' 
import {Nav} from './components/nav'
import { Registration } from './components/registration';




function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      
      <Nav></Nav>
  <Routing></Routing>
  </div>
  </BrowserRouter>
  </Provider> 
  );
}

export default App;
