import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import operations from '../redux/contacts/phoneBookOperations';
import { connect } from 'react-redux';
import selector from '../redux/contacts/phoneBookSelectors';
class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h2>Loading...</h2>}
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingContacts: selector.getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
