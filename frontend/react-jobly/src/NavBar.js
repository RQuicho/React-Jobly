import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'reactstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar expand="md" color='light'>
        <NavLink to='/' className="navbar-brand">
          Jobly
        </NavLink>

        {/* Show links to login and signup forms depending on if user is logged in */}

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/companies'>Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/jobs'>Jobs</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar;