import React from 'react';
import { connect } from 'react-redux';
import style from './userMenu.module.css';

import { authSelectors, authOperations } from '../../redux/auth';

import defaultAvatar from './defaultAvatar.png';

const UserMenu = ({ name, avatar, onLogout }) => {
  return (
    <div>
      <img src={avatar} alt="" width="32" />

      <span>Welcome, {name}</span>

      <button className={style.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
