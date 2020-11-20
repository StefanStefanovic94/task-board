import ACTIONS from '../../constans/ACTIONS';

const addUserToList = (newUser) => {
  return {
    type: ACTIONS.ADD_USER_TO_LIST,
    allUsers: newUser,
  };
};
const deleteUser = (id) => {
  return {
    type: ACTIONS.DELETE_USER,
    index: id,
  };
};
export { addUserToList, deleteUser };
