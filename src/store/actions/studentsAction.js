export const setStudents = (students) => {
    return {
        type: "SET_STUDENTS",
        payload: students,
    };
};
export const setFilteredStudents = (filteredStudents) => {
    return {
        type: "SET_FILTEREDSTUDENTS",
        payload: filteredStudents,
    };
};
export const setIsSearching = (bool) => {
    return {
        type: "SET_ISSEARCHING",
        payload: bool,
    };
};
export const setStopAnimatingToTrue = () => {
    return {
        type: "SET_STOPANIMATINGTOTRUE",
    };
};
