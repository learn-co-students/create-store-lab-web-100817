export default function manageUsers(state, action) {
  console.log("manageUsers", (state = { users: [] }), action);
  switch (action.type) {
    case "ADD_USER":
      console.log(
        "adduser=state",
        state.users,
        action.user.username,
        action.user.hometown
      );
      return {
        users: [...state.users, action.user]
      };
    default:
      return state;
  }
}
