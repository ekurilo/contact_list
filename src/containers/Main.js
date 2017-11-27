
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteContact, fetchAllContacts} from '../actions/contacts';
import {bindActionCreators} from 'redux';
import ContactList from '../components/ContactList';
import {Link} from 'react-router-dom';
import {FlatButton} from 'material-ui';

class Main extends Component {

  componentDidMount() {
    this.props.fetchAllContacts();
  }
  render() {
    return(
      <div>
        <Link to="/add"><FlatButton primary={true}>Add contact</FlatButton></Link>
        <ContactList contacts={this.props.contacts} deleteContact={this.props.deleteContact}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contactStore.contacts
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchAllContacts, deleteContact}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Main)