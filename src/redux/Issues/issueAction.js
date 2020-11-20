import ACTIONS from '../../constans/ACTIONS';

const addIssueToList = (newIssue) => {
  return {
    type: ACTIONS.ADD_ISSUE_TO_LIST,
    issue: newIssue,
  };
};
const editIssue = (newIssue) => {
  return {
    type: ACTIONS.EDIT_ISSUE,
    editIssue: newIssue,
  };
};
const deleteTaskItem = (id) => {
  return {
    type: ACTIONS.DELETE_ISSUE,
    deletedIssueId: id,
  };
};

export { addIssueToList, editIssue, deleteTaskItem };
