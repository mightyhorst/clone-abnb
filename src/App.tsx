import React from "react";
import "./App.css";

/**
 * @requires Router
 */
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

/**
 * @requires Pages
 */
import { 
  HomePage,
  TripsPage, 
  SearchPage,
  DetailsPage,
} from "./pages";

function App() {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route path='/trips'>
            <TripsPage />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/details'>
            <DetailsPage />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/'>
            <HomePage />
            {/* <DetailsPage /> */}
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
