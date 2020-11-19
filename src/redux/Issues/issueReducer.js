import ACTIONS from "../../constans/ACTIONS.js";
const initialState = {
    allIssues: [],
};
export default function issueReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD_ISSUE_TO_LIST:
            return {
                ...state,
                allIssues: [
                    ...state.allIssues,
                    { ...action.issue, id: state.allIssues.length }
                ],
            };

        case ACTIONS.EDIT_ISSUE:
            const id = action.editIssue.id;
            const newAllIssues = [...state.allIssues];
            newAllIssues[id] = { ...newAllIssues[id], ...action.editIssue };
            return {
                ...state,
                allIssues: newAllIssues,
            };

        case ACTIONS.DELETE_ISSUE:
            const index = action.deletedIssueId;
            const newArr = [...state.allIssues];
            newArr.splice(index, 1);
            const newArray = newArr.map((elem, i) => {
                if (i >= index) {
                    return {
                        ...elem,
                        id: elem.id - 1,
                    };
                }
                return elem;
            });
            return {
                ...state,
                allIssues: newArray,
            };

        default:
            return state;
    }
}
