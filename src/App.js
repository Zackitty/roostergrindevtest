
import './App.css';
import React, {useEffect } from 'react';
import HomeWrapper from './components/HomeWrapper'
import { BrowserRouter, Switch, Route, NavLink, useHistory} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path ='/'>
            <HomeWrapper />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;