
import './App.css';
import React, {useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, useHistory} from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path ='/'>
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;