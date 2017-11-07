
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