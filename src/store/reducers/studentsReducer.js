const initialState = {
    students: [],
    filteredStudents: [],
    isSearching: false,
    stopAnimating: false,
};

export const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STUDENTS":
            return { ...state, students: [...action.payload] };
        case "SET_FILTEREDSTUDENTS":
            return {
                ...state,
                filteredStudents: [...action.payload],
            };
        case "SET_ISSEARCHING":
            return {
                ...state,
                isSearching: action.payload,
            };
        case "SET_STOPANIMATINGTOTRUE":
            return {
                ...state,
                stopAnimating: true,
            };
        default:
            return state;
    }
};
