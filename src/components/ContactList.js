
import React, {Component} from 'react';
import Contact from './Contact';
import {List, ListItem} from 'material-ui';

export default class ContactList extends Component {
  render() {
    let contacts = this.props.contacts.map(contact =>
      <Contact key={contact.id} contact={contact}/>
    );
    return(
      <List>
        {contacts}
      </List>
    );
  }
}