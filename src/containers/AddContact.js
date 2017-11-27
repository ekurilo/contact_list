
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addContactRequest, newContact} from '../actions/contacts';
import ContactForm from './contact-form';
import {Redirect} from 'react-router-dom';

class AddContact extends Component {

  state = {
    isRedirect: false
  };

  componentDidMount() {
    this.props.newContact();
  }
  handleAdd(contact) {
    this.props.addContactRequest(contact)
      .then(resp => this.setState({isRedirect: true}))
  }

  render() {
    return (
      <div>
        {this.state.isRedirect ? <Redirect to="/"/> : <ContactForm onSubmit={this.handleAdd.bind(this)}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contactStore.contact
});

export default connect(mapStateToProps, {newContact, addContactRequest})(AddContact)