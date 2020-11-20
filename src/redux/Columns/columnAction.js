import ACTIONS from '../../constans/ACTIONS';

const addColumn = (newListColumn) => {
  return {
    type: ACTIONS.ADD_LISTCOLUMN,
    listColumn: newListColumn,
  };
};

const deleteColumn = (id) => {
  return {
    type: ACTIONS.DELETE_COLUMN,
    index: id,
  };
};

export { addColumn, deleteColumn };
