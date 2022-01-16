import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Login from './components/login';
import './App.css';
const App = () => {
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
      </div>
    </BrowserRouter>
  );
};
export default App;
