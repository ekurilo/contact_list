
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addContactRequest, newContact} from '../actions/contacts';
import ContactForm from './contact-form';

class AddContact extends Component {

  componentDidMount() {
    this.props.newContact();
  }
  handleAdd(contact) {
    this.props.addContactRequest(contact)
  }

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.handleAdd.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contactStore.contact
});

export default connect(mapStateToProps, {newContact, addContactRequest})(AddContact)