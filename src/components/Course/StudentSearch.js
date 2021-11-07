import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// icons
import { ReactComponent as SearchIcon } from "../../assets/svg/course-search-icon.svg";
import { setFilteredStudents } from "../../store/actions/studentsAction";

function StudentSearch() {
    const [studentName, setStudentName] = useState("");
    const { students } = useSelector((state) => state.students);
    const dispatch = useDispatch();

    const searchForAStudent = (e) => {
        e.preventDefault();
        var condition = new RegExp(studentName, "i");

        const filteredStudents = students.filter(function (el) {
            if (condition.test(el.firstName)) {
                return condition.test(el.firstName);
            } else {
                return condition.test(el.lastName);
            }
        });
        console.log(filteredStudents);
        dispatch(setFilteredStudents(filteredStudents));
    };
    return (
        <form
            onSubmit={searchForAStudent}
            action=""
            className="md:self-end flex w-full md:w-1/4 justify-center item border-b-2 border-white pb-6"
        >
            <button type="submit" className="mr-12" onClick={searchForAStudent}>
                <SearchIcon className="w-10 h-10" />
            </button>
            <input
                type="text"
                className="w-full h-14 outline-none bg-transparent text-4xl"
                placeholder="Find Student"
                value={studentName}
                onChange={(e) => {
                    setStudentName(e.target.value);
                    var condition = new RegExp(studentName, "i");

                    const filteredStudents = students.filter(function (el) {
                        if (condition.test(el.firstName)) {
                            return condition.test(el.firstName);
                        } else {
                            return condition.test(el.lastName);
                        }
                    });
                    console.log(filteredStudents);
                    dispatch(setFilteredStudents(filteredStudents));
                }}
            />
        </form>
    );
}

export default StudentSearch;
