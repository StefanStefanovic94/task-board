import ACTIONS from '../../constans/ACTIONS';

const initialState = {
  allListColumns: [
    {
      name: 'To Do',
      createdAt: 'date',
      itemCount: '',
      value: 0,
    },
    {
      name: 'In Progress',
      createdAt: 'date',
      itemCount: '',
      value: 1,
    },
    {
      name: 'On Hold',
      createdAt: 'date',
      itemCount: '',
      value: 2,
    },
    {
      name: 'Done',
      createdAt: 'date',
      itemCount: '',
      value: 3,
    },
  ],
};
export default function listColumnReducer(state = initialState, action) {
  const { index } = action;
  const newArr = [...state.allListColumns];
  newArr.splice(index, 1);

  switch (action.type) {
    case ACTIONS.ADD_LISTCOLUMN:
      return {
        ...state,
        allListColumns: [
          ...state.allListColumns,
          {
            name: action.listColumn.name,
            value: state.allListColumns.length,
          },
        ],
      };

    case ACTIONS.DELETE_COLUMN:
      return {
        ...state,
        allListColumns: newArr.map((elem, i) => ({
          ...elem,
          value: i >= index ? elem.value - 1 : elem.value,
        })),
      };

    default:
      return state;
  }
}
