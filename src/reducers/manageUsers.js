// import cuid from 'cuid';

export default function manageUsers(state = { users: [] }, action) {
  const copyOfState = { ...state };
  switch (action.type) {
    case 'ADD_USER':
      copyOfState.users.push(action.user);
      return copyOfState;
    default:
      return state;
  }
}
