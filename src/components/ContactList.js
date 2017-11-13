
import React, {Component} from 'react';
import Contact from './Contact';

export default class ContactList extends Component {
  render() {
    let contacts = this.props.contacts.map(contact =>
      <Contact key={contact.id} contact={contact}/>
    );
    return(
      <div>
        {contacts}
      </div>
    );
  }
}