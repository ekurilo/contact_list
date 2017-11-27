
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

export const addingContact = contact => ({
  type: 'ADDING_CONTACT',
  contact
});

export const addContactSuccess = contact => ({
  type: 'ADD_CONTACT_SUCCESS',
  contact
});

export const deletingContact = contact => ({
  type: 'DELETING_CONTACT',
  contact
});

export const deleteContactSuccess = contact => ({
  type: 'DELETE_CONTACT_SUCCESS',
  contact
});

export const fetchingContact = id => ({
  type: 'FETCHING_CONTACT',
  id
});

export const fetchContactSuccess = contact => ({
  type: 'FETCH_CONTACT_SUCCESS',
  contact
});

export const fetchContactFailure = error => ({
  type: 'FETCH_CONTACT_FAILURE',
  error
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
    dispatch(addingContact(contact));
    return fetch(contactUrl, {
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

export const deleteContact = contact => dispatch => {
  dispatch(deletingContact(contact));
  return fetch(`${contactUrl}/${contact.id}`, {
    method: 'delete'
  })
    .then(resp => dispatch(deleteContactSuccess(contact)))
};

export const fetchContact = id => dispatch => {
  dispatch(fetchingContact(id));
  return fetch(`${contactUrl}/${id}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error("contact not found")
      }
      return resp.json()
    })
    .then(json => dispatch(fetchContactSuccess(json)))
    .catch(error => dispatch(fetchContactFailure(error)) )
}