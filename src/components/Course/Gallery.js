import React from "react";

import { LazyLoadComponent } from "react-lazy-load-image-component";

import "./Gallery.css";

// components
import StudentSearch from "./StudentSearch.js";
import StudentCard from "./StudentCard.js";

// react-reveal
import Bounce from "react-reveal/Bounce";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Loaders(props) {
    return (
        <div
            className="col-span-1 "
            style={{
                // background: "#4b4b4b4b",
                minHeight: "90vh",
            }}
        >
            <div
                className="loading"
                style={{ height: "70%", borderRadius: "20px" }}
            ></div>
            <div
                className="loading my-5"
                style={{ height: "3%", width: "45%", borderRadius: "20px" }}
            ></div>
            <div
                className="loading"
                style={{ height: "3%", width: "30%", borderRadius: "20px" }}
            ></div>
        </div>
    );
}

function Gallery({ noResult }) {
    const history = useHistory();
    const { students, filteredStudents, isSearching, stopAnimating } =
        useSelector((state) => state.students);

    if (noResult) {
        return (
            <div className="h-96 flex flex-col text-white justify-center items-center text-5xl py-96">
                <h1>NO STUDENTS FOUND</h1>
                <h1
                    onClick={() => history.goBack()}
                    className="underline text-gray-200 hover:text-gray-400 cursor-pointer  py-12"
                >
                    Go back
                </h1>
                <h1>OR </h1>
                <h1
                    onClick={() => history.push("/")}
                    className="underline text-gray-200 hover:text-gray-400 cursor-pointer py-12 "
                >
                    Go to home page
                </h1>
            </div>
        );
    }

    return (
        <div
            className="Gallery__container pt-28 pr-28 pl-28 pb-[900px] flex flex-col w-full "
            style={{ zIndex: 3, minHeight: "100vh", paddingBottom: "28px" }}
        >
            <StudentSearch />
            <div className="Gallery__studentContainer grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-32">
                {students.length ? (
                    !isSearching ? (
                        stopAnimating ? (
                            students?.map((student) => {
                                return (
                                    <LazyLoadComponent key={student.matricNo}>
                                        <StudentCard
                                            firstName={student.firstName}
                                            lastName={student.lastName}
                                            profilePic={student.profilePic}
                                            matricNo={student.matricNo}
                                        />
                                    </LazyLoadComponent>
                                );
                            })
                        ) : (
                            students?.map((student) => {
                                return (
                                    <LazyLoadComponent key={student.matricNo}>
                                        <Bounce left>
                                            <StudentCard
                                                firstName={student.firstName}
                                                lastName={student.lastName}
                                                profilePic={student.profilePic}
                                                matricNo={student.matricNo}
                                            />
                                        </Bounce>
                                    </LazyLoadComponent>
                                );
                            })
                        )
                    ) : (
                        filteredStudents?.map((student) => {
                            return (
                                <LazyLoadComponent key={student.matricNo}>
                                    <StudentCard
                                        firstName={student.firstName}
                                        lastName={student.lastName}
                                        profilePic={student.profilePic}
                                        matricNo={student.matricNo}
                                    />
                                </LazyLoadComponent>
                            );
                        })
                    )
                ) : (
                    <>
                        <Loaders key={1} />
                        <Loaders key={2} />
                        <Loaders key={3} />
                        <Loaders key={4} />
                        <Loaders key={5} />
                        <Loaders key={6} />
                        <Loaders key={7} />
                        <Loaders key={8} />
                        <Loaders key={9} />
                        <Loaders key={10} />
                        <Loaders key={11} />
                        <Loaders key={12} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Gallery;
