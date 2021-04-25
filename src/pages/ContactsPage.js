import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import style from './style/loader.module.css';
import ContactsForm from '../components/ContactForm';

import Filter from '../components/Filter';

import ContactList from '../components/ContactList';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h2>Contacts</h2>

        <ContactsForm />

        <Filter />

        {this.props.isLoadingContacts && (
          <Loader
            className={style.spinner}
            type="ThreeDots"
            color="#1877f2"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}

        <ContactList />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
