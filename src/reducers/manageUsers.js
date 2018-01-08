export default function manageUsers(state = {users: []}, action){
  console.log(action);
  switch(action.type){
    case 'ADD_USER':
      // console.log(state.users)
      // console.log(state.users.concat(action.band))
      const newState = Object.assign({}, state, {users: state.users.concat(action.user)})
      console.log(newState)
      return newState
    default:
      return state;
  }
}
