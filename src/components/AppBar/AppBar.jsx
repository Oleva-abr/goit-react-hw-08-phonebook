import React from 'react';
import { connect } from 'react-redux';

// Data
import { authSelectors } from '../../redux/auth';

import Navigations from '../Navigations';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

const AppBar = ({ isAuth }) => {
  return (
    <header>
      <Navigations />

      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuth: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
