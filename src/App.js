import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Dashboard';
import Login from './components/login';
import Error from './components/Error';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Error">
          <Error />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
