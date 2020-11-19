import ACTIONS from "../../constans/ACTIONS";
const initialState = {
    allUsers: [{
        name: "Stefan Stefanovic",
        avatarImage: "",
        value: 0
    }, {
        name: "Pera Peric",
        avatarImage: "",
        value: 1,
    }, {
        name: "Maja Novicic",
        avatarImage: "",
        value: 2
    }, {
        name: "Milos Peric",
        avatarImage: "",
        value: 3
    }]
};
export default function issueReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD_USER_TO_LIST:
            return {
                ...state,
                allUsers: [...state.allUsers,
                {
                    name: action.allUsers.name,
                    value: state.allUsers.length

                }],
            };
        case ACTIONS.DELETE_USER:
            const index = action.index;
            const newArr = [...state.allUsers];
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
                allUsers: newArray,
            };

        default:
            return state;
    }
}

