import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';

const link = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/components/missions',
    text: 'Missions',
  },
  {
    id: 4,
    path: '/components/profile',
    text: 'MyProfile',
  },
];

const Navbar = () => (
  <nav>
    <ul className="nav-links">
      {link.map(({ id, path, text }) => (
        <li key={id}>
          <NavLink
            to={path}
            className="nav-link"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
              color: '#0079f9',
            })}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
// export default Header;
