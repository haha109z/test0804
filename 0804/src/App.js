import './App.css';
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'


import Home from './container/index'

function App() {
  return (
    <Router>
      <>
      <Route path="/">
            <Home />
          </Route>
      </>
    </Router>
  );
}

export default App;
