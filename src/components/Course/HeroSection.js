import React, { useState, useEffect } from "react";

// svg
import { ReactComponent as SearchIcon } from "../../assets/svg/course-search-icon.svg";
import Layer from "../../assets/svg/course-layer.svg";

// components
import CourseSearch from "./CourseSearch.js";

// css
import "./HeroSection.css";

// style
const styles = {
    departmentCode: {
        fontWeight: "700",
        fontSize: "56px",
    },
    text: {
        fontWeight: "700",
        fontSize: "32px",
    },
    settext: {
        fontWeight: "700",
        fontSize: "32px",
        cursor: "pointer",
    },
    background: (image) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("${
            image ? image : ""
        }")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
};

function HeroSection({ collegeCode, courseName, department, programmePic }) {
    const [startTransition, setstartTransition] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [course, setCourse] = useState("");

    const disappear = "transition duration-200 ease-linear opacity-0";
    const reappear = "transition duration-200 ease-linear opacity-100";

    useEffect(() => {
        setstartTransition(true);
    }, []);

    const showInputHandler = () => {
        setShowInput(!showInput);
    };

    return (
        <div
            className="HeroSection__container px-10 md:px-16 flex flex-col justify-between pb-56 relative overflow-hidden md:shadow-none shadow-2xl"
            style={styles.background(programmePic)}
        >
            <nav className="HeroSection__navbar w-full pt-11">
                <ul className="flex flex-row justify-end md:justify-between items-center">
                    <li
                        className="HeroSection__department-code md:block hidden"
                        style={styles.departmentCode}
                    >
                        <h1 className={showInput ? disappear : reappear}>
                            {collegeCode}
                        </h1>
                    </li>
                    <li className="md:block hidden  animate-bounce">
                        <h1
                            className={showInput ? disappear : reappear}
                            style={styles.settext}
                        >
                            THE 16TH SET
                        </h1>
                    </li>
                    <li
                        className="HeroSection__search "
                        style={styles.text}
                        onClick={showInputHandler}
                    >
                        <SearchIcon
                            className={`w-10 h-10 md:h-20 md:w-20 ${
                                showInput ? "invisible" : ""
                            }`}
                            style={{ cursor: "pointer" }}
                        />
                    </li>
                </ul>
            </nav>

            <section
                className={`HeroSection__course-detail text-right transform ${
                    startTransition ? "translate-x-0" : "translate-x-full"
                } transition duration-1000 ease-linear ${
                    showInput ? disappear : reappear
                }`}
            >
                <h1
                    className="HeroSection__course-name text-7xl lg:text-8xl pl-64"
                    style={{ color: "#FAFAFA" }}
                >
                    {courseName}
                </h1>
                <p
                    className="HeroSection__department text-4xl font-thin mt-10"
                    style={{ color: "#FAFAFA" }}
                >
                    {department}
                </p>
            </section>

            <CourseSearch
                course={course}
                setCourse={setCourse}
                showInput={showInput}
                showInputHandler={showInputHandler}
            />
            <div
                className="-bottom-3 hidden sm:block absolute left-0 w-full origin-bottom-left"
                style={{
                    aspectRatio: "900/50",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0)), url('${Layer}')`,
                }}
            ></div>
        </div>
    );
}

export default HeroSection;
