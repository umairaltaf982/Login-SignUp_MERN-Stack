import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div>
        <h1>MERN Auth App</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* Add more routes for other pages if necessary */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
