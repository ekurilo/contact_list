
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addContactRequest, newContact} from '../actions/contacts';

class AddContact extends Component {
  state = {
    firstName: '',
    lastName: '',
    tel: ''
  };

  componentDidMount() {
    this.props.newContact();
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleAdd() {
    this.props.addContactRequest({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      tel: this.state.tel
    })
  }

  render() {
    return (
      <div>
        <input name="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName}/>
        <input name="lastName" onChange={this.handleChange.bind(this)} value={this.state.lastName}/>
        <input name="tel" onChange={this.handleChange.bind(this)} value={this.state.tel}/>
        <button onClick={this.handleAdd.bind(this)}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contactStore.contact
});

export default connect(mapStateToProps, {newContact, addContactRequest})(AddContact)