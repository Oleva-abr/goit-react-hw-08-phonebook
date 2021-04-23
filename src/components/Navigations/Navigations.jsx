import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Data
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuth }) => {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        // className="nav-link"
        // activeClassName="active-nav-link"
      >
        Home
      </NavLink>

      {isAuth && (
        <NavLink
          exact
          to="/contacts"
          //   className="nav-link"
          //   activeClassName="active-nav-link"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuth: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
