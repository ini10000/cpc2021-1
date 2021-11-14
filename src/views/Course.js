import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

// components
import HeroSection from "../components/Course/HeroSection";
import Gallery from "../components/Course/Gallery.js";
import { getAllStudentsForAProgramme } from "../services/students.service";
import { useDispatch } from "react-redux";
import { setStudents } from "../store/actions/studentsAction";

function Course() {
    const { course } = useParams();

    const [collegeCode, setCollegeCode] = useState(" ");
    const [programmeName, setProgrammeName] = useState(" ");
    const [programmePic, setProgrammePic] = useState(" ");
    const [noResult, setNoResult] = useState(false);
    const dispatch = useDispatch();

    const splitWords = (sentence) => {
        if (sentence.split(" ").length === 1) {
            return [sentence, ""];
        } else {
            let lastWord, otherWords;
            lastWord = sentence.split(" ")[sentence.split(" ").length - 1];
            otherWords = sentence
                .split(" ")
                .slice(0, sentence.split(" ").length - 1)
                .join(" ");
            return [otherWords, lastWord];
        }
    };

    useEffect(() => {
        dispatch(setStudents([]));
        const onMount = async () => {
            const data = await getAllStudentsForAProgramme(course);

            if (data.success === true && data.data.length > 0) {
                setCollegeCode(data.data[0].college["NameOfCollege"]);
                setProgrammePic(data.data[0].program["Image"]);
                setProgrammeName(data.data[0].program["NameOfProgram"]);

                dispatch(
                    setStudents(
                        data.data.map((student) => {
                            return {
                                firstName: student["FirstName"],
                                lastName: student["LastName"],
                                profilePic: student["ProfilePic"],
                                matricNo: student["Matno"],
                            };
                        })
                    )
                );
            } else {
                setProgrammeName("NO RESULT MATCH");
                setNoResult(true);
            }
        };
        onMount();
    }, [course, dispatch]);

    return (
        <div
            className="Course__container text-white"
            style={{ fontFamily: "Poppins", backgroundColor: "#333333" }}
        >
            <HeroSection
                courseName={splitWords(programmeName)[0]}
                collegeCode={collegeCode}
                department={splitWords(programmeName)[1]}
                programmePic={programmePic}
            />

            <Gallery noResult={noResult} />
        </div>
    );
}

export default Course;
