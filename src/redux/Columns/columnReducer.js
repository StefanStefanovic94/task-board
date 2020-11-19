import ACTIONS from "../../constans/ACTIONS.js";
const initialState = {
    allListColumns: [{
        name: "To Do",
        createdAt: "date",
        itemCount: "",
        value: 0
    }, {
        name: "In Progress",
        createdAt: "date",
        itemCount: "",
        value: 1
    }, {
        name: "On Hold",
        createdAt: "date",
        itemCount: "",
        value: 2
    }, {
        name: "Done",
        createdAt: "date",
        itemCount: "",
        value: 3
    }
    ],
};
export default function listColumnReducer(state = initialState, action) {
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
            const index = action.index;
            const newArr = [...state.allListColumns];
            newArr.splice(index, 1);
            const newArray = newArr.map((elem, i) => {
                if (i >= index) {
                    return {
                        ...elem,
                        value: elem.value - 1,
                    };
                }
                return elem;
            });
            return {
                ...state,
                allListColumns: newArray,
            };

        default:
            return state;
    }
}

// { ...action.issue, id: state.allIssues.length }

// return {
//     ...state,
//     allListColumns: [
//       ...state.allListColumns,
//       {
//         name: action.listColumn.title,
//         value: action.listColumn.value,
//       },
//     ],
//   };
