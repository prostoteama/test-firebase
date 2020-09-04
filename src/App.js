import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/fireabse/FirebaseState';

function App() { 
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-3">
            <Switch>
              <Route path={"/"} exact component={Home}></Route>
              <Route path={"/about"} component={About}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
