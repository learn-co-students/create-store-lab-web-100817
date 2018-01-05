const initStore = {users: []}

export default function manageUsers(state = initStore, action){
  switch (action.type) {
    case 'ADD_USER':
      return {...state, users: [...state.users, action.user]};
      break;
    default:
      return state;
  }
}
