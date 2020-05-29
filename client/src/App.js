import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './route';
import { Navbar } from './components/Navbar';
import 'materialize-css';

function App() {
  const routes = useRoutes(false);
  return (
    <Router>
      <Navbar />
      <div className="container">
        {routes}
      </div>
    </Router>
  );
}
export default App;
