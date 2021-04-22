import React from 'react';
import { connect } from 'react-redux';

// Data
// import { authSelectors, authOperations } from '../../redux/auth';

// import defaultAvatar from './default-avatar.png';

// Styles

const UserMenu = ({ name, avatar, onLogout }) => {
  return (
    <div>
      <img src={avatar} alt="" width="32" />

      <span>Welcome, {name}</span>

      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   //   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

export default connect()(UserMenu); //mapStateToProps, mapDispatchToProps
