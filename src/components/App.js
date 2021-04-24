import React, { Component } from 'react';

import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import AppBar from './AppBar/AppBar';
import RegisterPage from '../pages/RegisterPage';
import { Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ContactsPage from '../pages/ContactsPage';
import Container from './Container';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <Container>
          <AppBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/contacts" component={ContactsPage} />
          </Switch>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
