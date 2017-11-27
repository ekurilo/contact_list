
export default (state = {contacts:[], isLoading: false, contact: {}}, action) => {
  switch (action.type) {

    case 'FETCHING_CONTACTS':
      return {
        ...state,
        timestamp: action.payload,
        isLoading: true
      };

    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.contacts,
        isLoading: false
      };

    case 'NEW_CONTACT':
      return {
        ...state,
        contact: {}
      };

    case 'ADDING_CONTACT':
      return {
        ...state,
        contact: action.contact,
        isLoading: true
      };

    case 'ADD_CONTACT_SUCCESS':
      return {
        ...state,
        contacts: [...state.contacts, action.contact],
        isLoading: false
      };

    case 'DELETING_CONTACT':
      return {
        ...state,
        contact: action.contact,
        isLoading: true
      };

    case 'DELETE_CONTACT_SUCCESS':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.contact.id),
        isLoading: false,
        contact: {}
      };

    case 'FETCHING_CONTACT':
      return {
        ...state,
        isLoading: true,
        contact: {}
      };

    case 'FETCH_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        contact: action.contact
      };


    default:
      return state;
  }
}

