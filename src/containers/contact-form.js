import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {FlatButton, TextField} from 'material-ui';
import {connect} from 'react-redux';
import {fetchContactSuccess} from '../actions/contacts';

class ContactForm extends Component {
  createTextField = ({input, label}) => <TextField hintText={label} floatingLabelText={label} {...input} />;

  render() {
    return (
      <form>
        <div>
          <Field name="firstName" component={this.createTextField} label="First Name"/>
        </div>
        <div>
          <Field name="lastName" component={this.createTextField} label="Last Name"/>
        </div>
        <div>
          <Field name="tel" component={this.createTextField} label="Phone"/>
        </div>

        <FlatButton primary={true} onClick={this.props.handleSubmit}>Save</FlatButton>
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: 'contactForm'
})(ContactForm);

export default connect(state => ({
  initialValues: state.contactStore.contact
}))(ContactForm);
