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
