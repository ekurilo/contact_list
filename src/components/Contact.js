
import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    return(
      <div>
        <div>{this.props.contact.firstName}</div>
        <div>{this.props.contact.lastName}</div>
        <div>{this.props.contact.tel}</div>
      </div>
    );
  }
}