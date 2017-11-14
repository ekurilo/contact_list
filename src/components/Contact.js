
import React, {Component} from 'react';
import {IconButton, IconMenu, ListItem, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';



export default class Contact extends Component {

  iconButton = (
    <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left" >
      <MoreVertIcon/>
    </IconButton>
  );

  iconMenu = (
    <IconMenu iconButtonElement={this.iconButton}>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Delete</MenuItem>
    </IconMenu>
  );

  render() {
    return(
      <ListItem rightIconButton={this.iconMenu}>
        <div>{this.props.contact.firstName}</div>
        <div>{this.props.contact.lastName}</div>
        <div>{this.props.contact.tel}</div>
      </ListItem>
    );
  }
}