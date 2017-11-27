
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchContact} from '../actions/contacts';
import ContactForm from './contact-form';

class EditContact extends Component {

  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id)
  }

  handleSubmit = contact => {
    console.log(contact)
  }
  render() {
    return(
      <div>
        {!this.props.isLoading && <ContactForm onSubmit={this.handleSubmit}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contactStore.contact,
  isLoading: state.contactStore.isLoading
});

export default connect(mapStateToProps, {fetchContact})(EditContact)

