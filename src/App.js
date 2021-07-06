
import React, {useEffect } from 'react';
import HomeContainer from './components/HomeContainer'
import { BrowserRouter, Switch, Route, NavLink, useHistory} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path ='/'>
            <HomeContainer />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;