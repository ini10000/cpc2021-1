import React from "react";

import { LazyLoadComponent } from "react-lazy-load-image-component";

import "./Gallery.css";

// components
import StudentSearch from "./StudentSearch.js";
import StudentCard from "./StudentCard.js";

// react-reveal
import Bounce from "react-reveal/Bounce";
import { useSelector } from "react-redux";

function Loaders(props) {
    return (
        <div
            className="col-span-1 loading"
            style={{
                // background: "#4b4b4b4b",
                minHeight: "50vh",
                borderRadius: "20px",
            }}
        ></div>
    );
}

function Gallery() {
    const { students, filteredStudents } = useSelector(
        (state) => state.students
    );
    return (
        <div
            className="Gallery__container pt-28 pr-28 pl-28 pb-[900px] flex flex-col w-full "
            style={{ zIndex: 3, minHeight: "100vh", paddingBottom: "28px" }}
        >
            <StudentSearch />
            <div className="Gallery__studentContainer grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-32">
                {students.length ? (
                    filteredStudents.length === 0 ? (
                        students.map((student) => {
                            return (
                                <LazyLoadComponent>
                                    <Bounce left>
                                        <StudentCard
                                            firstName={student.firstName}
                                            lastName={student.lastName}
                                            profilePic={student.profilePic}
                                            key={student.matricNo}
                                            matricNo={student.matricNo}
                                        />
                                    </Bounce>
                                </LazyLoadComponent>
                            );
                        })
                    ) : (
                        filteredStudents.map((student) => {
                            return (
                                <LazyLoadComponent>
                                    <StudentCard
                                        firstName={student.firstName}
                                        lastName={student.lastName}
                                        profilePic={student.profilePic}
                                        key={student.matricNo}
                                        matricNo={student.matricNo}
                                    />
                                </LazyLoadComponent>
                            );
                        })
                    )
                ) : (
                    <>
                        <Loaders />
                        <Loaders />
                        <Loaders />
                        <Loaders />
                        <Loaders />
                        <Loaders />
                        <Loaders />
                        <Loaders />
                        <Loaders />
                        <Loaders />
                        <Loaders />
                        <Loaders />
                    </>
                )}
            </div>
        </div>
    );
}

export default Gallery;
