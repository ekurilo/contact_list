
export default (state = {contacts:[], isLoading: false}, action) => {
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

    default:
      return state;
  }
}

