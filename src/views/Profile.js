import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// import ada from "../assets/images/ada.png";
import ImageModal from "../components/ImageModal";
import { showModal } from "../store/actions/imageModal";

import "../assets/css/Profile.css";
import { getAStudent } from "../services/students.service";
import { setStudent } from "../store/actions/studentAction";

export default function Profile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { matricNo } = useParams();
    const student = useSelector((state) => state.student);
    const handleClick = () => {
        dispatch(showModal());
    };

    useEffect(() => {
        dispatch(setStudent({}));
        const start = async () => {
            const data = await getAStudent(matricNo);
            if (data.success) {
                dispatch(setStudent(data.data[0]));
            }
        };
        start();
    }, [dispatch, matricNo]);

    return (
        <div className="profile">
            <div className="profile__wrapper">
                <div className="profile__image">
                    <img
                        onClick={() => handleClick()}
                        src={student?.ProfilePic}
                        alt="Profile__Image"
                    />
                </div>
                <div className="profile__content">
                    <div
                        className="profile__backbutton"
                        onClick={() => history.goBack()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                    </div>

                    <div className="profile__contentSection1">
                        <div className="profile__name">
                            <h1 className="profile__firstName">
                                {student?.LastName}
                            </h1>
                            <h1 className="profile__lastName">
                                {student?.FirstName}
                            </h1>
                        </div>
                        <button className="profile__btn">Sign Yearbook</button>
                    </div>
                    <div className="profile__contentSection2">
                        <div className="profile__contentSection2Left">
                            <h2 className="profile__contentSection2Header">
                                MIDDLE NAME
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.MiddleName}
                            </h1>
                        </div>
                        <div className="profile__contentSection2Right">
                            <h2 className="profile__contentSection2Header">
                                Matriculation Number
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.Matno}
                            </h1>
                        </div>
                    </div>
                    <div className="profile__contentSection2">
                        <div className="profile__contentSection2Left">
                            <h2 className="profile__contentSection2Header">
                                PROGRAM
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.program?.NameOfProgram}
                            </h1>
                        </div>
                        <div className="profile__contentSection2Right">
                            <h2 className="profile__contentSection2Header">
                                Student Email
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.email?.toLowerCase()}
                            </h1>
                        </div>
                    </div>
                    <div className="profile__contentSection2">
                        <div className="profile__contentSection2Left">
                            <h2 className="profile__contentSection2Header">
                                Date of Birth
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.DOB !== null ? student?.DOB : "N/A"}
                            </h1>
                        </div>
                        <div className="profile__contentSection2Right">
                            <h2 className="profile__contentSection2Header">
                                LinkedIn
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.linkedln !== ""
                                    ? student?.linkedln
                                    : "N/A"}
                            </h1>
                        </div>
                    </div>
                    <div className="profile__contentSection2">
                        <div className="profile__contentSection2Left">
                            <h2 className="profile__contentSection2Header">
                                Gender
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.gender ? student?.gender : "N/A"}
                            </h1>
                        </div>
                        <div className="profile__contentSection2Right">
                            <h2 className="profile__contentSection2Header">
                                Instagram
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.IGhandle ? student?.IGhandle : "N/A"}
                            </h1>
                        </div>
                    </div>
                    <div className="profile__contentSection2">
                        <div className="profile__contentSection2Left">
                            <h2 className="profile__contentSection2Header">
                                Other Email
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.OtherEmail !== ""
                                    ? student?.OtherEmail
                                    : "N/A"}
                            </h1>
                        </div>
                        <div className="profile__contentSection2Right">
                            <h2 className="profile__contentSection2Header">
                                Twitter
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.Twitter !== ""
                                    ? student?.Twitter
                                    : "N/A"}
                            </h1>
                        </div>
                    </div>
                    <div className="profile__contentSection3">
                        <p>Bio: {student?.BIO !== "" ? student?.BIO : "N/A"}</p>
                    </div>
                    <div className="profile__contentSection4">
                        <div className="profile__contentSection4Text"></div>
                        <div className="profile__contentSection4Links"></div>
                    </div>
                </div>
            </div>
            <ImageModal imageSource={student?.ProfilePic} />
        </div>
    );
}
