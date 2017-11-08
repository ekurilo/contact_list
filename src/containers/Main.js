
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllContacts} from '../actions/contacts';
import {bindActionCreators} from 'redux';
import ContactList from '../components/ContactList';

class Main extends Component {
  componentDidMount() {
    this.props.fetchAllContacts();
  }
  render() {
    return(
      <div>
        <ContactList contacts={this.props.contacts}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contactStore.contacts
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchAllContacts}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Main)