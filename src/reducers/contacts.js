
export default (state = {}, action) => {
  switch (action.type) {

    case 'FETCHING_CONTACTS':
      return {
        ...state,
        timestamp: action.payload
      }

    default:
      return state;
  }
}

