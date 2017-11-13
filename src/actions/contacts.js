
export const fetchingAllContacts = () => ({
  type: 'FETCHING_CONTACTS',
  payload: new Date()
});

export const fetchAllContactsSuccess = (contacts) => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  contacts
});

export const fetchAllContactsFailure = (errors) => ({
  type: 'FETCH_CONTACTS_FAILURE',
  errors
});

export const newContact = () => dispatch => dispatch ({
  type: 'NEW_CONTACT'
});

export const addContact = contact => ({
  type: 'ADD_CONTACT',
  contact
});

export const addContactSuccess = contact => ({
  type: 'ADD_CONTACT_SUCCESS',
  contact
});

const contactUrl = 'http://localhost:8090/api/contacts';
export function fetchAllContacts() {
  return dispatch => {
    dispatch(fetchingAllContacts());
    return fetch(contactUrl)
      .then(resp => resp.json())
      .then(json => dispatch(fetchAllContactsSuccess(json._embedded.contacts)))
      .catch(error => dispatch(fetchAllContactsFailure(error)))
  }
}

export function addContactRequest(contact) {
  return dispatch => {
    dispatch(addContact(contact));
    fetch(contactUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(resp => resp.json())
      .then(json => dispatch(addContactSuccess(json)))
  }
}