const initialState = { students: [], filteredStudents: [] };

export const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STUDENTS":
            return { ...state, students: [...action.payload] };
        case "SET_FILTEREDSTUDENTS":
            return {
                ...state,
                filteredStudents: [...action.payload],
            };
        default:
            return state;
    }
};
