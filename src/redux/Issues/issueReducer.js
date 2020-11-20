import ACTIONS from '../../constans/ACTIONS';

const initialState = {
  allIssues: [],
};
export default function issueReducer(state = initialState, action) {
  let id;
  const newAllIssues = [...state.allIssues];

  const index = action.deletedIssueId;
  const newArr = [...state.allIssues];
  newArr.splice(index, 1);

  switch (action.type) {
    case ACTIONS.ADD_ISSUE_TO_LIST:
      return {
        ...state,
        allIssues: [
          ...state.allIssues,
          { ...action.issue, id: state.allIssues.length },
        ],
      };

    case ACTIONS.EDIT_ISSUE:
      id = action.editIssue.id;
      newAllIssues[id] = { ...newAllIssues[id], ...action.editIssue };
      return {
        ...state,
        allIssues: newAllIssues,
      };

    case ACTIONS.DELETE_ISSUE:
      return {
        ...state,
        allIssues: newArr.map((elem, i) => {
          if (i >= index) {
            return {
              ...elem,
              id: elem.id - 1,
            };
          }
          return elem;
        }),
      };
    default:
      return state;
  }
}
