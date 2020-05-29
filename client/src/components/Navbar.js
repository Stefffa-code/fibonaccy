import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min';


export function Navbar() {
  useEffect(() => {
    const elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
    });
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <span href="#" data-target="slide-out" className="sidenav-trigger"><i className="large material-icons">menu</i></span>
          <span className="brand-logo">Fibonacci</span>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/fib" activeClassName="active">
                Числа Фибоначчи
              </NavLink>
            </li>
            <li>
              <NavLink to="/history" activeClassName="active">
                История
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav teal white-text">
        <span className="sidenav-close"><i className="material-icons">close</i></span>
        <p>Fibonacci</p>
        <li>
          <NavLink to="/fib" activeClassName="active" className="white-text">
            Числа Фибоначчи
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" activeClassName="active" className="white-text">
            История
          </NavLink>
        </li>
      </ul>
    </div>


  );
}
