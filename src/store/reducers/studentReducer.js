const initialState = {};

export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STUDENT":
            return { ...action.payload };
        default:
            return state;
    }
};
