import ACTIONS from '../../constans/ACTIONS';

const initialState = {
  allUsers: [
    {
      name: 'Stefan Stefanovic',
      avatarImage: '',
      value: 0,
    },
    {
      name: 'Pera Peric',
      avatarImage: '',
      value: 1,
    },
    {
      name: 'Maja Novicic',
      avatarImage: '',
      value: 2,
    },
    {
      name: 'Milos Peric',
      avatarImage: '',
      value: 3,
    },
  ],
};
export default function issueReducer(state = initialState, action) {
  const { index } = action;
  const newArr = [...state.allUsers];
  newArr.splice(index, 1);

  switch (action.type) {
    case ACTIONS.ADD_USER_TO_LIST:
      return {
        ...state,
        allUsers: [
          ...state.allUsers,
          {
            name: action.allUsers.name,
            value: state.allUsers.length,
          },
        ],
      };
    case ACTIONS.DELETE_USER:
      return {
        ...state,
        allUsers: newArr.map((elem, i) => {
          if (i >= index) {
            return {
              ...elem,
              value: elem.value - 1,
            };
          }
          return elem;
        }),
      };

    default:
      return state;
  }
}
