import React, { useState } from 'react';
import { InfiniteScroll } from './InfiniteScroll';
import { Login } from './Login'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (<Login setIsAuthenticated={setIsAuthenticated} />)} />
        <Route
          path='/home'
          render={
            () => isAuthenticated
              ? <InfiniteScroll setIsAuthenticated={setIsAuthenticated}/>
              : <Redirect to={{ pathname: '/' }} />
          }
        />
        <Route path='*' render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
