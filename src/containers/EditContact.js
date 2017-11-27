
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchContact, updateContact} from '../actions/contacts';
import ContactForm from './contact-form';
import {Redirect} from 'react-router-dom';

class EditContact extends Component {

  state = {
    isRedirect: false
  }
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id)
  }

  handleSubmit = contact => {
    this.props.updateContact(this.props.contact.id, contact)
      .then(resp => this.setState({isRedirect: true}))
  };

  render() {
    return(
      <div>
        {this.state.isRedirect ? <Redirect to="/"/> : !this.props.isLoading && <ContactForm onSubmit={this.handleSubmit}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contactStore.contact,
  isLoading: state.contactStore.isLoading
});

export default connect(mapStateToProps, {fetchContact, updateContact})(EditContact)

